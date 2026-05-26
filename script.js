const SUPPORTED_LANGUAGES = {
  tr: { name: 'Türkçe', page: 'index.html', locale: 'tr-TR' },
  ru: { name: 'Русский', page: 'ru.html', locale: 'ru-RU' },
  en: { name: 'English', page: 'en.html', locale: 'en-US' },
  fr: { name: 'Français', page: 'fr.html', locale: 'fr-FR' },
  de: { name: 'Deutsch', page: 'de.html', locale: 'de-DE' },
  ar: { name: 'العربية', page: 'ar.html', locale: 'ar' }
};

const SUPPORTED_CURRENCIES = ['USD', 'TRY', 'EUR', 'RUB', 'GBP', 'CHF', 'CAD', 'SEK'];
const CURRENCY_API_URL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json';
const FALLBACK_RATES = {
  USD: 1,
  TRY: 32.25,
  EUR: 0.92,
  RUB: 91.5,
  GBP: 0.78,
  CHF: 0.9,
  CAD: 1.36,
  SEK: 10.5
};

const I18N = {
  tr: {
    languageName: 'Türkçe',
    callNow: 'HEMEN ARAYIN',
    buy: 'SATIN AL',
    sell: 'SAT',
    rent: 'KIRALA',
    contacts: 'ILETISIM',
    appointment: 'RANDEVU AL',
    siteLanguage: 'SITE DILI',
    currency: 'PARA BIRIMI',
    measurement: 'OLCU BIRIMI',
    heroTitle: "Antalya'da satilik ve kiralik gayrimenkuller",
    heroText: 'Bolge, butce ve yasam tarzina gore secilmis guncel portfoy.',
    filters: 'FILTRELER',
    propertyType: 'Emlak tipi',
    allTypes: 'Tumu',
    land: 'Arsa',
    apartment: 'Daire',
    price: 'Fiyat',
    area: 'Alan (m2)',
    from: 'Min',
    to: 'Max',
    resetFilters: 'Filtreleri sifirla',
    catalogEyebrow: 'Katalog',
    catalogTitle: 'Antalya gayrimenkulleri',
    sortNewest: 'Once yeni',
    sortPriceAsc: 'Ucuzdan pahaliya',
    sortPriceDesc: 'Pahalidan ucuza',
    emptyState: 'Uygun ilan bulunamadi.',
    details: 'Detaylari gor',
    appointmentTitle: 'Randevu olustur',
    firstName: 'Ad',
    lastName: 'Soyad',
    phone: 'Telefon',
    message: 'Mesaj',
    send: 'GONDER',
    description: 'Aciklama',
    features: 'Ozellikler',
    gallery: 'Galeri',
    backToCatalog: 'Kataloga don',
    notFound: 'Ilan bulunamadi',
    rooms: 'Oda',
    floor: 'Kat',
    bedrooms: 'Yatak odasi',
    bathrooms: 'Banyo',
    furnished: 'Esyali',
    parking: 'Otopark',
    yes: 'Evet',
    no: 'Hayir',
    month: '/ay'
  },
  ru: {
    languageName: 'Русский',
    callNow: 'ПОЗВОНИТЕ НАМ',
    buy: 'КУПИТЬ',
    sell: 'ПРОДАТЬ',
    rent: 'АРЕНДА',
    contacts: 'КОНТАКТЫ',
    appointment: 'Записаться',
    siteLanguage: 'ЯЗЫК САЙТА',
    currency: 'ВАЛЮТА',
    measurement: 'ЕДИНИЦЫ',
    heroTitle: 'Недвижимость в Анталии для покупки и аренды',
    heroText: 'Актуальная база объектов, подобранных по району, бюджету и стилю жизни.',
    filters: 'ФИЛЬТРЫ',
    propertyType: 'Тип недвижимости',
    allTypes: 'Все',
    land: 'Земля',
    apartment: 'Квартира',
    price: 'Стоимость',
    area: 'Площадь (м²)',
    from: 'От',
    to: 'До',
    resetFilters: 'Сбросить фильтры',
    catalogEyebrow: 'Каталог',
    catalogTitle: 'Недвижимость в Анталии',
    sortNewest: 'Сначала новые',
    sortPriceAsc: 'Дешевле',
    sortPriceDesc: 'Дороже',
    emptyState: 'Подходящих объектов не найдено.',
    details: 'Подробнее',
    appointmentTitle: 'Назначить встречу',
    firstName: 'Имя',
    lastName: 'Фамилия',
    phone: 'Телефон',
    message: 'Сообщение',
    send: 'ОТПРАВИТЬ',
    description: 'Описание',
    features: 'Характеристики',
    gallery: 'Галерея',
    backToCatalog: 'Вернуться в каталог',
    notFound: 'Объект не найден',
    rooms: 'Комнаты',
    floor: 'Этаж',
    bedrooms: 'Спальни',
    bathrooms: 'Ванные',
    furnished: 'Мебель',
    parking: 'Парковка',
    yes: 'Да',
    no: 'Нет',
    month: '/мес'
  },
  en: {
    languageName: 'English',
    callNow: 'CALL US NOW',
    buy: 'BUY',
    sell: 'SELL',
    rent: 'RENT',
    contacts: 'CONTACTS',
    appointment: 'BOOK APPOINTMENT',
    siteLanguage: 'SITE LANGUAGE',
    currency: 'CURRENCY',
    measurement: 'MEASUREMENT',
    heroTitle: 'Properties for sale and rent in Antalya',
    heroText: 'A current portfolio selected by district, budget and lifestyle.',
    filters: 'FILTERS',
    propertyType: 'Property type',
    allTypes: 'All',
    land: 'Land',
    apartment: 'Apartment',
    price: 'Price',
    area: 'Area (m2)',
    from: 'From',
    to: 'To',
    resetFilters: 'Reset filters',
    catalogEyebrow: 'Catalog',
    catalogTitle: 'Antalya properties',
    sortNewest: 'Newest first',
    sortPriceAsc: 'Price low to high',
    sortPriceDesc: 'Price high to low',
    emptyState: 'No matching properties found.',
    details: 'View details',
    appointmentTitle: 'Book an appointment',
    firstName: 'First name',
    lastName: 'Last name',
    phone: 'Phone',
    message: 'Message',
    send: 'SEND',
    description: 'Description',
    features: 'Features',
    gallery: 'Gallery',
    backToCatalog: 'Back to catalog',
    notFound: 'Property not found',
    rooms: 'Rooms',
    floor: 'Floor',
    bedrooms: 'Bedrooms',
    bathrooms: 'Bathrooms',
    furnished: 'Furnished',
    parking: 'Parking',
    yes: 'Yes',
    no: 'No',
    month: '/month'
  },
  fr: {
    languageName: 'Français',
    callNow: 'APPELEZ-NOUS',
    buy: 'ACHETER',
    sell: 'VENDRE',
    rent: 'LOUER',
    contacts: 'CONTACTS',
    appointment: 'RENDEZ-VOUS',
    siteLanguage: 'LANGUE DU SITE',
    currency: 'DEVISE',
    measurement: 'MESURE',
    heroTitle: 'Biens a vendre et a louer a Antalya',
    heroText: 'Un portefeuille actuel selectionne par quartier, budget et style de vie.',
    filters: 'FILTRES',
    propertyType: 'Type de bien',
    allTypes: 'Tous',
    land: 'Terrain',
    apartment: 'Appartement',
    price: 'Prix',
    area: 'Surface (m2)',
    from: 'Min',
    to: 'Max',
    resetFilters: 'Reinitialiser',
    catalogEyebrow: 'Catalogue',
    catalogTitle: 'Immobilier a Antalya',
    sortNewest: 'Plus recents',
    sortPriceAsc: 'Prix croissant',
    sortPriceDesc: 'Prix decroissant',
    emptyState: 'Aucun bien correspondant.',
    details: 'Voir details',
    appointmentTitle: 'Prendre rendez-vous',
    firstName: 'Prenom',
    lastName: 'Nom',
    phone: 'Telephone',
    message: 'Message',
    send: 'ENVOYER',
    description: 'Description',
    features: 'Caracteristiques',
    gallery: 'Galerie',
    backToCatalog: 'Retour au catalogue',
    notFound: 'Bien introuvable',
    rooms: 'Pieces',
    floor: 'Etage',
    bedrooms: 'Chambres',
    bathrooms: 'Salles de bain',
    furnished: 'Meuble',
    parking: 'Parking',
    yes: 'Oui',
    no: 'Non',
    month: '/mois'
  },
  de: {
    languageName: 'Deutsch',
    callNow: 'RUFEN SIE UNS AN',
    buy: 'KAUFEN',
    sell: 'VERKAUFEN',
    rent: 'MIETEN',
    contacts: 'KONTAKT',
    appointment: 'TERMIN',
    siteLanguage: 'SPRACHE',
    currency: 'WAEHRUNG',
    measurement: 'MASSEINHEIT',
    heroTitle: 'Immobilien zum Kauf und zur Miete in Antalya',
    heroText: 'Aktuelles Portfolio nach Bezirk, Budget und Lebensstil.',
    filters: 'FILTER',
    propertyType: 'Immobilientyp',
    allTypes: 'Alle',
    land: 'Grundstueck',
    apartment: 'Wohnung',
    price: 'Preis',
    area: 'Flaeche (m2)',
    from: 'Min',
    to: 'Max',
    resetFilters: 'Filter zuruecksetzen',
    catalogEyebrow: 'Katalog',
    catalogTitle: 'Immobilien in Antalya',
    sortNewest: 'Neueste zuerst',
    sortPriceAsc: 'Preis aufsteigend',
    sortPriceDesc: 'Preis absteigend',
    emptyState: 'Keine passenden Immobilien gefunden.',
    details: 'Details ansehen',
    appointmentTitle: 'Termin vereinbaren',
    firstName: 'Vorname',
    lastName: 'Nachname',
    phone: 'Telefon',
    message: 'Nachricht',
    send: 'SENDEN',
    description: 'Beschreibung',
    features: 'Merkmale',
    gallery: 'Galerie',
    backToCatalog: 'Zurueck zum Katalog',
    notFound: 'Immobilie nicht gefunden',
    rooms: 'Zimmer',
    floor: 'Etage',
    bedrooms: 'Schlafzimmer',
    bathrooms: 'Baeder',
    furnished: 'Moebliert',
    parking: 'Parkplatz',
    yes: 'Ja',
    no: 'Nein',
    month: '/Monat'
  },
  ar: {
    languageName: 'العربية',
    callNow: 'اتصل بنا',
    buy: 'شراء',
    sell: 'بيع',
    rent: 'ايجار',
    contacts: 'تواصل',
    appointment: 'موعد',
    siteLanguage: 'لغة الموقع',
    currency: 'العملة',
    measurement: 'وحدة القياس',
    heroTitle: 'عقارات للبيع والايجار في أنطاليا',
    heroText: 'محفظة محدثة حسب المنطقة والميزانية ونمط الحياة.',
    filters: 'الفلاتر',
    propertyType: 'نوع العقار',
    allTypes: 'الكل',
    land: 'أرض',
    apartment: 'شقة',
    price: 'السعر',
    area: 'المساحة (م2)',
    from: 'من',
    to: 'الى',
    resetFilters: 'مسح الفلاتر',
    catalogEyebrow: 'الكتالوج',
    catalogTitle: 'عقارات أنطاليا',
    sortNewest: 'الأحدث أولا',
    sortPriceAsc: 'الأرخص أولا',
    sortPriceDesc: 'الأغلى أولا',
    emptyState: 'لا توجد عقارات مطابقة.',
    details: 'عرض التفاصيل',
    appointmentTitle: 'حجز موعد',
    firstName: 'الاسم',
    lastName: 'اللقب',
    phone: 'الهاتف',
    message: 'الرسالة',
    send: 'ارسال',
    description: 'الوصف',
    features: 'المواصفات',
    gallery: 'المعرض',
    backToCatalog: 'العودة الى الكتالوج',
    notFound: 'العقار غير موجود',
    rooms: 'الغرف',
    floor: 'الطابق',
    bedrooms: 'غرف النوم',
    bathrooms: 'الحمامات',
    furnished: 'مفروش',
    parking: 'موقف',
    yes: 'نعم',
    no: 'لا',
    month: '/شهر'
  }
};

