const AI_ASSISTANT_ENDPOINT = 'https://realty-ai-assistant.nikitakadilnikovof.workers.dev/';
const AI_ASSISTANT_STORAGE_KEY = 'arg-ai-assistant-sessions-v1';
const AI_ASSISTANT_MAX_SESSIONS = 20;
const AI_ASSISTANT_MAX_MESSAGES = 40;

const AI_ASSISTANT_TRANSLATIONS = {
  aiAssistant: {
    tr: 'AI asistan',
    ru: 'AI ассистент',
    en: 'AI assistant',
    fr: 'Assistant IA',
    de: 'AI Assistent',
    ar: 'AI assistant'
  },
  aiAssistantOnline: {
    tr: 'Cevaplamaya hazir',
    ru: 'Готов помочь с подбором',
    en: 'Ready to help',
    fr: 'Pret a aider',
    de: 'Bereit zu helfen',
    ar: 'Ready to help'
  },
  aiAssistantGreeting: {
    tr: 'Merhaba! Butce, bolge ve amacinizi yazin, size uygun secenekleri onereyim.',
    ru: 'Здравствуйте! Напишите бюджет, район и цель покупки или аренды, я помогу сузить подбор.',
    en: 'Hello! Share your budget, district and goal, and I will help narrow the selection.',
    fr: 'Bonjour ! Indiquez votre budget, quartier et objectif, je vous aide a affiner la selection.',
    de: 'Hallo! Nennen Sie Budget, Bezirk und Ziel, ich helfe bei der Auswahl.',
    ar: 'Hello! Share your budget, district and goal, and I will help narrow the selection.'
  },
  aiAssistantPlaceholder: {
    tr: 'Sorunuzu yazin...',
    ru: 'Напишите вопрос...',
    en: 'Type your question...',
    fr: 'Ecrivez votre question...',
    de: 'Schreiben Sie Ihre Frage...',
    ar: 'Type your question...'
  },
  aiAssistantQuickBudget: {
    tr: 'Butceme gore secenekler',
    ru: 'Подобрать по бюджету',
    en: 'Match my budget',
    fr: 'Selon mon budget',
    de: 'Nach Budget suchen',
    ar: 'Match my budget'
  },
  aiAssistantQuickDistrict: {
    tr: 'Bolge secimi',
    ru: 'Помочь с районом',
    en: 'Choose a district',
    fr: 'Choisir un quartier',
    de: 'Bezirk wahlen',
    ar: 'Choose a district'
  },
  aiAssistantQuickViewing: {
    tr: 'Goruntuleme planla',
    ru: 'Запланировать просмотр',
    en: 'Plan a viewing',
    fr: 'Planifier une visite',
    de: 'Besichtigung planen',
    ar: 'Plan a viewing'
  },
  aiAssistantFallback: {
    tr: 'Talebinizi aldik. Danismanimiz secenekleri kontrol edip sizinle iletisime gececek.',
    ru: 'Запрос принят. Консультант проверит подходящие варианты и свяжется с вами.',
    en: 'Request received. A consultant will check suitable options and contact you.',
    fr: 'Demande recue. Un conseiller verifiera les options et vous contactera.',
    de: 'Anfrage erhalten. Ein Berater prueft passende Optionen und meldet sich.',
    ar: 'Request received. A consultant will check suitable options and contact you.'
  },
  aiAssistantThinking: {
    tr: 'Yanit hazirlaniyor...',
    ru: 'Готовлю ответ...',
    en: 'Preparing an answer...',
    fr: 'Preparation de la reponse...',
    de: 'Antwort wird vorbereitet...',
    ar: 'Preparing an answer...'
  },
  aiAssistantError: {
    tr: 'Su anda cevap alinamadi. Lutfen biraz sonra tekrar deneyin.',
    ru: 'Сейчас не удалось получить ответ. Попробуйте еще раз чуть позже.',
    en: 'Could not get an answer right now. Please try again in a moment.',
    fr: 'Impossible obtenir une reponse pour le moment. Veuillez reessayer.',
    de: 'Im Moment konnte keine Antwort geladen werden. Bitte versuchen Sie es erneut.',
    ar: 'Could not get an answer right now. Please try again in a moment.'
  },
  aiAssistantHistory: {
    tr: 'Gecmis sohbetler',
    ru: 'История переписок',
    en: 'Chat history',
    fr: 'Historique',
    de: 'Chatverlauf',
    ar: 'Chat history'
  },
  aiAssistantNewChat: {
    tr: 'Yeni sohbet',
    ru: 'Новый диалог',
    en: 'New chat',
    fr: 'Nouvelle discussion',
    de: 'Neuer Chat',
    ar: 'New chat'
  },
  aiAssistantNoHistory: {
    tr: 'Kayitli sohbet yok.',
    ru: 'Сохранённых диалогов пока нет.',
    en: 'No saved chats yet.',
    fr: 'Aucune discussion enregistree.',
    de: 'Noch keine gespeicherten Chats.',
    ar: 'No saved chats yet.'
  },
  aiAssistantDeleteChat: {
    tr: 'Sohbeti sil',
    ru: 'Удалить диалог',
    en: 'Delete chat',
    fr: 'Supprimer',
    de: 'Chat loeschen',
    ar: 'Delete chat'
  },
  aiAssistantSend: {
    tr: 'Gonder',
    ru: 'Отправить',
    en: 'Send',
    fr: 'Envoyer',
    de: 'Senden',
    ar: 'Send'
  }
};

