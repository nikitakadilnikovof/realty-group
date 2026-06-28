function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };
}

function getLocalized(value, language) {
  if (!value) return '';
  if (typeof value === 'string') return value;
  return value[language] || value.en || value.tr || Object.values(value)[0] || '';
}

function extractOpenAIText(data) {
  if (typeof data?.output_text === 'string' && data.output_text.trim()) {
    return data.output_text.trim();
  }

  const parts = [];

  for (const item of data?.output || []) {
    for (const content of item?.content || []) {
      if (typeof content?.text === 'string' && content.text.trim()) {
        parts.push(content.text.trim());
      }
    }
  }

  return parts.join('\n').trim();
}

function normalizeHistory(history) {
  if (!Array.isArray(history)) return [];

  return history
    .slice(-20)
    .map(item => ({
      role: item?.role === 'assistant' ? 'assistant' : 'user',
      content: String(item?.content || '').slice(0, 1200)
    }))
    .filter(item => item.content.trim());
}

function normalizePreferences(preferences) {
  const source = preferences && typeof preferences === 'object' ? preferences : {};

  return {
    dealType: String(source.dealType || '').slice(0, 40),
    propertyType: String(source.propertyType || '').slice(0, 40),
    districtPreference: String(source.districtPreference || '').slice(0, 40),
    nearSea: Boolean(source.nearSea),
    city: String(source.city || '').slice(0, 80),
    budget: String(source.budget || '').slice(0, 40)
  };
}

function preferencesSearchText(preferences) {
  const parts = [];

  if (preferences.dealType === 'rent') parts.push('rent rental аренда снять kiralik');
  if (preferences.dealType === 'buy') parts.push('sale buy purchase продажа купить satilik');
  if (preferences.propertyType === 'apartment') parts.push('apartment flat квартира апартамент daire');
  if (preferences.propertyType === 'villa') parts.push('villa house дом вилла ev');
  if (preferences.districtPreference === 'quiet') parts.push('quiet calm peaceful тихий спокойный sessiz');
  if (preferences.districtPreference === 'center') parts.push('center centre центр merkez');
  if (preferences.nearSea) parts.push('sea beach coast море пляж deniz');
  if (preferences.city) parts.push(preferences.city);
  if (preferences.budget) parts.push(preferences.budget);

  return parts.join(' ');
}

function derivePropertiesUrl(pageUrl) {
  try {
    const url = new URL(pageUrl);
    if (url.hostname === 'localhost' || url.hostname === '127.0.0.1') return '';
    return `${url.origin}/data/properties.json`;
  } catch {
    return '';
  }
}

async function loadProperties(env, pageUrl) {
  const propertiesUrl = env.PROPERTIES_URL || derivePropertiesUrl(pageUrl);
  if (!propertiesUrl) return [];

  try {
    const response = await fetch(propertiesUrl, {
      headers: { 'Accept': 'application/json' }
    });

    if (!response.ok) {
      console.warn('Properties request failed:', response.status);
      return [];
    }

    const data = await response.json();
    return Array.isArray(data?.properties) ? data.properties : [];
  } catch (error) {
    console.warn('Properties load failed:', String(error?.message || error));
    return [];
  }
}