let properties = [];
let rates = { ...FALLBACK_RATES };
let currentLanguage = document.body.dataset.lang || document.documentElement.lang || 'tr';
let currentCurrency = localStorage.getItem('currency') || 'USD';

function t(key) {
  return I18N[currentLanguage]?.[key] || I18N.tr[key] || key;
}

function getLocalized(value) {
  if (!value || typeof value !== 'object') return value || '';
  return value[currentLanguage] || value.en || value.tr || Object.values(value)[0] || '';
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function pageForLanguage(language) {
  const page = document.body.dataset.page;
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  if (page === 'detail') {
    return `property.html?id=${encodeURIComponent(id || '')}&lang=${language}`;
  }

  return SUPPORTED_LANGUAGES[language]?.page || 'index.html';
}

function catalogPageForLanguage(language) {
  return SUPPORTED_LANGUAGES[language]?.page || 'index.html';
}

function syncLanguageFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const queryLanguage = params.get('lang');

  if (queryLanguage && SUPPORTED_LANGUAGES[queryLanguage]) {
    currentLanguage = queryLanguage;
    document.body.dataset.lang = queryLanguage;
    document.documentElement.lang = queryLanguage;
  }

  document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });

  document.title = currentLanguage === 'tr'
    ? 'Antalya Realty Group'
    : `${t('catalogTitle')} | Antalya Realty Group`;
}