function aiAssistantLanguage() {
  return document.body.dataset.lang || document.documentElement.lang || 'tr';
}

function createAssistantSession() {
  const now = new Date().toISOString();
  return {
    id: `chat-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    title: '',
    createdAt: now,
    updatedAt: now,
    messages: []
  };
}

function loadAssistantSessionState() {
  try {
    const state = JSON.parse(localStorage.getItem(AI_ASSISTANT_STORAGE_KEY));
    if (!state || !Array.isArray(state.sessions)) throw new Error('Invalid session state');

    state.sessions = state.sessions
      .filter(session => session?.id && Array.isArray(session.messages))
      .slice(0, AI_ASSISTANT_MAX_SESSIONS);

    return state;
  } catch {
    return { activeSessionId: '', sessions: [] };
  }
}

function saveAssistantSessionState(state) {
  try {
    state.sessions = state.sessions
      .sort((a, b) => String(b.updatedAt).localeCompare(String(a.updatedAt)))
      .slice(0, AI_ASSISTANT_MAX_SESSIONS);
    localStorage.setItem(AI_ASSISTANT_STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.warn('[AI assistant] session save failed', error);
  }
}

function aiAssistantText(key) {
  const language = aiAssistantLanguage();
  const value = AI_ASSISTANT_TRANSLATIONS[key];
  return value?.[language] || value?.tr || key;
}

function aiAssistantEscapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function renderAssistantMessageHtml(text) {
  return aiAssistantEscapeHtml(text).replace(/\n{2,}/g, '<br><br>').replace(/\n/g, '<br>');
}

function cleanAssistantAnswer(value) {
  const text = String(value || '').trim();
  if (!text) return '';

  const halfLength = Math.floor(text.length / 2);
  const firstHalf = text.slice(0, halfLength).trim();
  const secondHalf = text.slice(halfLength).trim();

  if (firstHalf && firstHalf === secondHalf) return firstHalf;

  const paragraphs = text.split(/\n{2,}/);
  const uniqueParagraphs = paragraphs.filter((paragraph, index) => (
    index === 0 || paragraph.trim() !== paragraphs[index - 1].trim()
  ));

  return uniqueParagraphs.join('\n\n').trim();
}

function formatAssistantAnswer(value) {
  let text = cleanAssistantAnswer(value);
  if (!text) return '';

  text = text
    .replace(/\r\n/g, '\n')
    .replace(/([.!?])\s+(?=(?:[А-ЯA-ZЁ]|\d+\.|\- ))/g, '$1\n\n')
    .replace(/\n{3,}/g, '\n\n');

  return text.trim();
}

let aiAssistantPropertiesPromise = null;

function aiAssistantGetLocalized(value) {
  const language = aiAssistantLanguage();
  if (!value || typeof value !== 'object') return value || '';
  return value[language] || value.en || value.tr || Object.values(value)[0] || '';
}

function aiAssistantPropertyUrl(propertyId) {
  const params = new URLSearchParams();
  params.set('id', propertyId);
  params.set('lang', aiAssistantLanguage());
  return `./property.html?${params.toString()}`;
}

function aiAssistantFormatPrice(property) {
  const value = Number(property?.price?.value || property?._price);
  const currency = property?.price?.currency || 'USD';
  if (!Number.isFinite(value) || value <= 0) return '';

  try {
    return new Intl.NumberFormat(aiAssistantLanguage(), {
      style: 'currency',
      currency,
      maximumFractionDigits: 0
    }).format(value);
  } catch {
    return `${value.toLocaleString()} ${currency}`;
  }
}

function aiAssistantPreviewImage(property) {
  const media = property?.media || {};
  const preview = Array.isArray(media.preview) ? media.preview : [];
  if (preview[0]) return preview[0];

  const gallery = Array.isArray(media.gallery) ? media.gallery : [];
  if (gallery[0]) return gallery[0];

  const folder = String(media.folder || media.imageFolder || property?.objectNumber || '').replace(/[^\d]/g, '');
  if (folder) return `./image/${folder}/1.jpg`;

  return './assets/logo-realty-16-9.png';
}

async function loadAssistantProperties() {
  if (!aiAssistantPropertiesPromise) {
    aiAssistantPropertiesPromise = fetch('./data/properties.json')
      .then(response => (response.ok ? response.json() : { properties: [] }))
      .then(data => (Array.isArray(data.properties) ? data.properties : []))
      .catch(error => {
        console.warn('[AI assistant] properties load failed', error);
        return [];
      });
  }

  return aiAssistantPropertiesPromise;
}

function normalizeAssistantMatchText(value) {
  return String(value || '').toLocaleLowerCase().replace(/\s+/g, ' ').trim();
}

function isPropertyMentionedInAnswer(property, answer) {
  const answerText = normalizeAssistantMatchText(answer);
  if (!answerText) return false;

  const title = normalizeAssistantMatchText(property.title);
  const objectNumber = normalizeAssistantMatchText(property.objectNumber);
  const id = normalizeAssistantMatchText(property.id);

  return Boolean(
    (objectNumber && answerText.includes(objectNumber)) ||
    (id && answerText.includes(id)) ||
    (title && title.length > 8 && answerText.includes(title))
  );
}

async function enrichSuggestedProperties(items, answer) {
  const suggestions = Array.isArray(items) ? items : [];
  if (!suggestions.length) return [];

  const properties = await loadAssistantProperties();
  const seen = new Set();

  return suggestions
    .map(item => {
      const property = properties.find(candidate => (
        candidate.id === item?.id ||
        candidate.objectNumber === item?.objectNumber ||
        candidate.number === item?.objectNumber
      ));

      const source = property || item;
      const id = source?.id || item?.id;
      if (!id) return null;

      return {
        id,
        title: item?.title || aiAssistantGetLocalized(source.title) || id,
        objectNumber: source.objectNumber || source.number || item?.objectNumber || '',
        location: item?.location?.display || aiAssistantGetLocalized(source.location?.display) || [
          source.location?.district || source._district,
          source.location?.subdistrict
        ].filter(Boolean).join(' / '),
        price: aiAssistantFormatPrice(source),
        image: item?.image || item?.previewImage || aiAssistantPreviewImage(source),
        url: item?.url || aiAssistantPropertyUrl(id)
      };
    })
    .filter(Boolean)
    .filter(property => {
      const key = property.id || property.url || property.objectNumber;
      if (seen.has(key)) return false;
      seen.add(key);
      return isPropertyMentionedInAnswer(property, answer);
    })
    .slice(0, 3);
}

async function requestAssistantAnswer(message, history) {
  const payload = {
    message,
    history,
    language: aiAssistantLanguage(),
    page: document.body.dataset.page || '',
    url: window.location.href,
    propertyId: new URLSearchParams(window.location.search).get('id') || ''
  };

  console.info('[AI assistant] request payload', {
    endpoint: AI_ASSISTANT_ENDPOINT,
    payload
  });

  const response = await fetch(AI_ASSISTANT_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  const data = await response.json().catch(() => ({}));

  console.info('[AI assistant] server response', {
    ok: response.ok,
    status: response.status,
    data
  });

  if (!response.ok) {
    throw new Error(data.details || data.error || `Assistant request failed: ${response.status}`);
  }

  const answer = formatAssistantAnswer(data.answer) || aiAssistantText('aiAssistantFallback');

  return {
    answer,
    properties: await enrichSuggestedProperties(data.matchedProperties, answer)
  };
}

function createAssistantUi() {
  if (document.getElementById('aiAssistantWidget')) return;

  const widget = document.createElement('section');
  widget.className = 'ai-assistant-widget';
  widget.id = 'aiAssistantWidget';
  widget.innerHTML = `
    <div class="ai-assistant-window" id="aiAssistantWindow" role="dialog" aria-labelledby="aiAssistantTitle" aria-hidden="true">
      <div class="ai-assistant-header">
        <div class="ai-assistant-avatar" aria-hidden="true">
          <i class="fa-solid fa-robot"></i>
        </div>
        <div>
          <h2 id="aiAssistantTitle">${aiAssistantEscapeHtml(aiAssistantText('aiAssistant'))}</h2>
          <p>${aiAssistantEscapeHtml(aiAssistantText('aiAssistantOnline'))}</p>
        </div>
        <div class="ai-assistant-header-actions">
          <button id="aiAssistantHistory" type="button" aria-label="${aiAssistantEscapeHtml(aiAssistantText('aiAssistantHistory'))}" title="${aiAssistantEscapeHtml(aiAssistantText('aiAssistantHistory'))}">
            <i class="fa-solid fa-clock-rotate-left" aria-hidden="true"></i>
          </button>
          <button id="aiAssistantNewChat" type="button" aria-label="${aiAssistantEscapeHtml(aiAssistantText('aiAssistantNewChat'))}" title="${aiAssistantEscapeHtml(aiAssistantText('aiAssistantNewChat'))}">
            <i class="fa-solid fa-plus" aria-hidden="true"></i>
          </button>
          <button class="ai-assistant-close" id="aiAssistantClose" type="button" aria-label="Close">
            <i class="fa-solid fa-xmark" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div class="ai-assistant-sessions" id="aiAssistantSessions" hidden>
        <div class="ai-assistant-sessions-heading">
          <h3>${aiAssistantEscapeHtml(aiAssistantText('aiAssistantHistory'))}</h3>
          <button id="aiAssistantSessionsNew" type="button">
            <i class="fa-solid fa-plus" aria-hidden="true"></i>
            <span>${aiAssistantEscapeHtml(aiAssistantText('aiAssistantNewChat'))}</span>
          </button>
        </div>
        <div class="ai-assistant-session-list" id="aiAssistantSessionList"></div>
      </div>
      <div class="ai-assistant-messages" id="aiAssistantMessages" aria-live="polite">
        <div class="ai-message ai-message-bot">${aiAssistantEscapeHtml(aiAssistantText('aiAssistantGreeting'))}</div>
      </div>
      <div class="ai-assistant-quick">
        <button type="button">${aiAssistantEscapeHtml(aiAssistantText('aiAssistantQuickBudget'))}</button>
        <button type="button">${aiAssistantEscapeHtml(aiAssistantText('aiAssistantQuickDistrict'))}</button>
        <button type="button">${aiAssistantEscapeHtml(aiAssistantText('aiAssistantQuickViewing'))}</button>
      </div>
      <form class="ai-assistant-form" id="aiAssistantForm">
        <input id="aiAssistantInput" type="text" autocomplete="off" placeholder="${aiAssistantEscapeHtml(aiAssistantText('aiAssistantPlaceholder'))}" aria-label="${aiAssistantEscapeHtml(aiAssistantText('aiAssistantPlaceholder'))}">
        <button type="submit" aria-label="${aiAssistantEscapeHtml(aiAssistantText('aiAssistantSend'))}">
          <i class="fa-solid fa-paper-plane" aria-hidden="true"></i>
        </button>
      </form>
    </div>
    <button class="ai-assistant-toggle" id="aiAssistantToggle" type="button" aria-controls="aiAssistantWindow" aria-expanded="false">
      <i class="fa-solid fa-message" aria-hidden="true"></i>
      <span>${aiAssistantEscapeHtml(aiAssistantText('aiAssistant'))}</span>
    </button>
  `;

  document.body.appendChild(widget);

  const toggle = document.getElementById('aiAssistantToggle');
  const windowElement = document.getElementById('aiAssistantWindow');
  const closeButton = document.getElementById('aiAssistantClose');
  const form = document.getElementById('aiAssistantForm');
  const input = document.getElementById('aiAssistantInput');
  const messages = document.getElementById('aiAssistantMessages');
  const submitButton = form.querySelector('button[type="submit"]');
  const quickButtons = widget.querySelectorAll('.ai-assistant-quick button');
  const historyButton = document.getElementById('aiAssistantHistory');
  const newChatButton = document.getElementById('aiAssistantNewChat');
  const sessionsPanel = document.getElementById('aiAssistantSessions');
  const sessionsList = document.getElementById('aiAssistantSessionList');
  const sessionsNewButton = document.getElementById('aiAssistantSessionsNew');
  const sessionState = loadAssistantSessionState();
  let conversationHistory = [];
  let isLoading = false;
  let lastSubmittedMessage = '';
  let lastSubmittedAt = 0;

  const syncAssistantViewport = () => {
    if (!widget.classList.contains('is-open') || window.innerWidth > 850) {
      widget.style.removeProperty('--ai-assistant-viewport-height');
      widget.style.removeProperty('--ai-assistant-viewport-top');
      return;
    }

    const viewport = window.visualViewport;
    const height = viewport?.height || window.innerHeight;
    const offsetTop = viewport?.offsetTop || 0;

    widget.style.setProperty('--ai-assistant-viewport-height', `${Math.round(height)}px`);
    widget.style.setProperty('--ai-assistant-viewport-top', `${Math.round(offsetTop)}px`);
  };

  const setOpen = isOpen => {
    widget.classList.toggle('is-open', isOpen);
    document.body.classList.toggle('ai-assistant-open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    windowElement.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    syncAssistantViewport();

    if (isOpen) {
      setTimeout(() => {
        input.focus();
        syncAssistantViewport();
      }, 120);
    }
  };

  window.visualViewport?.addEventListener('resize', syncAssistantViewport);
  window.visualViewport?.addEventListener('scroll', syncAssistantViewport);
  window.addEventListener('resize', syncAssistantViewport);

  const appendMessage = (text, type) => {
    const message = document.createElement('div');
    message.className = `ai-message ai-message-${type}`;
    message.innerHTML = renderAssistantMessageHtml(text);
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
    return message;
  };

  const scrollToMessageStart = message => {
    messages.scrollTop = Math.max(0, message.offsetTop - messages.offsetTop - 12);
  };

  const renderMessageInto = (element, text) => {
    element.innerHTML = renderAssistantMessageHtml(text);
  };

  const appendPropertyPreviews = (properties, container = messages) => {
    if (!properties.length) return;

    const list = document.createElement('div');
    list.className = 'ai-property-previews';
    list.innerHTML = properties.map(property => `
      <a class="ai-property-preview" href="${aiAssistantEscapeHtml(property.url)}">
        <img src="${aiAssistantEscapeHtml(property.image)}" alt="${aiAssistantEscapeHtml(property.title)}" loading="lazy">
        <span>
          <strong>${aiAssistantEscapeHtml(property.title)}</strong>
          <small>${aiAssistantEscapeHtml([
            property.objectNumber ? `№ ${property.objectNumber}` : '',
            property.location,
            property.price
          ].filter(Boolean).join(' · '))}</small>
        </span>
      </a>
    `).join('');

    container.appendChild(list);
  };

  const renderAssistantResponse = (answer, properties, firstMessage) => {
    const paragraphs = answer.split(/\n{2,}/).map(paragraph => paragraph.trim()).filter(Boolean);
    const renderedPropertyIds = new Set();

    if (!paragraphs.length) {
      renderMessageInto(firstMessage, answer);
      return;
    }

    firstMessage.innerHTML = '';

    paragraphs.forEach((paragraph, index) => {
      if (index > 0) {
        firstMessage.appendChild(document.createElement('br'));
        firstMessage.appendChild(document.createElement('br'));
      }

      const paragraphElement = document.createElement('span');
      paragraphElement.innerHTML = renderAssistantMessageHtml(paragraph);
      firstMessage.appendChild(paragraphElement);

      const paragraphProperties = properties.filter(property => {
        const key = property.id || property.url || property.objectNumber;
        if (renderedPropertyIds.has(key)) return false;
        if (!isPropertyMentionedInAnswer(property, paragraph)) return false;
        renderedPropertyIds.add(key);
        return true;
      });

      appendPropertyPreviews(paragraphProperties, firstMessage);
    });

    scrollToMessageStart(firstMessage);
  };

  const getSessionTitle = session => {
    if (session.title) return session.title;
    const firstUserMessage = session.messages.find(message => message.role === 'user');
    return firstUserMessage?.content?.slice(0, 48) || aiAssistantText('aiAssistantNewChat');
  };

  const getActiveSession = () => {
    let session = sessionState.sessions.find(item => item.id === sessionState.activeSessionId);
    if (session) return session;

    session = createAssistantSession();
    sessionState.sessions.unshift(session);
    sessionState.activeSessionId = session.id;
    saveAssistantSessionState(sessionState);
    return session;
  };

  const persistSessionMessage = (role, content, properties = []) => {
    const session = getActiveSession();
    session.messages.push({
      role,
      content: String(content || '').slice(0, 6000),
      properties: Array.isArray(properties) ? properties.slice(0, 3) : []
    });
    session.messages = session.messages.slice(-AI_ASSISTANT_MAX_MESSAGES);
    session.updatedAt = new Date().toISOString();

    if (!session.title && role === 'user') {
      session.title = content.length > 48 ? `${content.slice(0, 48)}...` : content;
    }

    saveAssistantSessionState(sessionState);
  };

  const renderStoredConversation = session => {
    messages.innerHTML = '';
    conversationHistory = session.messages.map(message => ({
      role: message.role,
      content: message.content
    }));

    if (!session.messages.length) {
      appendMessage(aiAssistantText('aiAssistantGreeting'), 'bot');
      return;
    }

    session.messages.forEach(message => {
      if (message.role === 'assistant') {
        const bubble = appendMessage('', 'bot');
        renderAssistantResponse(message.content, Array.isArray(message.properties) ? message.properties : [], bubble);
      } else {
        appendMessage(message.content, 'user');
      }
    });

    messages.scrollTop = messages.scrollHeight;
  };

  const renderSessionList = () => {
    const savedSessions = sessionState.sessions.filter(session => session.messages.length);

    if (!savedSessions.length) {
      sessionsList.innerHTML = `<p class="ai-assistant-no-sessions">${aiAssistantEscapeHtml(aiAssistantText('aiAssistantNoHistory'))}</p>`;
      return;
    }

    sessionsList.innerHTML = savedSessions.map(session => {
      const date = new Date(session.updatedAt);
      const dateText = Number.isNaN(date.getTime()) ? '' : date.toLocaleString(aiAssistantLanguage(), {
        day: '2-digit',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit'
      });

      return `
        <div class="ai-assistant-session-item ${session.id === sessionState.activeSessionId ? 'is-active' : ''}">
          <button class="ai-assistant-session-open" type="button" data-session-open="${aiAssistantEscapeHtml(session.id)}">
            <strong>${aiAssistantEscapeHtml(getSessionTitle(session))}</strong>
            <small>${aiAssistantEscapeHtml(dateText)}</small>
          </button>
          <button class="ai-assistant-session-delete" type="button" data-session-delete="${aiAssistantEscapeHtml(session.id)}" aria-label="${aiAssistantEscapeHtml(aiAssistantText('aiAssistantDeleteChat'))}" title="${aiAssistantEscapeHtml(aiAssistantText('aiAssistantDeleteChat'))}">
            <i class="fa-solid fa-trash" aria-hidden="true"></i>
          </button>
        </div>
      `;
    }).join('');
  };

  const showSessions = show => {
    sessionsPanel.hidden = !show;
    historyButton.classList.toggle('is-active', show);
    if (show) renderSessionList();
  };

  const openSession = sessionId => {
    const session = sessionState.sessions.find(item => item.id === sessionId);
    if (!session) return;

    sessionState.activeSessionId = session.id;
    saveAssistantSessionState(sessionState);
    renderStoredConversation(session);
    showSessions(false);
  };

  const startNewSession = () => {
    const current = getActiveSession();
    let session = current;

    if (current.messages.length) {
      session = createAssistantSession();
      sessionState.sessions.unshift(session);
      sessionState.activeSessionId = session.id;
      saveAssistantSessionState(sessionState);
    }

    renderStoredConversation(session);
    showSessions(false);
    input.focus();
  };

  const deleteSession = sessionId => {
    sessionState.sessions = sessionState.sessions.filter(session => session.id !== sessionId);

    if (sessionState.activeSessionId === sessionId) {
      const nextSession = sessionState.sessions[0] || createAssistantSession();
      if (!sessionState.sessions.length) sessionState.sessions.push(nextSession);
      sessionState.activeSessionId = nextSession.id;
      renderStoredConversation(nextSession);
    }

    saveAssistantSessionState(sessionState);
    renderSessionList();
  };

  const setLoading = loading => {
    isLoading = loading;
    input.disabled = loading;
    submitButton.disabled = loading;
    quickButtons.forEach(button => {
      button.disabled = loading;
    });
  };

  const sendMessage = async text => {
    const value = text.trim();
    if (!value || isLoading) return;

    const now = Date.now();
    if (value === lastSubmittedMessage && now - lastSubmittedAt < 1200) return;
    lastSubmittedMessage = value;
    lastSubmittedAt = now;

    const requestHistory = conversationHistory.slice(-10);
    appendMessage(value, 'user');
    input.value = '';
    setLoading(true);
    conversationHistory.push({ role: 'user', content: value });
    persistSessionMessage('user', value);

    const thinkingMessage = appendMessage(aiAssistantText('aiAssistantThinking'), 'bot');
    thinkingMessage.classList.add('ai-message-loading');

    try {
      const result = await requestAssistantAnswer(value, requestHistory);
      renderAssistantResponse(result.answer, result.properties, thinkingMessage);
      conversationHistory.push({ role: 'assistant', content: result.answer });
      persistSessionMessage('assistant', result.answer, result.properties);
    } catch (error) {
      console.error(error);
      const errorMessage = aiAssistantText('aiAssistantError');
      thinkingMessage.textContent = errorMessage;
      conversationHistory.push({ role: 'assistant', content: errorMessage });
      persistSessionMessage('assistant', errorMessage);
    } finally {
      thinkingMessage.classList.remove('ai-message-loading');
      setLoading(false);
      input.focus();
    }
  };

  toggle.addEventListener('click', () => setOpen(!widget.classList.contains('is-open')));
  closeButton.addEventListener('click', () => setOpen(false));
  historyButton.addEventListener('click', () => showSessions(sessionsPanel.hidden));
  newChatButton.addEventListener('click', startNewSession);
  sessionsNewButton.addEventListener('click', startNewSession);

  sessionsList.addEventListener('click', event => {
    const deleteButton = event.target.closest('[data-session-delete]');
    if (deleteButton) {
      deleteSession(deleteButton.dataset.sessionDelete);
      return;
    }

    const openButton = event.target.closest('[data-session-open]');
    if (openButton) openSession(openButton.dataset.sessionOpen);
  });

  form.addEventListener('submit', event => {
    event.preventDefault();
    sendMessage(input.value);
  });

  quickButtons.forEach(button => {
    button.addEventListener('click', () => {
      setOpen(true);
      sendMessage(button.textContent || '');
    });
  });

  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape' || !widget.classList.contains('is-open')) return;

    if (!sessionsPanel.hidden) {
      showSessions(false);
    } else {
      setOpen(false);
    }
  });

  renderStoredConversation(getActiveSession());
}

createAssistantUi();