function propertySearchText(property, language) {
  return [
    property.id,
    property.objectNumber,
    property.status,
    property.type,
    property._dealType,
    property._propertyType,
    property._district,
    property._rooms,
    getLocalized(property.title, language),
    getLocalized(property.description, language),
    property.location?.city,
    property.location?.district,
    property.location?.subdistrict,
    getLocalized(property.location?.display, language)
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
}

function scoreProperty(property, searchText, language, propertyId, preferences = {}) {
  let score = 0;
  const text = propertySearchText(property, language);
  const query = searchText.toLowerCase();

  if (property.id === propertyId) score += 100;
  if (property.objectNumber && query.includes(String(property.objectNumber))) score += 40;

  for (const token of query.split(/[^\p{L}\p{N}]+/u).filter(Boolean)) {
    if (token.length < 3) continue;
    if (text.includes(token)) score += 4;
  }

  const price = Number(property.price?.value || property._price);
  const budgetMatches = query.match(/(\d[\d\s.,]{3,})/g) || [];

  for (const rawBudget of budgetMatches) {
    const budget = Number(rawBudget.replace(/[^\d]/g, ''));
    if (budget && price && price <= budget) score += 12;
  }

  const status = String(property.status || property._dealType || '').toLowerCase();
  const type = String(property.type || property._propertyType || '').toLowerCase();

  if (preferences.dealType === 'rent' && /rent|rental|kiralik|аренд/.test(status)) score += 28;
  if (preferences.dealType === 'buy' && /sale|satilik|продаж|buy/.test(status)) score += 28;
  if (preferences.propertyType === 'apartment' && /apartment|flat|daire|квартир|апартамент/.test(type)) score += 18;
  if (preferences.propertyType === 'villa' && /villa|house|ev|дом|вилл/.test(type)) score += 18;
  if (preferences.nearSea && /sea|beach|coast|море|пляж|deniz/.test(text)) score += 14;
  if (preferences.districtPreference === 'quiet' && /quiet|calm|peaceful|тих|спокой|sessiz|sarisu|сарысу/.test(text)) score += 10;
  if (preferences.districtPreference === 'center' && /center|centre|центр|merkez/.test(text)) score += 10;

  return score;
}

function compactProperty(property, language) {
  return {
    id: property.id,
    objectNumber: property.objectNumber || property.number || '',
    title: getLocalized(property.title, language),
    description: getLocalized(property.description, language).slice(0, 450),
    status: property.status || property._dealType || '',
    type: property.type || property._propertyType || '',
    location: {
      city: property.location?.city || '',
      district: property.location?.district || property._district || '',
      subdistrict: property.location?.subdistrict || '',
      display: getLocalized(property.location?.display, language)
    },
    price: {
      value: property.price?.value || property._price || null,
      currency: property.price?.currency || 'USD'
    },
    area: {
      value: property.area?.value || property._area || null,
      unit: property.area?.unit || 'm2'
    },
    features: {
      rooms: property.features?.rooms || property._rooms || '',
      bedrooms: property.features?.bedrooms || null,
      bathrooms: property.features?.bathrooms || null,
      floor: property.features?.floor || null,
      furnished: property.features?.furnished ?? null,
      parking: property.features?.parking ?? property._parking ?? null
    }
  };
}

function hasPropertySearchIntent(message, history, preferences) {
  const historyText = (Array.isArray(history) ? history : [])
    .filter(item => item.role === 'user')
    .slice(-6)
    .map(item => item.content)
    .join(' ');
  const text = [historyText, message, preferencesSearchText(preferences)]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
  const hasPreferences = Boolean(
    preferences?.dealType ||
    preferences?.propertyType ||
    preferences?.districtPreference ||
    preferences?.nearSea ||
    preferences?.city ||
    preferences?.budget
  );

  return hasPreferences || /property|properties|option|options|apartment|house|villa|rent|buy|sale|district|sea|beach|home|object|real estate|недвиж|объект|вариант|квартир|дом|вилл|аренд|купить|покуп|продаж|район|море|жиль/.test(text);
}

function selectRelevantProperties(properties, message, language, propertyId, preferences, history) {
  const historyText = (Array.isArray(history) ? history : [])
    .filter(item => item.role === 'user')
    .slice(-6)
    .map(item => item.content)
    .join(' ');
  const searchText = [
    historyText,
    message,
    preferencesSearchText(preferences)
  ].filter(Boolean).join(' ');

  const scoredProperties = properties
    .map((property, index) => ({
      property,
      score: scoreProperty(property, searchText, language, propertyId, preferences),
      index
    }))
    .sort((a, b) => (b.score - a.score) || (a.index - b.index));

  const matchingProperties = scoredProperties.filter(item => item.score > 0);
  const shouldRecommendClosest = hasPropertySearchIntent(message, history, preferences);
  const sourceProperties = matchingProperties.length ? matchingProperties : (shouldRecommendClosest ? scoredProperties : []);

  return sourceProperties
    .slice(0, 8)
    .map(item => compactProperty(item.property, language));
}

function escapeTelegramHtml(value) {
  return String(value || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function formatTelegramLead({ phone, history, preferences, language, page, url, propertyId }) {
  const safePhone = escapeTelegramHtml(phone);
  const lines = [
    '<b>Новая заявка из AI-ассистента</b>',
    '',
    `Телефон / WhatsApp: <code>${safePhone}</code>`,
    `Язык: ${escapeTelegramHtml(language || 'unknown')}`,
    `Страница: ${escapeTelegramHtml(page || 'unknown')}`,
    `URL: ${escapeTelegramHtml(url || 'unknown')}`,
    `ID объекта: ${escapeTelegramHtml(propertyId || 'none')}`
  ];

  const preferenceSummary = [
    preferences?.dealType ? `сделка: ${preferences.dealType}` : '',
    preferences?.propertyType ? `тип: ${preferences.propertyType}` : '',
    preferences?.districtPreference ? `район: ${preferences.districtPreference}` : '',
    preferences?.nearSea ? 'ближе к морю' : '',
    preferences?.budget ? `бюджет: ${preferences.budget}` : ''
  ].filter(Boolean).join(', ');

  if (preferenceSummary) {
    lines.push(`Предпочтения: ${escapeTelegramHtml(preferenceSummary)}`);
  }

  if (history.length) {
    lines.push('', '<b>История переписки:</b>');

    for (const item of history.slice(-12)) {
      const content = escapeTelegramHtml(item.content);

      if (item.role === 'assistant') {
        lines.push(`<i>Ассистент: ${content}</i>`);
      } else {
        lines.push(`<b>Клиент: ${content}</b>`);
      }
    }
  }

  return lines.join('\n').slice(0, 3900);
}

function formatTelegramAppointment({ date, firstName, lastName, phone, message, language, page, url, propertyId }) {
  const fullName = [firstName, lastName].filter(Boolean).join(' ');
  const lines = [
    '<b>Новая запись с сайта</b>',
    '',
    `Дата: ${escapeTelegramHtml(date || 'не указана')}`,
    `Имя: ${escapeTelegramHtml(fullName || 'не указано')}`,
    `Телефон / WhatsApp: <code>${escapeTelegramHtml(phone)}</code>`,
    `Сообщение: ${escapeTelegramHtml(message || 'не указано')}`,
    '',
    `Язык: ${escapeTelegramHtml(language || 'unknown')}`,
    `Страница: ${escapeTelegramHtml(page || 'unknown')}`,
    `URL: ${escapeTelegramHtml(url || 'unknown')}`,
    `ID объекта: ${escapeTelegramHtml(propertyId || 'none')}`
  ];

  return lines.join('\n').slice(0, 3900);
}

async function sendTelegramMessage(env, text) {
  if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_CHAT_ID) {
    return Response.json(
      { error: 'Telegram secrets are missing' },
      { status: 500, headers: corsHeaders() }
    );
  }

  const telegramResponse = await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chat_id: env.TELEGRAM_CHAT_ID,
      text,
      parse_mode: 'HTML',
      disable_web_page_preview: true
    })
  });

  const telegramData = await telegramResponse.json().catch(() => ({}));

  if (!telegramResponse.ok || telegramData?.ok === false) {
    return Response.json(
      {
        error: 'Telegram request failed',
        details: telegramData?.description || `Telegram status ${telegramResponse.status}`
      },
      { status: 502, headers: corsHeaders() }
    );
  }

  return Response.json(
    { ok: true },
    { headers: corsHeaders() }
  );
}