function setupFavicon() {
  let favicon = document.querySelector('link[rel="icon"]');
  if (!favicon) {
    favicon = document.createElement('link');
    favicon.rel = 'icon';
    document.head.appendChild(favicon);
  }

  favicon.type = 'image/png';
  favicon.href = './assets/favicon-rounded.png';
}

function setupCatalogFilterToggle() {
  const toolbarTitle = document.querySelector('.content-toolbar h2[data-i18n="catalogTitle"]');
  const filters = document.querySelector('.filters');
  if (!toolbarTitle || !filters) return;

  let titleRow = toolbarTitle.closest('.catalog-title-row');
  if (!titleRow) {
    titleRow = document.createElement('div');
    titleRow.className = 'catalog-title-row';
    toolbarTitle.parentNode.insertBefore(titleRow, toolbarTitle);
    titleRow.appendChild(toolbarTitle);
  }

  let toggle = titleRow.querySelector('.filter-toggle');
  if (!toggle) {
    toggle = document.createElement('button');
    toggle.className = 'filter-toggle';
    toggle.type = 'button';
    toggle.setAttribute('aria-controls', 'catalogFilters');
    titleRow.appendChild(toggle);
  }

  filters.id = filters.id || 'catalogFilters';
  toggle.textContent = t('filters');
  toggle.setAttribute('aria-label', t('filters'));
  toggle.setAttribute('aria-expanded', filters.classList.contains('is-open') ? 'true' : 'false');

  const closeFilters = () => {
    filters.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', event => {
    event.stopPropagation();
    const isOpen = filters.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  document.addEventListener('click', event => {
    if (!filters.classList.contains('is-open')) return;
    if (filters.contains(event.target) || toggle.contains(event.target)) return;
    closeFilters();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 850) closeFilters();
  });
}

function openPanel() {
  document.getElementById('megaPanel')?.classList.add('active');
  document.getElementById('overlay')?.classList.add('active');
  document.getElementById('languageBtn')?.classList.add('active');
  document.getElementById('currencyBtn')?.classList.add('active');
}

function closePanel() {
  document.getElementById('megaPanel')?.classList.remove('active');
  document.getElementById('overlay')?.classList.remove('active');
  document.getElementById('languageBtn')?.classList.remove('active');
  document.getElementById('currencyBtn')?.classList.remove('active');
}

function bindPanels() {
  document.getElementById('languageBtn')?.addEventListener('click', openPanel);
  document.getElementById('currencyBtn')?.addEventListener('click', openPanel);
  document.getElementById('overlay')?.addEventListener('click', closePanel);
  document.getElementById('closeBtn')?.addEventListener('click', closePanel);
}

function renderLanguageLinks() {
  const container = document.getElementById('languageLinks');
  if (!container) return;

  container.innerHTML = Object.entries(SUPPORTED_LANGUAGES).map(([code, language]) => `
    <a href="./${pageForLanguage(code)}" class="${code === currentLanguage ? 'active-item' : ''}">${language.name}</a>
  `).join('');
}

function renderCurrencyLinks() {
  const container = document.getElementById('currencyLinks');
  if (!container) return;

  container.innerHTML = SUPPORTED_CURRENCIES.map(currency => `
    <button type="button" class="${currency === currentCurrency ? 'active-item' : ''}" data-currency="${currency}">${currency}</button>
  `).join('');

  container.querySelectorAll('[data-currency]').forEach(button => {
    button.addEventListener('click', () => {
      currentCurrency = button.dataset.currency;
      localStorage.setItem('currency', currentCurrency);
      updateCurrencyLabels();
      closePanel();
      renderCurrentPage();
    });
  });
}