async function sendTelegramLead(env, lead) {
  return sendTelegramMessage(env, formatTelegramLead(lead));
}

async function handleCallbackRequest(body, env) {
  const phone = String(body.phone || '').trim().slice(0, 80);
  const language = String(body.language || 'ru').trim();
  const page = String(body.page || '').trim();
  const url = String(body.url || '').trim();
  const propertyId = String(body.propertyId || '').trim();
  const history = normalizeHistory(body.history);
  const preferences = normalizePreferences(body.preferences);

  if (!phone) {
    return Response.json(
      { error: 'Phone is required' },
      { status: 400, headers: corsHeaders() }
    );
  }

  return sendTelegramLead(env, {
    phone,
    history,
    preferences,
    language,
    page,
    url,
    propertyId
  });
}

async function handleAppointmentRequest(body, env) {
  const date = String(body.date || '').trim().slice(0, 40);
  const firstName = String(body.firstName || '').trim().slice(0, 80);
  const lastName = String(body.lastName || '').trim().slice(0, 80);
  const phone = String(body.phone || '').trim().slice(0, 80);
  const message = String(body.message || '').trim().slice(0, 800);
  const language = String(body.language || 'ru').trim();
  const page = String(body.page || '').trim();
  const url = String(body.url || '').trim();
  const propertyId = String(body.propertyId || '').trim();

  if (!phone) {
    return Response.json(
      { error: 'Phone is required' },
      { status: 400, headers: corsHeaders() }
    );
  }

  return sendTelegramMessage(env, formatTelegramAppointment({
    date,
    firstName,
    lastName,
    phone,
    message,
    language,
    page,
    url,
    propertyId
  }));
}