function updateCurrencyLabels() {
  document.querySelectorAll('[data-currency-label]').forEach(element => {
    element.textContent = currentCurrency;
  });

  renderCurrencyLinks();
}

async function loadRates() {
  try {
    const response = await fetch(CURRENCY_API_URL);
    if (!response.ok) throw new Error(`Rates request failed: ${response.status}`);

    const data = await response.json();
    const apiRates = data.usd || {};

    rates = SUPPORTED_CURRENCIES.reduce((nextRates, currency) => {
      nextRates[currency] = currency === 'USD' ? 1 : Number(apiRates[currency.toLowerCase()]) || FALLBACK_RATES[currency] || 1;
      return nextRates;
    }, {});
  } catch (error) {
    rates = { ...FALLBACK_RATES };
  }
}

function convertFromUsd(value) {
  return value * (rates[currentCurrency] || 1);
}

function formatPrice(price) {
  if (!price) return '';

  const locale = SUPPORTED_LANGUAGES[currentLanguage]?.locale || 'en-US';
  const convertedValue = convertFromUsd(price.value);
  const formatted = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currentCurrency,
    maximumFractionDigits: convertedValue >= 1000 ? 0 : 2
  }).format(convertedValue);

  return `${formatted}${price.period === 'month' ? t('month') : ''}`;
}