async function handleAssistantMessage(body, env) {
  if (!env.OPENAI_API_KEY) {
    return Response.json(
      { error: 'OPENAI_API_KEY secret is missing' },
      { status: 500, headers: corsHeaders() }
    );
  }

  const message = String(body.message || '').trim();
  const language = String(body.language || 'ru').trim();
  const page = String(body.page || '').trim();
  const url = String(body.url || '').trim();
  const propertyId = String(body.propertyId || '').trim();
  const history = normalizeHistory(body.history).slice(-10);
  const preferences = normalizePreferences(body.preferences);

  if (!message) {
    return Response.json(
      { error: 'Message is required' },
      { status: 400, headers: corsHeaders() }
    );
  }

  if (message.length > 2000) {
    return Response.json(
      { error: 'Message is too long' },
      { status: 400, headers: corsHeaders() }
    );
  }

  const properties = await loadProperties(env, url);
  const relevantProperties = selectRelevantProperties(properties, message, language, propertyId, preferences, history);

  const instructions = `
Persona:
- Your name is Aziz.
- You answer as the agency's general director, not as a generic AI assistant.
- You are confident, warm, respectful and practical.
- You speak like an experienced eastern businessman: hospitable, witty, calm, a little charismatic.
- Use light tasteful humor occasionally, but do not overdo it.
- Do not use offensive stereotypes, religious jokes, vulgar jokes or exaggerated caricature.
- Your humor should feel like friendly hospitality: "let's choose calmly, good property does not run away, but good deals sometimes do."

Your tasks:
- help users choose properties from the provided property database;
- answer questions about buying, renting, areas, documents, taxes, TAPU, residence permit and transaction process;
- answer in the user's language;
- be concise, practical and friendly;
- if suitable properties are available in context, recommend them by title and object number;
- if there is no exact match but property context contains alternatives, recommend the closest available option anyway;
- when recommending a closest alternative, clearly explain why it is close to the user's request and what compromise it has;
- do not say "we have no such options", "there are no properties" or similar phrases while property context contains at least one property;
- do not invent properties that are not present in the provided property context;
- do not include markdown links, raw URLs or HTML links in your answer; mention only the property title and object number, because the frontend renders clickable previews;
- ask clarifying questions if the user has not provided enough details;
- if the user asks to show properties but gives no budget, district, deal type or property type, do not say there is no selected object; ask 2-3 useful clarifying questions and suggest practical directions such as sea proximity, quiet district, center, apartment, villa, rent or purchase;
- if the previous conversation already contains preferences, use those preferences before asking for more details;
- for legal, tax, immigration and document questions, explain that your answer is general information and should be checked with a licensed specialist;
- when the user seems ready, ask for their name and phone/WhatsApp so a manager can contact them.

Style:
- In Russian, address the user politely with "вы".
- You may occasionally say phrases like "мой друг" or "давайте посмотрим спокойно", but not in every answer.
- Keep answers useful first, charming second.
- Do not mention that you are an AI unless directly asked.

Context:
- Current user language: ${language}
- Current site page: ${page || 'unknown'}
- Current URL: ${url || 'unknown'}
- Current property ID: ${propertyId || 'none'}
- Loaded properties count: ${properties.length}
- Known user preferences: ${JSON.stringify(preferences)}
  `.trim();

  const conversationInput = [
    ...history,
    {
      role: 'user',
      content: `
User message:
${message}

Known user preferences:
${JSON.stringify(preferences, null, 2)}

Relevant property context:
${JSON.stringify(relevantProperties, null, 2)}

Important:
- The property context can contain closest available alternatives, not only exact matches.
- If alternatives are present, recommend the best one instead of saying that nothing is available.
      `.trim()
    }
  ];

  let openaiResponse;
  let data;

  try {
    openaiResponse = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4.1-mini',
        instructions,
        input: conversationInput,
        max_output_tokens: 800
      })
    });

    data = await openaiResponse.json();
  } catch (error) {
    console.error('OpenAI fetch failed:', error);

    return Response.json(
      {
        error: 'OpenAI fetch failed',
        details: String(error?.message || error)
      },
      { status: 502, headers: corsHeaders() }
    );
  }

  console.log('OpenAI response status:', openaiResponse.status);
  console.log('Loaded properties:', properties.length);
  console.log('Relevant properties:', relevantProperties.map(item => item.objectNumber || item.id));
  console.log('OpenAI response body:', JSON.stringify(data));

  if (!openaiResponse.ok) {
    return Response.json(
      {
        error: 'OpenAI request failed',
        details: data?.error?.message || 'Unknown error'
      },
      { status: openaiResponse.status, headers: corsHeaders() }
    );
  }

  const answer = extractOpenAIText(data);

  return Response.json(
    {
      answer: answer || 'Не удалось получить ответ.',
      responseId: data?.id || null,
      matchedProperties: relevantProperties.map(item => ({
        id: item.id,
        objectNumber: item.objectNumber,
        title: item.title
      }))
    },
    {
      headers: corsHeaders()
    }
  );
}

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: corsHeaders()
      });
    }

    if (request.method !== 'POST') {
      return Response.json(
        { error: 'Method not allowed' },
        { status: 405, headers: corsHeaders() }
      );
    }

    let body;

    try {
      body = await request.json();
    } catch {
      return Response.json(
        { error: 'Invalid JSON body' },
        { status: 400, headers: corsHeaders() }
      );
    }

    if (body.action === 'callback_request') {
      return handleCallbackRequest(body, env);
    }

    if (body.action === 'appointment_request') {
      return handleAppointmentRequest(body, env);
    }

    return handleAssistantMessage(body, env);
  }
};