function getFilteredProperties() {
  const type = document.querySelector('input[name="property-type"]:checked')?.value || 'all';
  const priceMin = Number(document.getElementById('priceMin')?.value) || 0;
  const priceMax = Number(document.getElementById('priceMax')?.value) || Infinity;
  const areaMin = Number(document.getElementById('areaMin')?.value) || 0;
  const areaMax = Number(document.getElementById('areaMax')?.value) || Infinity;
  const sort = document.getElementById('sortSelect')?.value || 'newest';

  return properties
    .filter(property => type === 'all' || property.type === type)
    .filter(property => {
      const price = convertFromUsd(property.price?.value || 0);
      return price >= priceMin && price <= priceMax;
    })
    .filter(property => {
      const area = property.area?.value || 0;
      return area >= areaMin && area <= areaMax;
    })
    .sort((a, b) => {
      if (sort === 'priceAsc') return (a.price?.value || 0) - (b.price?.value || 0);
      if (sort === 'priceDesc') return (b.price?.value || 0) - (a.price?.value || 0);
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
}

function renderPropertyCard(property) {
  const title = getLocalized(property.title);
  const location = getLocalized(property.location?.display);
  const description = getLocalized(property.description);
  const details = getLocalized(property.details) || [];
  const preview = property.media?.preview?.slice(0, 3) || property.media?.gallery?.slice(0, 3) || [];
  const detailUrl = `property.html?id=${encodeURIComponent(property.id)}&lang=${currentLanguage}`;

  return `
    <article class="property-card" data-property-id="${escapeHtml(property.id)}">
      <div class="property-media">
        <a class="property-media-link" href="./${detailUrl}" aria-label="${escapeHtml(title)}" draggable="false">
          ${preview.map((image, index) => `
            <img src="${escapeHtml(image)}" alt="${escapeHtml(title)}" loading="lazy" draggable="false" class="${index === 0 ? 'active' : ''}">
          `).join('')}
          <span class="image-count">1 / ${preview.length}</span>
        </a>
      </div>
      <div class="property-info">
        <p class="location">${escapeHtml(location)}</p>
        <h3><a href="./${detailUrl}">${escapeHtml(title)}</a></h3>
        <p class="card-description">${escapeHtml(description)}</p>
        <div class="details">
          ${details.map(item => `<span>${escapeHtml(item)}</span>`).join('')}
        </div>
        <div class="card-footer">
          <div class="price">${escapeHtml(formatPrice(property.price))}</div>
          <a class="details-link" href="./${detailUrl}">${escapeHtml(t('details'))}</a>
        </div>
      </div>
    </article>
  `;
}

function renderCatalog() {
  const grid = document.getElementById('propertyGrid');
  if (!grid) return;

  const filteredProperties = getFilteredProperties();
  grid.innerHTML = filteredProperties.map(renderPropertyCard).join('');

  const emptyState = document.getElementById('emptyState');
  if (emptyState) emptyState.hidden = filteredProperties.length > 0;

  startCardPreviews();
}

function bindFilters() {
  document.querySelectorAll('.filters input, #sortSelect').forEach(element => {
    element.addEventListener('input', renderCatalog);
    element.addEventListener('change', renderCatalog);
  });

  document.getElementById('resetFilters')?.addEventListener('click', () => {
    document.querySelector('input[name="property-type"][value="all"]').checked = true;
    ['priceMin', 'priceMax', 'areaMin', 'areaMax'].forEach(id => {
      const input = document.getElementById(id);
      if (input) input.value = '';
    });
    renderCatalog();
  });
}

function startCardPreviews() {
  document.querySelectorAll('.property-media').forEach(media => {
    const images = Array.from(media.querySelectorAll('img'));
    const counter = media.querySelector('.image-count');
    const link = media.querySelector('.property-media-link');
    if (images.length < 2) return;

    let activeIndex = 0;
    let startX = 0;
    let startY = 0;
    let isDragging = false;
    let didSwipe = false;

    const showImage = nextIndex => {
      images[activeIndex].classList.remove('active');
      activeIndex = (nextIndex + images.length) % images.length;
      images[activeIndex].classList.add('active');
      if (counter) counter.textContent = `${activeIndex + 1} / ${images.length}`;
    };

    const startSwipe = (x, y) => {
      startX = x;
      startY = y;
      isDragging = true;
      didSwipe = false;
    };

    const finishSwipe = (x, y) => {
      if (!isDragging) return;

      const deltaX = x - startX;
      const deltaY = y - startY;
      isDragging = false;

      if (Math.abs(deltaX) < 45 || Math.abs(deltaX) < Math.abs(deltaY) * 1.2) return;

      didSwipe = true;
      showImage(activeIndex + (deltaX < 0 ? 1 : -1));
    };

    media.addEventListener('mousedown', event => {
      if (event.button !== 0) return;
      startSwipe(event.clientX, event.clientY);
    });

    media.addEventListener('mouseup', event => {
      finishSwipe(event.clientX, event.clientY);
    });

    media.addEventListener('mouseleave', () => {
      isDragging = false;
    });

    media.addEventListener('touchstart', event => {
      const touch = event.changedTouches[0];
      if (!touch) return;
      startSwipe(touch.clientX, touch.clientY);
    }, { passive: true });

    media.addEventListener('touchend', event => {
      const touch = event.changedTouches[0];
      if (!touch) return;
      finishSwipe(touch.clientX, touch.clientY);
    });

    if (link) {
      link.addEventListener('click', event => {
        if (!didSwipe) return;
        event.preventDefault();
        didSwipe = false;
      });
    }

    window.setInterval(() => {
      showImage(activeIndex + 1);
    }, 3500);
  });
}

function featureRows(property) {
  const features = property.features || {};
  const rows = [
    ['rooms', features.rooms],
    ['floor', features.floor],
    ['bedrooms', features.bedrooms],
    ['bathrooms', features.bathrooms],
    ['furnished', features.furnished ? t('yes') : t('no')],
    ['parking', features.parking ? t('yes') : t('no')]
  ];

  return rows
    .filter(([, value]) => value !== null && value !== undefined && value !== '')
    .map(([key, value]) => `
      <div class="feature-row">
        <span>${escapeHtml(t(key))}</span>
        <strong>${escapeHtml(value)}</strong>
      </div>
    `).join('');
}

function renderDetail() {
  const container = document.getElementById('propertyDetail');
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const property = properties.find(item => item.id === id);

  if (!property) {
    container.innerHTML = `
      <section class="detail-shell">
        <a href="./${catalogPageForLanguage(currentLanguage)}" class="back-link">${escapeHtml(t('backToCatalog'))}</a>
        <h1>${escapeHtml(t('notFound'))}</h1>
      </section>
    `;
    return;
  }

  const title = getLocalized(property.title);
  const location = getLocalized(property.location?.display);
  const description = getLocalized(property.description);
  const images = property.media?.gallery || property.media?.preview || [];

  document.title = `${title} | Antalya Realty Group`;

  container.innerHTML = `
    <section class="detail-shell">
      <a href="./${catalogPageForLanguage(currentLanguage)}" class="back-link">${escapeHtml(t('backToCatalog'))}</a>
      <div class="detail-heading">
        <div>
          <p class="eyebrow">${escapeHtml(location)}</p>
          <h1>${escapeHtml(title)}</h1>
        </div>
        <div class="detail-price">${escapeHtml(formatPrice(property.price))}</div>
      </div>

      <div class="detail-gallery">
        ${images.map((image, index) => `
          <img src="${escapeHtml(image)}" alt="${escapeHtml(title)} ${index + 1}" loading="${index === 0 ? 'eager' : 'lazy'}">
        `).join('')}
      </div>

      <div class="detail-layout">
        <article class="detail-description">
          <h2>${escapeHtml(t('description'))}</h2>
          <p>${escapeHtml(description)}</p>
        </article>
        <aside class="detail-features">
          <h2>${escapeHtml(t('features'))}</h2>
          ${featureRows(property)}
        </aside>
      </div>
    </section>
  `;
}

function renderCurrentPage() {
  if (document.body.dataset.page === 'detail') {
    renderDetail();
  } else {
    renderCatalog();
  }
}

function bindAppointment() {
  const openAppointment = document.getElementById('openAppointment');
  const appointmentOverlay = document.getElementById('appointmentOverlay');
  const appointmentClose = document.getElementById('appointmentClose');
  const appointmentDate = document.getElementById('appointmentDate');

  if (appointmentDate) {
    appointmentDate.min = new Date().toISOString().slice(0, 10);
  }

  if (!openAppointment || !appointmentOverlay || !appointmentClose) return;

  openAppointment.addEventListener('click', () => {
    appointmentOverlay.classList.add('active');
    document.body.classList.add('modal-open');
  });

  const closeAppointment = () => {
    appointmentOverlay.classList.remove('active');
    document.body.classList.remove('modal-open');
  };

  appointmentClose.addEventListener('click', closeAppointment);
  appointmentOverlay.addEventListener('click', event => {
    if (event.target === appointmentOverlay) closeAppointment();
  });
}

async function loadProperties() {
  const response = await fetch('./data/properties.json');
  if (!response.ok) throw new Error(`Properties request failed: ${response.status}`);
  const data = await response.json();
  properties = data.properties || [];
}

async function init() {
  syncLanguageFromQuery();
  setupFavicon();
  applyTranslations();
  setupCatalogFilterToggle();
  bindPanels();
  bindAppointment();

  await Promise.all([loadProperties(), loadRates()]);

  renderLanguageLinks();
  renderCurrencyLinks();
  updateCurrencyLabels();
  bindFilters();
  renderCurrentPage();
}

init().catch(error => {
  console.error(error);
  const grid = document.getElementById('propertyGrid');
  if (grid) grid.innerHTML = `<p class="empty-state">${escapeHtml(t('emptyState'))}</p>`;
});
