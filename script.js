const SUPPORTED_LANGUAGES = {
  tr: { name: 'Turkce', page: 'index.html', locale: 'tr-TR' },
  ru: { name: 'Русский', page: 'ru.html', locale: 'ru-RU' },
  en: { name: 'English', page: 'en.html', locale: 'en-US' },
  fr: { name: 'Francais', page: 'fr.html', locale: 'fr-FR' },
  de: { name: 'Deutsch', page: 'de.html', locale: 'de-DE' },
  ar: { name: 'Arabic', page: 'ar.html', locale: 'ar' }
};

const SUPPORTED_CURRENCIES = ['USD', 'TRY', 'EUR', 'RUB', 'GBP', 'CHF', 'CAD', 'SEK'];
const CURRENCY_API_URL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json';
const APPOINTMENT_ENDPOINT = 'https://realty-ai-assistant.nikitakadilnikovof.workers.dev/';
const SITE_ORIGIN = 'https://nikitakadilnikovof.github.io/realty-group/';
const OG_LOCALES = { tr: 'tr_TR', ru: 'ru_RU', en: 'en_US', fr: 'fr_FR', de: 'de_DE', ar: 'ar_AR' };
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
    languageName: 'Turkce', callNow: 'HEMEN ARAYIN', buy: 'SATIN AL', sell: 'SAT', rent: 'KIRALA', contacts: 'ILETISIM', appointment: 'RANDEVU AL', siteLanguage: 'SITE DILI', currency: 'PARA BIRIMI', measurement: 'OLCU BIRIMI', heroTitle: "Antalya'da satilik ve kiralik gayrimenkuller", heroText: 'Bolge, butce ve yasam tarzina gore secilmis guncel portfoy.', filters: 'FILTRELER', propertyType: 'Emlak tipi', allTypes: 'Tumu', land: 'Arsa', apartment: 'Daire', price: 'Fiyat', area: 'Alan (m2)', landShare: 'Arsa payi', from: 'Min', to: 'Max', resetFilters: 'Filtreleri sifirla', catalogEyebrow: 'Katalog', catalogTitle: 'Antalya gayrimenkulleri', sortNewest: 'Once yeni', sortPriceAsc: 'Ucuzdan pahaliya', sortPriceDesc: 'Pahalidan ucuza', emptyState: 'Uygun ilan bulunamadi.', details: 'Detaylari gor', appointmentTitle: 'Randevu olustur', firstName: 'Ad', lastName: 'Soyad', phone: 'Telefon', message: 'Mesaj', send: 'GONDER', description: 'Aciklama', features: 'Ozellikler', gallery: 'Galeri', backToCatalog: 'Kataloga don', notFound: 'Ilan bulunamadi', rooms: 'Oda', floor: 'Kat', bedrooms: 'Yatak odasi', bathrooms: 'Banyo', furnished: 'Esyali', parking: 'Otopark', yes: 'Evet', no: 'Hayir', month: '/ay'
  },
  ru: {
    languageName: 'Русский', callNow: 'ПОЗВОНИТЕ НАМ', buy: 'КУПИТЬ', sell: 'ПРОДАТЬ', rent: 'АРЕНДА', contacts: 'КОНТАКТЫ', appointment: 'Записаться', siteLanguage: 'ЯЗЫК САЙТА', currency: 'ВАЛЮТА', measurement: 'ЕДИНИЦЫ', heroTitle: 'Недвижимость в Анталии для покупки и аренды', heroText: 'Актуальная база объектов, подобранных по району, бюджету и стилю жизни.', filters: 'ФИЛЬТРЫ', propertyType: 'Тип недвижимости', allTypes: 'Все', land: 'Земля', apartment: 'Квартира', price: 'Стоимость', area: 'Площадь (м²)', landShare: 'Доля земли', from: 'От', to: 'До', resetFilters: 'Сбросить фильтры', catalogEyebrow: 'Каталог', catalogTitle: 'Недвижимость в Анталии', sortNewest: 'Сначала новые', sortPriceAsc: 'Дешевле', sortPriceDesc: 'Дороже', emptyState: 'Подходящих объектов не найдено.', details: 'Подробнее', appointmentTitle: 'Назначить встречу', firstName: 'Имя', lastName: 'Фамилия', phone: 'Телефон', message: 'Сообщение', send: 'ОТПРАВИТЬ', description: 'Описание', features: 'Характеристики', gallery: 'Галерея', backToCatalog: 'Вернуться в каталог', notFound: 'Объект не найден', rooms: 'Комнаты', floor: 'Этаж', bedrooms: 'Спальни', bathrooms: 'Ванные', furnished: 'Мебель', parking: 'Парковка', yes: 'Да', no: 'Нет', month: '/мес'
  },
  en: {
    languageName: 'English', callNow: 'CALL US NOW', buy: 'BUY', sell: 'SELL', rent: 'RENT', contacts: 'CONTACTS', appointment: 'BOOK APPOINTMENT', siteLanguage: 'SITE LANGUAGE', currency: 'CURRENCY', measurement: 'MEASUREMENT', heroTitle: 'Properties for sale and rent in Antalya', heroText: 'A current portfolio selected by district, budget and lifestyle.', filters: 'FILTERS', propertyType: 'Property type', allTypes: 'All', land: 'Land', apartment: 'Apartment', price: 'Price', area: 'Area (m2)', landShare: 'Land share', from: 'From', to: 'To', resetFilters: 'Reset filters', catalogEyebrow: 'Catalog', catalogTitle: 'Antalya properties', sortNewest: 'Newest first', sortPriceAsc: 'Price low to high', sortPriceDesc: 'Price high to low', emptyState: 'No matching properties found.', details: 'View details', appointmentTitle: 'Book an appointment', firstName: 'First name', lastName: 'Last name', phone: 'Phone', message: 'Message', send: 'SEND', description: 'Description', features: 'Features', gallery: 'Gallery', backToCatalog: 'Back to catalog', notFound: 'Property not found', rooms: 'Rooms', floor: 'Floor', bedrooms: 'Bedrooms', bathrooms: 'Bathrooms', furnished: 'Furnished', parking: 'Parking', yes: 'Yes', no: 'No', month: '/month'
  },
  fr: {
    languageName: 'Francais', callNow: 'APPELEZ-NOUS', buy: 'ACHETER', sell: 'VENDRE', rent: 'LOUER', contacts: 'CONTACTS', appointment: 'RENDEZ-VOUS', siteLanguage: 'LANGUE DU SITE', currency: 'DEVISE', measurement: 'MESURE', heroTitle: 'Biens a vendre et a louer a Antalya', heroText: 'Un portefeuille actuel selectionne par quartier, budget et style de vie.', filters: 'FILTRES', propertyType: 'Type de bien', allTypes: 'Tous', land: 'Terrain', apartment: 'Appartement', price: 'Prix', area: 'Surface (m2)', landShare: 'Quote-part terrain', from: 'Min', to: 'Max', resetFilters: 'Reinitialiser', catalogEyebrow: 'Catalogue', catalogTitle: 'Immobilier a Antalya', sortNewest: 'Plus recents', sortPriceAsc: 'Prix croissant', sortPriceDesc: 'Prix decroissant', emptyState: 'Aucun bien correspondant.', details: 'Voir details', appointmentTitle: 'Prendre rendez-vous', firstName: 'Prenom', lastName: 'Nom', phone: 'Telephone', message: 'Message', send: 'ENVOYER', description: 'Description', features: 'Caracteristiques', gallery: 'Galerie', backToCatalog: 'Retour au catalogue', notFound: 'Bien introuvable', rooms: 'Pieces', floor: 'Etage', bedrooms: 'Chambres', bathrooms: 'Salles de bain', furnished: 'Meuble', parking: 'Parking', yes: 'Oui', no: 'Non', month: '/mois'
  },
  de: {
    languageName: 'Deutsch', callNow: 'RUFEN SIE UNS AN', buy: 'KAUFEN', sell: 'VERKAUFEN', rent: 'MIETEN', contacts: 'KONTAKT', appointment: 'TERMIN', siteLanguage: 'SPRACHE', currency: 'WAEHRUNG', measurement: 'MASSEINHEIT', heroTitle: 'Immobilien zum Kauf und zur Miete in Antalya', heroText: 'Aktuelles Portfolio nach Bezirk, Budget und Lebensstil.', filters: 'FILTER', propertyType: 'Immobilientyp', allTypes: 'Alle', land: 'Grundstueck', apartment: 'Wohnung', price: 'Preis', area: 'Flaeche (m2)', landShare: 'Grundanteil', from: 'Min', to: 'Max', resetFilters: 'Filter zuruecksetzen', catalogEyebrow: 'Katalog', catalogTitle: 'Immobilien in Antalya', sortNewest: 'Neueste zuerst', sortPriceAsc: 'Preis aufsteigend', sortPriceDesc: 'Preis absteigend', emptyState: 'Keine passenden Immobilien gefunden.', details: 'Details ansehen', appointmentTitle: 'Termin vereinbaren', firstName: 'Vorname', lastName: 'Nachname', phone: 'Telefon', message: 'Nachricht', send: 'SENDEN', description: 'Beschreibung', features: 'Merkmale', gallery: 'Galerie', backToCatalog: 'Zurueck zum Katalog', notFound: 'Immobilie nicht gefunden', rooms: 'Zimmer', floor: 'Etage', bedrooms: 'Schlafzimmer', bathrooms: 'Baeder', furnished: 'Moebliert', parking: 'Parkplatz', yes: 'Ja', no: 'Nein', month: '/Monat'
  },
  ar: {
    languageName: 'Arabic', callNow: 'CALL US NOW', buy: 'BUY', sell: 'SELL', rent: 'RENT', contacts: 'CONTACTS', appointment: 'APPOINTMENT', siteLanguage: 'SITE LANGUAGE', currency: 'CURRENCY', measurement: 'MEASUREMENT', heroTitle: 'Antalya properties', heroText: 'A current portfolio selected by district, budget and lifestyle.', filters: 'FILTERS', propertyType: 'Property type', allTypes: 'All', land: 'Land', apartment: 'Apartment', price: 'Price', area: 'Area (m2)', landShare: 'حصة الأرض', from: 'From', to: 'To', resetFilters: 'Reset filters', catalogEyebrow: 'Catalog', catalogTitle: 'Antalya properties', sortNewest: 'Newest first', sortPriceAsc: 'Price low to high', sortPriceDesc: 'Price high to low', emptyState: 'No matching properties found.', details: 'View details', appointmentTitle: 'Book an appointment', firstName: 'First name', lastName: 'Last name', phone: 'Phone', message: 'Message', send: 'SEND', description: 'Description', features: 'Features', gallery: 'Gallery', backToCatalog: 'Back to catalog', notFound: 'Property not found', rooms: 'Rooms', floor: 'Floor', bedrooms: 'Bedrooms', bathrooms: 'Bathrooms', furnished: 'Furnished', parking: 'Parking', yes: 'Yes', no: 'No', month: '/month'
  }
};
const EXTRA_TRANSLATIONS = {
  districtSearch: {
    tr: 'Bolge ara',
    ru: 'Поиск по району',
    en: 'Search by district',
    fr: 'Recherche par quartier',
    de: 'Bezirk suchen',
    ar: 'ШЁШ­Ш« Ш­ШіШЁ Ш§Щ„Щ…Щ†Ш·Щ‚Ш©'
  },
  districtSearchPlaceholder: {
    tr: 'Konyaalti, Hurma, Lara',
    ru: 'Коньяалты, Хурма, Лара',
    en: 'Konyaalti, Hurma, Lara',
    fr: 'Konyaalti, Hurma, Lara',
    de: 'Konyaalti, Hurma, Lara',
    ar: 'Konyaalti, Hurma, Lara'
  },
  dealType: {
    tr: 'Islem tipi',
    ru: 'Тип сделки',
    en: 'Deal type',
    fr: 'Type d offre',
    de: 'Angebotstyp',
    ar: 'Deal type'
  },
  buyFilter: {
    tr: 'Satin al',
    ru: 'Купить',
    en: 'Buy',
    fr: 'Acheter',
    de: 'Kaufen',
    ar: 'Buy'
  },
  rentFilter: {
    tr: 'Kirala',
    ru: 'Арендовать',
    en: 'Rent',
    fr: 'Louer',
    de: 'Mieten',
    ar: 'Rent'
  },
  sellMenu: {
    tr: 'Sat',
    ru: 'Продать',
    en: 'Sell',
    fr: 'Vendre',
    de: 'Verkaufen',
    ar: 'Sell'
  },
  rentMenu: {
    tr: 'Kirala',
    ru: 'Аренда',
    en: 'Rent',
    fr: 'Louer',
    de: 'Mieten',
    ar: 'Rent'
  },
  aboutNav: {
    tr: 'Hakkimizda',
    ru: 'О нас',
    en: 'About us',
    fr: 'A propos',
    de: 'Uber uns',
    ar: 'About us'
  },
  savedProjects: {
    tr: 'Kaydedilenler',
    ru: 'Сохранённые',
    en: 'Saved',
    fr: 'Favoris',
    de: 'Gespeichert',
    ar: 'Ш§Щ„Щ…Ш­ЩЃЩ€ШёШ§ШЄ'
  },
  saveProperty: {
    tr: 'Kaydet',
    ru: 'Сохранить',
    en: 'Save',
    fr: 'Enregistrer',
    de: 'Speichern',
    ar: 'Ш­ЩЃШё'
  },
  savedProperty: {
    tr: 'Kaydedildi',
    ru: 'Сохранено',
    en: 'Saved',
    fr: 'Enregistre',
    de: 'Gespeichert',
    ar: 'Щ…Ш­ЩЃЩ€Шё'
  },
  shareProperty: {
    tr: 'Ilan paylas',
    ru: 'Поделиться объектом',
    en: 'Share property',
    fr: 'Partager le bien',
    de: 'Immobilie teilen',
    ar: 'Share property'
  },
  linkCopied: {
    tr: 'Baglanti kopyalandi',
    ru: 'Ссылка скопирована',
    en: 'Link copied',
    fr: 'Lien copie',
    de: 'Link kopiert',
    ar: 'Link copied'
  },
  removeSaved: {
    tr: 'Kaldir',
    ru: 'Удалить',
    en: 'Remove',
    fr: 'Retirer',
    de: 'Entfernen',
    ar: 'ШҐШІШ§Щ„Ш©'
  },
  noSavedProjects: {
    tr: 'Henuz kaydedilen ilan yok.',
    ru: 'Пока нет сохранённых объектов.',
    en: 'No saved properties yet.',
    fr: 'Aucun bien enregistre.',
    de: 'Noch keine Immobilien gespeichert.',
    ar: 'Щ„Ш§ ШЄЩ€Ш¬ШЇ Ш№Щ‚Ш§Ш±Ш§ШЄ Щ…Ш­ЩЃЩ€ШёШ© ШЁШ№ШЇ.'
  },
  objectNumber: {
    tr: 'Ilan numarasi ',
    ru: 'Номер объекта ',
    en: 'Property number ',
    fr: 'Numero du bien ',
    de: 'Objektnummer ',
    ar: 'Property number '
  },
  locationMap: {
    tr: 'Konum',
    ru: 'Геолокация',
    en: 'Location',
    fr: 'Geolocalisation',
    de: 'Standort',
    ar: 'Location'
  },
  appointmentMessageOptional: {
    tr: 'Gorusme icin notunuz (istege bagli)',
    ru: 'Комментарий к встрече (по желанию)',
    en: 'A note for the meeting (optional)',
    fr: 'Note pour le rendez-vous (facultatif)',
    de: 'Notiz zum Termin (optional)',
    ar: 'A note for the meeting (optional)'
  }
};

const ABOUT_CONTENT = {
  tr: {
    heroTitle: "Antalya'da gayrimenkul secimini sakin, seffaf ve yerel uzmanlikla yapiyoruz",
    heroText: 'Ekibimiz alicilara, yatirimcilara ve mulk sahiplerine bolge seciminden tapu surecine, satis sonrasi hizmete ve mulk yonetimine kadar eslik eder.',
    introEyebrow: 'Sirket hakkinda',
    introTitle: 'Antalya Realty Group, sadece guzel fotograflari degil, bir mulkun gercek degerini gormek isteyenler icin calisir.',
    introText: 'Bolgeyi, likiditeyi, belgeleri, altyapiyi, kira potansiyelini ve gelecekteki satis ihtimalini birlikte degerlendiririz. Boylece karar daha sakin, daha olculebilir ve daha guvenli olur.',
    stats: [
      ['8+', "Antalya'da yerel deneyim"],
      ['340+', 'kontrol edilmis islem ve secim'],
      ['24/7', 'secim sonrasi destek']
    ],
    approachEyebrow: 'Yaklasimimiz',
    approachTitle: 'Hizli karar baskisi kurmayiz. Secenekleri gosterir, riskleri anlatir ve karsilastirmaniza yardim ederiz.',
    benefits: [
      ['fa-location-dot', 'Bolgelere hakimiz', 'Konyaalti, Lara, Muratpasa, Altintas ve diger bolgeleri reklam vaatlerine gore degil, gercek talep, ulasim, okul, plaj ve insaat kalitesine gore okuruz.'],
      ['fa-file-shield', 'Belgeleri kontrol ederiz', 'Tavsiye etmeden once tapu, teknik bilgiler, kisitlamalar, odeme kosullari ve islemin anlasilirligini inceleriz.'],
      ['fa-chart-line', 'Yatirim mantigini hesaplariz', 'Kira potansiyeli, sezonluk talep, bakim giderleri ve bolgedeki deger artis ihtimalini acikca gosteririz.']
    ],
    ctaEyebrow: 'Sonraki adim',
    ctaTitle: 'Denize yakin daire, proje icin arsa, kiralik gelirli mulk veya tasinmak icin sakin bir ev ariyorsaniz bize anlatin.',
    ctaText: 'Size kisa bir secenek listesi hazirlayalim, bolgeler arasindaki farklari anlatalim ve fiyat-kalite dengesinin nerede guclu oldugunu gosterelim.'
  },
  ru: {
    heroTitle: 'Мы помогаем выбирать недвижимость в Анталии спокойно, прозрачно и с сильной локальной экспертизой',
    heroText: 'Мы сопровождаем покупателей, инвесторов и собственников от первого подбора района до сделки, послепродажного сервиса и управления объектом.',
    introEyebrow: 'О компании',
    introTitle: 'Antalya Realty Group работает для тех, кто хочет видеть не просто красивые фотографии, а реальную ценность объекта.',
    introText: 'Мы анализируем районы, ликвидность, документы, инфраструктуру, перспективы аренды и будущую перепродажу. Для клиента это значит меньше случайных решений и больше уверенности: вы понимаете, почему объект подходит именно вам.',
    stats: [
      ['8+', 'лет локального опыта в Анталии'],
      ['340+', 'проверенных сделок и подборов'],
      ['24/7', 'поддержка клиентов после выбора']
    ],
    approachEyebrow: 'Наш подход',
    approachTitle: 'Мы не давим на быстрые решения. Мы показываем варианты, объясняем риски и помогаем сравнить.',
    benefits: [
      ['fa-location-dot', 'Знаем районы изнутри', 'Коньяалты, Лара, Муратпаша, Алтынташ, Дошемеалты и другие зоны мы оцениваем по реальному спросу, транспорту, школам, пляжам и качеству застройки.'],
      ['fa-file-shield', 'Проверяем документы', 'Перед рекомендацией объекта мы смотрим юридическую чистоту, ограничения, технические параметры, условия оплаты и понятность сделки.'],
      ['fa-chart-line', 'Считаем инвестиционный смысл', 'Помогаем понять потенциал аренды, сезонность, расходы на содержание и перспективу роста стоимости в конкретном районе.']
    ],
    ctaEyebrow: 'Следующий шаг',
    ctaTitle: 'Расскажите, что вы ищете: квартиру у моря, участок под проект, объект для аренды или спокойный дом для переезда.',
    ctaText: 'Мы соберём короткий список вариантов, объясним различия между районами и покажем, где цена действительно соответствует качеству.'
  },
  en: {
    heroTitle: 'We help you choose Antalya real estate calmly, transparently and with strong local expertise',
    heroText: 'We guide buyers, investors and owners from the first district shortlist to the deal, after-sales service and property management.',
    introEyebrow: 'About the company',
    introTitle: 'Antalya Realty Group is for clients who want to see real property value, not just attractive photos.',
    introText: 'We analyze districts, liquidity, documents, infrastructure, rental potential and future resale value. That gives clients fewer random decisions and more confidence in every step.',
    stats: [
      ['8+', 'years of local Antalya experience'],
      ['340+', 'checked deals and shortlists'],
      ['24/7', 'support after selection']
    ],
    approachEyebrow: 'Our approach',
    approachTitle: 'We do not push rushed decisions. We show options, explain risks and help you compare clearly.',
    benefits: [
      ['fa-location-dot', 'We know the districts', 'Konyaalti, Lara, Muratpasa, Altintas and other areas are assessed by real demand, transport, schools, beaches and construction quality.'],
      ['fa-file-shield', 'We check documents', 'Before recommending a property, we review legal clarity, restrictions, technical details, payment terms and deal transparency.'],
      ['fa-chart-line', 'We calculate investment sense', 'We explain rental potential, seasonality, maintenance costs and realistic value growth in each district.']
    ],
    ctaEyebrow: 'Next step',
    ctaTitle: 'Tell us what you are looking for: a seaside apartment, land for a project, rental income or a calm home for relocation.',
    ctaText: 'We will prepare a focused shortlist, explain district differences and show where price and quality truly align.'
  },
  fr: {
    heroTitle: 'Nous vous aidons a choisir un bien a Antalya avec calme, transparence et expertise locale',
    heroText: 'Nous accompagnons acheteurs, investisseurs et proprietaires du choix du quartier jusqu a la transaction, au service apres-vente et a la gestion du bien.',
    introEyebrow: 'A propos',
    introTitle: 'Antalya Realty Group s adresse aux clients qui veulent comprendre la vraie valeur d un bien, pas seulement regarder de belles photos.',
    introText: 'Nous analysons les quartiers, la liquidite, les documents, les infrastructures, le potentiel locatif et la revente future. Vous prenez ainsi une decision plus claire et plus sure.',
    stats: [
      ['8+', 'ans d experience locale a Antalya'],
      ['340+', 'transactions et selections verifiees'],
      ['24/7', 'accompagnement apres selection']
    ],
    approachEyebrow: 'Notre approche',
    approachTitle: 'Nous ne poussons pas aux decisions rapides. Nous montrons les options, expliquons les risques et aidons a comparer.',
    benefits: [
      ['fa-location-dot', 'Nous connaissons les quartiers', 'Konyaalti, Lara, Muratpasa, Altintas et les autres zones sont evaluees selon la demande reelle, les transports, les ecoles, les plages et la qualite de construction.'],
      ['fa-file-shield', 'Nous verifions les documents', 'Avant de recommander un bien, nous examinons la situation juridique, les restrictions, les details techniques, les conditions de paiement et la clarte de la transaction.'],
      ['fa-chart-line', 'Nous evaluons le potentiel', 'Nous expliquons le potentiel locatif, la saisonnalite, les charges et les perspectives de valeur dans chaque quartier.']
    ],
    ctaEyebrow: 'Prochaine etape',
    ctaTitle: 'Dites-nous ce que vous cherchez : appartement pres de la mer, terrain, bien locatif ou maison calme pour vous installer.',
    ctaText: 'Nous preparerons une selection courte, expliquerons les differences entre quartiers et montrerons ou le rapport prix-qualite est solide.'
  },
  de: {
    heroTitle: 'Wir helfen Ihnen, Immobilien in Antalya ruhig, transparent und mit lokaler Expertise auszuwahlen',
    heroText: 'Wir begleiten Kaufer, Investoren und Eigentumer von der ersten Gebietsauswahl bis zum Abschluss, After-Sales-Service und Objektmanagement.',
    introEyebrow: 'Uber das Unternehmen',
    introTitle: 'Antalya Realty Group arbeitet fur Kunden, die den echten Wert einer Immobilie sehen wollen, nicht nur schone Fotos.',
    introText: 'Wir analysieren Stadtteile, Liquiditat, Dokumente, Infrastruktur, Mietpotenzial und den spateren Wiederverkauf. So treffen Sie weniger zufallige und deutlich sichere Entscheidungen.',
    stats: [
      ['8+', 'Jahre lokale Erfahrung in Antalya'],
      ['340+', 'geprufte Abschlusse und Auswahlen'],
      ['24/7', 'Support nach der Auswahl']
    ],
    approachEyebrow: 'Unser Ansatz',
    approachTitle: 'Wir drangen nicht zu schnellen Entscheidungen. Wir zeigen Optionen, erklaren Risiken und helfen beim Vergleich.',
    benefits: [
      ['fa-location-dot', 'Wir kennen die Stadtteile', 'Konyaalti, Lara, Muratpasa, Altintas und andere Lagen bewerten wir nach echter Nachfrage, Verkehr, Schulen, Stranden und Bauqualitat.'],
      ['fa-file-shield', 'Wir prufen Dokumente', 'Vor einer Empfehlung prufen wir rechtliche Klarheit, Einschrankungen, technische Details, Zahlungsbedingungen und Transparenz.'],
      ['fa-chart-line', 'Wir berechnen den Investment-Sinn', 'Wir erklaren Mietpotenzial, Saison, laufende Kosten und realistische Wertentwicklung im jeweiligen Gebiet.']
    ],
    ctaEyebrow: 'Nachster Schritt',
    ctaTitle: 'Sagen Sie uns, was Sie suchen: Wohnung am Meer, Grundstuck, Mietobjekt oder ein ruhiges Zuhause fur den Umzug.',
    ctaText: 'Wir erstellen eine kurze Auswahl, erklaren die Unterschiede der Stadtteile und zeigen, wo Preis und Qualitat wirklich passen.'
  },
  ar: {
    heroTitle: 'نساعدك على اختيار عقارات أنطاليا بهدوء وشفافية وخبرة محلية قوية',
    heroText: 'نرافق المشترين والمستثمرين والمالكين من اختيار المنطقة إلى إتمام الصفقة وخدمة ما بعد البيع وإدارة العقار.',
    introEyebrow: 'عن الشركة',
    introTitle: 'Antalya Realty Group مخصصة لمن يريد فهم القيمة الحقيقية للعقار وليس مشاهدة الصور الجميلة فقط.',
    introText: 'نحلل المناطق والسيولة والوثائق والبنية التحتية وإمكانات الإيجار وإعادة البيع. هذا يمنح العميل قرارا أوضح وثقة أكبر.',
    stats: [
      ['8+', 'سنوات خبرة محلية في أنطاليا'],
      ['340+', 'صفقات واختيارات تم التحقق منها'],
      ['24/7', 'دعم بعد اختيار العقار']
    ],
    approachEyebrow: 'طريقتنا',
    approachTitle: 'لا نضغط لاتخاذ قرارات سريعة. نعرض الخيارات ونشرح المخاطر ونساعدك على المقارنة.',
    benefits: [
      ['fa-location-dot', 'نعرف المناطق جيدا', 'نقيّم كونيالتي ولارا ومراد باشا وألتنتاش وغيرها حسب الطلب الحقيقي والمواصلات والمدارس والشواطئ وجودة البناء.'],
      ['fa-file-shield', 'نفحص الوثائق', 'قبل التوصية بأي عقار نراجع الوضوح القانوني والقيود والتفاصيل الفنية وشروط الدفع.'],
      ['fa-chart-line', 'نحسب الجدوى الاستثمارية', 'نوضح إمكانات الإيجار والموسمية وتكاليف الصيانة وفرص نمو القيمة في كل منطقة.']
    ],
    ctaEyebrow: 'الخطوة التالية',
    ctaTitle: 'أخبرنا بما تبحث عنه: شقة قرب البحر، أرض لمشروع، عقار للإيجار أو منزل هادئ للانتقال.',
    ctaText: 'سنجهز لك قائمة مختصرة ونشرح الفروق بين المناطق ونوضح أين تتوازن الجودة مع السعر.'
  }
};

let properties = [];
let filterDefinitions = [];
let filterLabels = {};
let filterValueLabels = {};
let filterOrder = [];
let rates = { ...FALLBACK_RATES };
let currentLanguage = document.body.dataset.lang || document.documentElement.lang || 'tr';
let currentCurrency = localStorage.getItem('currency') || 'USD';
let savedPropertyIds = new Set();
let lightboxImages = [];
let lightboxIndex = 0;
let lightboxAnimating = false;
let detailGalleryImages = [];
let detailGalleryTitle = '';
let detailGalleryVisibleLimit = 0;
let detailGalleryResizeTimer = 0;
let savedReturnToMobileMenu = false;
const LOCAL_SAVED_KEY = 'arg-local-saved-properties';
const DETAIL_GALLERY_DESKTOP_LIMIT = 8;
const DETAIL_GALLERY_COMPACT_LIMIT = 5;
const DETAIL_GALLERY_MOBILE_LIMIT = 3;
const PROPERTY_IMAGE_ROOT = './image';
const ABOUT_SOCIAL_LINKS = [
  { name: 'Instagram', icon: 'fa-instagram', url: '#', className: 'instagram' },
  { name: 'Telegram', icon: 'fa-telegram', url: '#', className: 'telegram' },
  { name: 'WhatsApp', icon: 'fa-whatsapp', url: '#', className: 'whatsapp' }
];
const PROPERTY_IMAGE_EXTENSION = 'jpg';
const CATALOG_FILTERS_STORAGE_KEY = 'arg-catalog-filters';
const FILTER_VALUE_ALIASES = {
  _propertyType: {
    ev: 'house'
  }
};

function t(key) {
  return I18N[currentLanguage]?.[key] || EXTRA_TRANSLATIONS[key]?.[currentLanguage] || EXTRA_TRANSLATIONS[key]?.tr || I18N.tr[key] || key;
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

function formatObjectNumber(property) {
  const explicitNumber = property?.number || property?.objectNumber || property?.referenceNumber;
  const explicitDigits = String(explicitNumber || '').replace(/\D/g, '');
  if (explicitDigits) return explicitDigits;

  const propertyIndex = properties.findIndex(item => item.id === property?.id);
  if (propertyIndex >= 0) return String(1001 + propertyIndex);

  const fallbackDigits = String(property?.id || '').replace(/\D/g, '');
  return fallbackDigits || '1000';
}

function propertyMediaImages(property) {
  const media = property?.media || {};
  const folder = String(media.folder || media.imageFolder || formatObjectNumber(property)).replace(/[^\d]/g, '');
  const count = Number(media.count || media.imageCount || media.total);

  if (folder && Number.isInteger(count) && count > 0) {
    return Array.from(
      { length: count },
      (_, index) => `${PROPERTY_IMAGE_ROOT}/${folder}/${index + 1}.${PROPERTY_IMAGE_EXTENSION}`
    );
  }

  const gallery = Array.isArray(media.gallery) ? media.gallery : [];
  const preview = Array.isArray(media.preview) ? media.preview : [];
  return gallery.length ? gallery : preview;
}

function propertyPreviewImages(property) {
  const media = property?.media || {};
  if (media.folder || media.imageFolder || media.count || media.imageCount || media.total) {
    return propertyMediaImages(property).slice(0, 3);
  }

  const preview = Array.isArray(media.preview) ? media.preview : [];
  if (preview.length) return preview.slice(0, 3);
  return propertyMediaImages(property).slice(0, 3);
}

function normalizeSearchTerm(value) {
  return String(value ?? '')
    .toLocaleLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function localizedSearchValues(value) {
  if (!value || typeof value !== 'object') return [value];
  return Object.values(value);
}

function isFilterKey(key) {
  return key.startsWith('_') && key.length > 1;
}

function humanizeFilterKey(key) {
  return key
    .replace(/^_+/, '')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, letter => letter.toLocaleUpperCase());
}

function filterLookupKeys(value) {
  const raw = String(value ?? '').trim();
  const lower = raw.toLocaleLowerCase();
  const compact = lower.replace(/[-_\s]+/g, '');
  return [...new Set([raw, lower, compact])];
}

function getFilterLabel(key) {
  const labelKey = filterLookupKeys(key).find(item => filterLabels[item]);
  return getLocalized(filterLabels[labelKey]) || humanizeFilterKey(key);
}

function getFilterValueLabel(value) {
  if (value && typeof value === 'object') return getLocalized(value);
  const normalizedValue = filterValueToken(value);
  const labelKey = filterLookupKeys(normalizedValue).find(item => filterValueLabels[item]);
  if (labelKey) return getLocalized(filterValueLabels[labelKey]);
  if (typeof value === 'boolean') return value ? t('yes') : t('no');
  return humanizeFilterKey(normalizedValue);
}

function getFilterValues(property, key) {
  const value = property[key];
  const values = Array.isArray(value) ? value : [value];
  return values.filter(item => item !== null && item !== undefined && item !== '');
}

function filterValueToken(value, key = '') {
  if (typeof value === 'string') return value.trim().toLocaleLowerCase();
  if (value && typeof value === 'object') return filterValueToken(getLocalized(value), key);
  return String(value);
}

function canonicalFilterValueToken(value, key) {
  const token = filterValueToken(value, key);
  return FILTER_VALUE_ALIASES[key]?.[token] || token;
}

function filterInputId(key, suffix = '') {
  return `filter-${key.replace(/[^a-zA-Z0-9_-]/g, '-')}${suffix}`;
}

function collectFilterDefinitions() {
  const filters = new Map();

  properties.forEach(property => {
    Object.keys(property).filter(isFilterKey).forEach(key => {
      if (!filters.has(key)) {
        filters.set(key, {
          key,
          values: new Map()
        });
      }

      const filter = filters.get(key);
      getFilterValues(property, key).forEach(value => {
        filter.values.set(canonicalFilterValueToken(value, key), value);
      });
    });
  });

  const orderedKeys = [
    ...filterOrder.filter(key => filters.has(key)),
    ...[...filters.keys()].filter(key => !filterOrder.includes(key)).sort((a, b) => getFilterLabel(a).localeCompare(getFilterLabel(b)))
  ];

  filterDefinitions = orderedKeys.map(key => {
    const filter = filters.get(key);
    const values = [...filter.values.values()];
    const isRange = values.length > 0 && values.every(value => typeof value === 'number' && Number.isFinite(value));

    return {
      key,
      label: getFilterLabel(key),
      type: isRange ? 'range' : 'options',
      values: values.sort((a, b) => {
        if (typeof a === 'number' && typeof b === 'number') return a - b;
        return getFilterValueLabel(a).localeCompare(getFilterValueLabel(b));
      }),
      min: isRange ? Math.min(...values) : null,
      max: isRange ? Math.max(...values) : null
    };
  });
}

function rangeDisplayValue(key, value) {
  if (key === '_price') return Math.round(convertFromUsd(value));
  return value;
}

function propertyRangeValue(property, key) {
  const value = Number(property[key]);
  if (!Number.isFinite(value)) return null;
  return key === '_price' ? convertFromUsd(value) : value;
}

function renderFilterOptions(filter) {
  return filter.values.map(value => {
    const token = canonicalFilterValueToken(value, filter.key);
    const label = value === true && filter.values.length === 1 ? filter.label : getFilterValueLabel(value);

    return `
      <label class="checkbox-item">
        <input type="checkbox" data-filter-key="${escapeHtml(filter.key)}" value="${escapeHtml(token)}">
        <span>${escapeHtml(label)}</span>
      </label>
    `;
  }).join('');
}

function renderRangeFilter(filter) {
  return `
    <div class="range-inputs">
      <input type="number" id="${escapeHtml(filterInputId(filter.key, '-min'))}" data-filter-key="${escapeHtml(filter.key)}" data-filter-range="min" placeholder="${escapeHtml(t('from'))}" min="${escapeHtml(rangeDisplayValue(filter.key, filter.min))}" max="${escapeHtml(rangeDisplayValue(filter.key, filter.max))}">
      <input type="number" id="${escapeHtml(filterInputId(filter.key, '-max'))}" data-filter-key="${escapeHtml(filter.key)}" data-filter-range="max" placeholder="${escapeHtml(t('to'))}" min="${escapeHtml(rangeDisplayValue(filter.key, filter.min))}" max="${escapeHtml(rangeDisplayValue(filter.key, filter.max))}">
    </div>
  `;
}

function renderFilterBlock(filter) {
  return `
    <div class="filter-block dynamic-filter-block" data-filter-block="${escapeHtml(filter.key)}">
      <h3>${escapeHtml(filter.label)}</h3>
      ${filter.type === 'range' ? renderRangeFilter(filter) : renderFilterOptions(filter)}
    </div>
  `;
}

function renderFilterBlocks() {
  const rangeGroupKeys = ['_price', '_area', '_landShare'];
  const rangeGroupFilters = rangeGroupKeys
    .map(key => filterDefinitions.find(filter => filter.key === key))
    .filter(Boolean);
  const rangeGroupSet = new Set(rangeGroupFilters.map(filter => filter.key));
  const blocks = [];
  let rangeGroupRendered = false;

  filterDefinitions.forEach(filter => {
    if (rangeGroupSet.has(filter.key)) {
      if (!rangeGroupRendered) {
        blocks.push(`
          <div class="filter-range-group">
            ${rangeGroupFilters.map(renderFilterBlock).join('')}
          </div>
        `);
        rangeGroupRendered = true;
      }
      return;
    }

    blocks.push(renderFilterBlock(filter));
  });

  return blocks.join('');
}

function renderDynamicFilters() {
  const filters = document.querySelector('.filters');
  if (!filters) return;

  const closeButton = filters.querySelector('.filter-close');
  filters.innerHTML = `
    <h2 class="filters-title">${escapeHtml(t('filters'))}</h2>
    <div class="filter-block">
      <h3>${escapeHtml(t('districtSearch'))}</h3>
      <input class="filter-search" type="search" id="locationSearch" placeholder="${escapeHtml(t('districtSearchPlaceholder'))}">
    </div>
    ${renderFilterBlocks()}
    <button class="filter-reset" id="resetFilters" type="button">${escapeHtml(t('resetFilters'))}</button>
  `;

  if (closeButton) filters.prepend(closeButton);
}

function searchTokens(value) {
  return normalizeSearchTerm(value).split(/[^\p{L}\p{N}]+/u).filter(Boolean);
}

function propertySearchText(property) {
  return normalizeSearchTerm([
    property.location?.city,
    property.location?.district,
    property.location?.subdistrict,
    getLocalized(property.location?.display),
    ...localizedSearchValues(property.location?.display),
    ...localizedSearchValues(property.title),
    ...localizedSearchValues(property.description)
  ].filter(Boolean).join(' '));
}

function propertyMatchesSearch(property, query) {
  const queryTokens = searchTokens(query);
  if (!queryTokens.length) return true;

  const propertyTokens = searchTokens(propertySearchText(property));
  return queryTokens.every(queryToken => propertyTokens.some(propertyToken => propertyToken.startsWith(queryToken)));
}

function pageForLanguage(language) {
  const page = document.body.dataset.page;
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  if (page === 'detail') {
    return `property.html?id=${encodeURIComponent(id || '')}&lang=${language}`;
  }

  if (page === 'about') {
    return `about.html?lang=${language}`;
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

  document.querySelectorAll('input[type="tel"][data-i18n-placeholder="phone"]').forEach(element => {
    element.placeholder = '+905XXXXXXXXX';
  });

  document.querySelectorAll('.appointment-form textarea[data-i18n-placeholder="message"]').forEach(element => {
    element.placeholder = t('appointmentMessageOptional');
  });

  document.title = currentLanguage === 'tr'
    ? 'Antalya Realty Group'
    : `${t('catalogTitle')} | Antalya Realty Group`;

  document.querySelectorAll('[data-i18n="aboutNav"]').forEach(link => {
    link.setAttribute('href', `./about.html?lang=${currentLanguage}`);
  });
}

function setMetaContent(selector, content, attribute = 'content') {
  const element = document.head.querySelector(selector);
  if (element && content) element.setAttribute(attribute, content);
}

function absoluteSiteUrl(path = '') {
  try {
    return new URL(path, SITE_ORIGIN).href;
  } catch {
    return SITE_ORIGIN;
  }
}

function updatePageMeta({ title, description, url, image, imageAlt, type = 'website' }) {
  const normalizedDescription = String(description || '').replace(/\s+/g, ' ').trim().slice(0, 220);
  const absoluteUrl = absoluteSiteUrl(url);
  const absoluteImage = absoluteSiteUrl(image || 'assets/logo-realty-16-9.png');

  if (title) document.title = title;
  setMetaContent('meta[name="description"]', normalizedDescription);
  setMetaContent('link[rel="canonical"]', absoluteUrl, 'href');
  setMetaContent('meta[property="og:type"]', type);
  setMetaContent('meta[property="og:locale"]', OG_LOCALES[currentLanguage] || OG_LOCALES.en);
  setMetaContent('meta[property="og:title"]', title);
  setMetaContent('meta[property="og:description"]', normalizedDescription);
  setMetaContent('meta[property="og:url"]', absoluteUrl);
  setMetaContent('meta[property="og:image"]', absoluteImage);
  setMetaContent('meta[property="og:image:alt"]', imageAlt || title);
  setMetaContent('meta[name="twitter:title"]', title);
  setMetaContent('meta[name="twitter:description"]', normalizedDescription);
  setMetaContent('meta[name="twitter:image"]', absoluteImage);
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

  let closeButton = filters.querySelector('.filter-close');
  if (!closeButton) {
    closeButton = document.createElement('button');
    closeButton.className = 'filter-close';
    closeButton.type = 'button';
    closeButton.setAttribute('aria-label', 'Close');
    filters.prepend(closeButton);
  }

  let backdrop = document.getElementById('filterBackdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'filter-backdrop';
    backdrop.id = 'filterBackdrop';
    document.body.appendChild(backdrop);
  }

  filters.id = filters.id || 'catalogFilters';
  toggle.innerHTML = '<i class="fa-solid fa-sliders" aria-hidden="true"></i>';
  toggle.setAttribute('aria-label', t('filters'));
  toggle.setAttribute('aria-expanded', filters.classList.contains('is-open') ? 'true' : 'false');

  const closeFilters = () => {
    filters.classList.remove('is-open');
    backdrop.classList.remove('active');
    document.body.classList.remove('filter-open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', event => {
    event.stopPropagation();
    const isOpen = filters.classList.toggle('is-open');
    backdrop.classList.toggle('active', isOpen);
    document.body.classList.toggle('filter-open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  closeButton.addEventListener('click', closeFilters);
  backdrop.addEventListener('click', closeFilters);

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

  document.addEventListener('click', event => {
    const languageLink = event.target.closest('[data-language]');
    if (!languageLink) return;

    try {
      localStorage.setItem('preferredLanguage', languageLink.dataset.language);
    } catch (error) {
      // Navigation must continue even when browser storage is unavailable.
    }
  });
}

function catalogAnchor() {
  return `./${catalogPageForLanguage(currentLanguage)}#catalog`;
}

function mobileLanguageLinks() {
  return Object.entries(SUPPORTED_LANGUAGES).map(([code, language]) => `
    <a href="./${pageForLanguage(code)}" data-language="${code}" class="${code === currentLanguage ? 'active-item' : ''}">${escapeHtml(language.name)}</a>
  `).join('');
}

function mobileCurrencyButtons() {
  return SUPPORTED_CURRENCIES.map(currency => `
    <button type="button" class="${currency === currentCurrency ? 'active-item' : ''}" data-mobile-currency="${currency}">${escapeHtml(currency)}</button>
  `).join('');
}

function createMobileStatusFilter() {
  const sort = document.getElementById('sortSelect');
  if (!sort || document.getElementById('mobileStatusFilter')) return;

  const wrapper = document.createElement('div');
  wrapper.className = 'mobile-status-filter';
  wrapper.id = 'mobileStatusFilter';
  wrapper.innerHTML = `
    <span class="mobile-status-title">${escapeHtml(t('dealType'))}</span>
    <div class="segmented-filter">
      <label><input type="radio" name="mobile-property-status" value="sale" checked><span>${escapeHtml(t('buyFilter'))}</span></label>
      <label><input type="radio" name="mobile-property-status" value="rent"><span>${escapeHtml(t('rentFilter'))}</span></label>
    </div>
  `;
  sort.insertAdjacentElement('afterend', wrapper);
}

function syncPropertyStatus(status) {
  document.querySelectorAll('input[name="property-status"], input[name="mobile-property-status"]').forEach(input => {
    input.checked = input.value === status;
  });
}

function updateMobileMenuContent() {
  const panel = document.getElementById('mobileMenuPanel');
  if (!panel) return;

  panel.innerHTML = `
    <div class="mobile-menu-inner">
      <nav class="mobile-menu-links">
        <a href="${catalogAnchor()}" data-mobile-menu-link>${escapeHtml(t('buyFilter'))}</a>
        <a href="${catalogAnchor()}" data-mobile-menu-link>${escapeHtml(t('sellMenu'))}</a>
        <a href="${catalogAnchor()}" data-mobile-menu-link>${escapeHtml(t('rentMenu'))}</a>
        <a href="./about.html?lang=${currentLanguage}" data-mobile-menu-link>${escapeHtml(t('aboutNav'))}</a>
      </nav>
      <div class="mobile-menu-actions">
        <button class="saved-button mobile-saved-button" id="mobileOpenSaved" type="button">
          <span>${escapeHtml(t('savedProjects'))}</span>
          <strong data-saved-count>0</strong>
        </button>
        <button class="appointment-btn mobile-appointment-button" id="mobileOpenAppointment" type="button">${escapeHtml(t('appointment'))}</button>
      </div>
      <div class="mobile-menu-section">
        <h3>${escapeHtml(t('siteLanguage'))}</h3>
        <div class="mobile-menu-grid">${mobileLanguageLinks()}</div>
      </div>
      <div class="mobile-menu-section">
        <h3>${escapeHtml(t('currency'))}</h3>
        <div class="mobile-menu-grid">${mobileCurrencyButtons()}</div>
      </div>
      <a class="mobile-menu-phone" href="tel:+905556826955">
        <span>${escapeHtml(t('callNow'))}</span>
        <strong>+90 555 682 69 55</strong>
      </a>
    </div>
  `;

  panel.querySelectorAll('[data-mobile-menu-link]').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  panel.querySelector('#mobileOpenSaved')?.addEventListener('click', () => {
    savedReturnToMobileMenu = true;
    closeMobileMenu();
    openSavedPanel();
  });

  panel.querySelector('#mobileOpenAppointment')?.addEventListener('click', () => {
    closeMobileMenu();
    openAppointmentModal();
  });

  panel.querySelectorAll('[data-mobile-currency]').forEach(button => {
    button.addEventListener('click', () => {
      currentCurrency = button.dataset.mobileCurrency;
      localStorage.setItem('currency', currentCurrency);
      updateCurrencyLabels();
      updateMobileMenuContent();
      renderCurrentPage();
    });
  });

  updateSavedUi();
}

function openMobileMenu() {
  document.getElementById('mobileMenuToggle')?.classList.add('is-active');
  document.getElementById('mobileMenuToggle')?.setAttribute('aria-expanded', 'true');
  document.getElementById('mobileMenuPanel')?.classList.add('active');
  document.body.classList.add('mobile-menu-open');
}

function closeMobileMenu() {
  document.getElementById('mobileMenuToggle')?.classList.remove('is-active');
  document.getElementById('mobileMenuToggle')?.setAttribute('aria-expanded', 'false');
  document.getElementById('mobileMenuPanel')?.classList.remove('active');
  document.body.classList.remove('mobile-menu-open');
}

function createMobileMenu() {
  const nav = document.querySelector('.nav-container');
  if (!nav || document.getElementById('mobileMenuToggle')) return;

  const toggle = document.createElement('button');
  toggle.className = 'mobile-menu-toggle';
  toggle.id = 'mobileMenuToggle';
  toggle.type = 'button';
  toggle.setAttribute('aria-label', 'Menu');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.innerHTML = '<span></span><span></span><span></span>';
  nav.appendChild(toggle);

  const panel = document.createElement('div');
  panel.className = 'mobile-menu-panel';
  panel.id = 'mobileMenuPanel';
  document.body.appendChild(panel);

  updateMobileMenuContent();

  toggle.addEventListener('click', () => {
    if (toggle.classList.contains('is-active')) closeMobileMenu();
    else openMobileMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 850) closeMobileMenu();
  });
}

function renderLanguageLinks() {
  const container = document.getElementById('languageLinks');
  if (!container) return;

  container.innerHTML = Object.entries(SUPPORTED_LANGUAGES).map(([code, language]) => `
    <a href="./${pageForLanguage(code)}" data-language="${code}" class="${code === currentLanguage ? 'active-item' : ''}">${language.name}</a>
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
      updateMobileMenuContent();
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
  const locationQuery = normalizeSearchTerm(document.getElementById('locationSearch')?.value || '');
  const sort = document.getElementById('sortSelect')?.value || 'newest';

  return properties
    .filter(property => propertyMatchesSearch(property, locationQuery))
    .filter(property => {
      return filterDefinitions.every(filter => {
        if (filter.type === 'range') {
          const min = Number(document.querySelector(`[data-filter-key="${filter.key}"][data-filter-range="min"]`)?.value);
          const max = Number(document.querySelector(`[data-filter-key="${filter.key}"][data-filter-range="max"]`)?.value);
          const hasMin = Number.isFinite(min) && min > 0;
          const hasMax = Number.isFinite(max) && max > 0;
          if (!hasMin && !hasMax) return true;
          if (!Object.prototype.hasOwnProperty.call(property, filter.key)) return false;

          const value = propertyRangeValue(property, filter.key);
          if (value === null) return false;
          return (!hasMin || value >= min) && (!hasMax || value <= max);
        }

        const selectedValues = [...document.querySelectorAll(`[data-filter-key="${filter.key}"]:checked`)]
          .map(input => input.value)
          .filter(value => value !== 'all');
        if (!selectedValues.length) return true;
        if (!Object.prototype.hasOwnProperty.call(property, filter.key)) return false;

        const propertyValues = getFilterValues(property, filter.key).map(value => canonicalFilterValueToken(value, filter.key));
        return selectedValues.some(value => propertyValues.includes(value));
      });
    })
    .sort((a, b) => {
      if (sort === 'priceAsc') return (a.price?.value || 0) - (b.price?.value || 0);
      if (sort === 'priceDesc') return (b.price?.value || 0) - (a.price?.value || 0);
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
}

function isPropertySaved(propertyId) {
  return savedPropertyIds.has(propertyId);
}

function savedProperties() {
  return properties.filter(property => savedPropertyIds.has(property.id));
}

function loadLocalSavedProperties() {
  try {
    savedPropertyIds = new Set(JSON.parse(localStorage.getItem(LOCAL_SAVED_KEY) || '[]'));
  } catch (error) {
    savedPropertyIds = new Set();
  }
}

function persistLocalSavedProperties() {
  localStorage.setItem(LOCAL_SAVED_KEY, JSON.stringify([...savedPropertyIds]));
}

function updateSavedUi() {
  document.querySelectorAll('[data-saved-count]').forEach(element => {
    element.textContent = String(savedPropertyIds.size);
  });

  document.querySelectorAll('.save-property-button[data-save-property]').forEach(button => {
    const propertyId = button.dataset.saveProperty;
    const saved = isPropertySaved(propertyId);
    button.classList.toggle('is-saved', saved);
    button.setAttribute('aria-label', saved ? t('savedProperty') : t('saveProperty'));
    button.setAttribute('title', saved ? t('savedProperty') : t('saveProperty'));
    button.innerHTML = `<i class="${saved ? 'fa-solid' : 'fa-regular'} fa-bookmark" aria-hidden="true"></i>`;
  });

  renderSavedPanel();
}

function openSavedPanel() {
  const overlay = document.getElementById('savedOverlay');
  if (!overlay) return;
  overlay.classList.toggle('from-mobile-menu', savedReturnToMobileMenu);
  overlay.classList.add('active');
  document.body.classList.add('modal-open');
  renderSavedPanel();
}

function closeSavedPanel() {
  const overlay = document.getElementById('savedOverlay');
  overlay?.classList.remove('active', 'from-mobile-menu');
  savedReturnToMobileMenu = false;
  document.body.classList.remove('modal-open');
}

function backToMobileMenuFromSaved() {
  const overlay = document.getElementById('savedOverlay');
  overlay?.classList.remove('active', 'from-mobile-menu');
  savedReturnToMobileMenu = false;
  document.body.classList.remove('modal-open');
  openMobileMenu();
}

function toggleSavedProperty(propertyId) {
  if (savedPropertyIds.has(propertyId)) {
    savedPropertyIds.delete(propertyId);
  } else {
    savedPropertyIds.add(propertyId);
  }

  persistLocalSavedProperties();
  updateSavedUi();
}

function propertyDetailUrl(propertyId) {
  const detailUrl = `property.html?id=${encodeURIComponent(propertyId || '')}&lang=${currentLanguage}`;
  return new URL(detailUrl, window.location.href).href;
}

async function shareProperty(propertyId) {
  const property = properties.find(item => item.id === propertyId);
  if (!property) return;

  const shareData = {
    title: getLocalized(property.title),
    text: `${t('objectNumber')}${formatObjectNumber(property)} - ${getLocalized(property.title)}`,
    url: propertyDetailUrl(property.id)
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      return;
    } catch (error) {
      if (error?.name === 'AbortError') return;
    }
  }

  try {
    await navigator.clipboard?.writeText(shareData.url);
  } catch (error) {
    const input = document.createElement('input');
    input.value = shareData.url;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    input.remove();
  }
}

function setLightboxImageContent() {
  const image = document.getElementById('lightboxImage');
  const counter = document.getElementById('lightboxCounter');
  if (!image || !lightboxImages.length) return;

  const current = lightboxImages[lightboxIndex];
  image.src = current.src;
  image.alt = current.alt;
  if (counter) counter.textContent = `${lightboxIndex + 1} / ${lightboxImages.length}`;
}

function getLightboxPreviewImage() {
  const image = document.getElementById('lightboxImage');
  if (!image) return null;

  let preview = document.getElementById('lightboxPreviewImage');
  if (preview) return preview;

  preview = document.createElement('img');
  preview.id = 'lightboxPreviewImage';
  preview.className = 'lightbox-preview-image';
  preview.alt = '';
  preview.setAttribute('aria-hidden', 'true');
  image.insertAdjacentElement('afterend', preview);
  return preview;
}

function lightboxOffsetTransform(offset) {
  return `translate3d(calc(${offset.vw}vw + ${offset.px}px), 0, 0)`;
}

function prepareLightboxPreview(direction, primed = false) {
  const preview = getLightboxPreviewImage();
  if (!preview || !lightboxImages.length) return null;

  const nextIndex = (lightboxIndex + direction + lightboxImages.length) % lightboxImages.length;
  const next = lightboxImages[nextIndex];
  preview.src = next.src;
  preview.alt = '';
  preview.classList.toggle('is-priming', primed);
  preview.classList.add('is-active');
  preview.style.transform = lightboxOffsetTransform({ vw: direction * 100, px: 0 });
  return preview;
}

function hideLightboxPreview() {
  const preview = document.getElementById('lightboxPreviewImage');
  if (!preview) return;

  preview.classList.remove('is-active', 'is-dragging', 'is-sliding', 'is-priming');
  preview.style.transform = '';
}

function showLightboxImage() {
  const image = document.getElementById('lightboxImage');
  if (!image || !lightboxImages.length) return;

  image.classList.remove('is-dragging', 'is-sliding', 'is-priming');
  image.style.transform = '';
  hideLightboxPreview();
  setLightboxImageContent();
}

function openLightbox(index) {
  if (!lightboxImages.length) return;

  lightboxIndex = (index + lightboxImages.length) % lightboxImages.length;
  document.getElementById('galleryLightbox')?.classList.add('active');
  document.body.classList.add('modal-open');
  showLightboxImage();
}

function closeLightbox() {
  document.getElementById('galleryLightbox')?.classList.remove('active');
  document.body.classList.remove('modal-open');
  lightboxAnimating = false;
  hideLightboxPreview();
}

function cancelLightboxSwipe(direction) {
  const image = document.getElementById('lightboxImage');
  const preview = document.getElementById('lightboxPreviewImage');
  if (!image) return;

  lightboxAnimating = true;
  image.classList.remove('is-dragging');
  image.style.transform = 'translate3d(0, 0, 0)';

  if (preview?.classList.contains('is-active')) {
    preview.classList.remove('is-dragging');
    preview.style.transform = `translate3d(${direction * 100}vw, 0, 0)`;
  }

  window.setTimeout(() => {
    hideLightboxPreview();
    image.style.transform = '';
    lightboxAnimating = false;
  }, 280);
}

function finishLightboxTransition(direction) {
  const image = document.getElementById('lightboxImage');
  if (!image || !lightboxImages.length) return;

  lightboxIndex = (lightboxIndex + direction + lightboxImages.length) % lightboxImages.length;
  image.classList.add('is-priming');
  image.classList.remove('is-dragging', 'is-sliding');
  image.style.transition = 'none';
  image.style.transform = 'translate3d(0, 0, 0)';
  setLightboxImageContent();
  hideLightboxPreview();
  image.offsetHeight;
  image.style.transform = '';

  window.requestAnimationFrame(() => {
    image.classList.remove('is-priming');
    image.style.transition = '';
  });
}

function animateLightboxSlide(direction) {
  const image = document.getElementById('lightboxImage');
  if (!image || !lightboxImages.length || lightboxAnimating) return;

  const activePreview = document.getElementById('lightboxPreviewImage');
  const preview = activePreview?.classList.contains('is-active')
    ? activePreview
    : prepareLightboxPreview(direction, true);
  if (!preview) return;

  lightboxAnimating = true;
  image.classList.remove('is-dragging', 'is-priming');
  image.classList.add('is-sliding');
  preview.classList.remove('is-dragging');
  preview.classList.add('is-sliding');

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      preview.classList.remove('is-priming');
      image.style.transform = `translate3d(${-direction * 100}vw, 0, 0)`;
      preview.style.transform = 'translate3d(0, 0, 0)';

      window.setTimeout(() => {
        finishLightboxTransition(direction);
        lightboxAnimating = false;
      }, 280);
    });
  });
}

function moveLightbox(direction) {
  animateLightboxSlide(direction);
}

function bindLightbox() {
  const image = document.getElementById('lightboxImage');
  let startX = 0;
  let startY = 0;
  let currentX = 0;
  let swipeDirection = 0;
  let swiping = false;

  const startSwipe = event => {
    const touch = event.changedTouches?.[0];
    if (!touch || !image || lightboxAnimating) return;
    startX = touch.clientX;
    startY = touch.clientY;
    currentX = touch.clientX;
    swipeDirection = 0;
    swiping = true;
    image.classList.add('is-dragging');
  };

  const moveSwipe = event => {
    if (!swiping || !image || lightboxAnimating) return;

    const touch = event.changedTouches?.[0];
    if (!touch) return;

    const deltaX = touch.clientX - startX;
    const deltaY = touch.clientY - startY;
    currentX = touch.clientX;

    if (Math.abs(deltaX) < Math.abs(deltaY)) return;

    event.preventDefault();
    const nextDirection = deltaX < 0 ? 1 : -1;
    if (nextDirection !== swipeDirection) {
      swipeDirection = nextDirection;
      const nextPreview = prepareLightboxPreview(swipeDirection);
      nextPreview?.classList.add('is-dragging');
    }

    const preview = document.getElementById('lightboxPreviewImage');
    image.style.transform = `translate3d(${deltaX}px, 0, 0)`;

    if (preview?.classList.contains('is-active')) {
      preview.style.transform = lightboxOffsetTransform({ vw: swipeDirection * 100, px: deltaX });
    }
  };

  const endSwipe = () => {
    if (!swiping || !image) return;

    const deltaX = currentX - startX;
    swiping = false;
    image.classList.remove('is-dragging');

    if (Math.abs(deltaX) < 55) {
      cancelLightboxSwipe(swipeDirection || (deltaX < 0 ? 1 : -1));
      return;
    }

    animateLightboxSlide(deltaX < 0 ? 1 : -1);
  };

  document.getElementById('lightboxClose')?.addEventListener('click', closeLightbox);
  document.getElementById('lightboxPrev')?.addEventListener('click', () => moveLightbox(-1));
  document.getElementById('lightboxNext')?.addEventListener('click', () => moveLightbox(1));
  document.getElementById('galleryLightbox')?.addEventListener('click', event => {
    if (event.target === event.currentTarget) closeLightbox();
  });
  image?.addEventListener('touchstart', startSwipe, { passive: true });
  image?.addEventListener('touchmove', moveSwipe, { passive: false });
  image?.addEventListener('touchend', endSwipe);
  image?.addEventListener('touchcancel', endSwipe);
}

document.addEventListener('keydown', event => {
  const lightbox = document.getElementById('galleryLightbox');
  if (!lightbox?.classList.contains('active')) return;

  if (event.key === 'Escape') closeLightbox();
  if (event.key === 'ArrowLeft') moveLightbox(-1);
  if (event.key === 'ArrowRight') moveLightbox(1);
});

function detailGalleryLimit() {
  const width = window.innerWidth || document.documentElement.clientWidth || 1280;
  if (width <= 850) return DETAIL_GALLERY_MOBILE_LIMIT;
  if (width < 1100) return DETAIL_GALLERY_COMPACT_LIMIT;
  return DETAIL_GALLERY_DESKTOP_LIMIT;
}

function detailGalleryMarkup(images, title) {
  const limit = detailGalleryLimit();
  const visibleImages = images.slice(0, limit);
  const hiddenCount = Math.max(images.length - visibleImages.length, 0);

  return visibleImages.map((image, index) => {
    const hasMore = hiddenCount > 0 && index === visibleImages.length - 1;
    return `
      <button class="detail-gallery-item ${hasMore ? 'has-more' : ''}" type="button" data-gallery-index="${index}" aria-label="${escapeHtml(`${title} ${index + 1}`)}">
        <img src="${escapeHtml(image)}" alt="${escapeHtml(title)} ${index + 1}" loading="${index === 0 ? 'eager' : 'lazy'}">
        ${hasMore ? `<span class="detail-gallery-more">+${hiddenCount}</span>` : ''}
      </button>
    `;
  }).join('');
}

function bindDetailGalleryButtons(container) {
  container.querySelectorAll('[data-gallery-index]').forEach(button => {
    button.addEventListener('click', () => openLightbox(Number(button.dataset.galleryIndex) || 0));
  });
}

function updateDetailGallery(force = false) {
  const gallery = document.querySelector('[data-detail-gallery]');
  if (!gallery || !detailGalleryImages.length) return;

  const nextLimit = detailGalleryLimit();
  if (!force && nextLimit === detailGalleryVisibleLimit) return;

  detailGalleryVisibleLimit = nextLimit;
  gallery.innerHTML = detailGalleryMarkup(detailGalleryImages, detailGalleryTitle);
  bindDetailGalleryButtons(gallery);
}

function bindDetailGalleryResize() {
  window.addEventListener('resize', () => {
    clearTimeout(detailGalleryResizeTimer);
    detailGalleryResizeTimer = window.setTimeout(() => updateDetailGallery(), 120);
  });
}

function renderSavedPanel() {
  const list = document.getElementById('savedList');
  if (!list) return;

  const items = savedProperties();
  if (!items.length) {
    list.innerHTML = `<p class="saved-empty">${escapeHtml(t('noSavedProjects'))}</p>`;
    return;
  }

  list.innerHTML = items.map(property => {
    const title = getLocalized(property.title);
    const location = getLocalized(property.location?.display);
    const image = propertyPreviewImages(property)[0] || '';
    const detailUrl = `property.html?id=${encodeURIComponent(property.id)}&lang=${currentLanguage}`;

    return `
      <article class="saved-item">
        <img src="${escapeHtml(image)}" alt="${escapeHtml(title)}" loading="lazy">
        <div>
          <p>${escapeHtml(location)}</p>
          <h3>${escapeHtml(title)}</h3>
          <strong>${escapeHtml(formatPrice(property.price))}</strong>
          <div class="saved-actions-row">
            <a href="./${detailUrl}">${escapeHtml(t('details'))}</a>
            <button type="button" data-save-property="${escapeHtml(property.id)}">${escapeHtml(t('removeSaved'))}</button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function createSavedUi() {
  const nav = document.querySelector('.nav-container');
  if (nav && !document.getElementById('savedActions')) {
    const actions = document.createElement('div');
    actions.className = 'saved-actions';
    actions.id = 'savedActions';
    actions.innerHTML = `
      <button class="saved-button" id="openSaved" type="button">
        <span>${escapeHtml(t('savedProjects'))}</span>
        <strong data-saved-count>0</strong>
      </button>
    `;
    nav.insertBefore(actions, document.getElementById('openAppointment'));
  }

  if (!document.getElementById('savedOverlay')) {
    document.body.insertAdjacentHTML('beforeend', `
      <div class="saved-overlay" id="savedOverlay">
        <aside class="saved-panel">
          <button class="saved-back" id="savedBack" type="button" aria-label="Back"><i class="fa-solid fa-arrow-left" aria-hidden="true"></i></button>
          <button class="appointment-close" id="savedClose" type="button" aria-label="Close"></button>
          <div class="saved-heading">
            <h2>${escapeHtml(t('savedProjects'))}</h2>
            <span><strong data-saved-count>0</strong></span>
          </div>
          <div class="saved-list" id="savedList"></div>
        </aside>
      </div>
    `);
  }

  document.getElementById('openSaved')?.addEventListener('click', openSavedPanel);
  document.getElementById('savedClose')?.addEventListener('click', closeSavedPanel);
  document.getElementById('savedBack')?.addEventListener('click', backToMobileMenuFromSaved);
  document.getElementById('savedOverlay')?.addEventListener('click', event => {
    if (event.target === event.currentTarget) closeSavedPanel();
  });

  document.addEventListener('click', event => {
    const saveButton = event.target.closest('[data-save-property]');
    if (saveButton) {
      event.preventDefault();
      toggleSavedProperty(saveButton.dataset.saveProperty);
      return;
    }

    const shareButton = event.target.closest('[data-share-property]');
    if (!shareButton) return;
    event.preventDefault();
    shareProperty(shareButton.dataset.shareProperty);
  });
}

function renderPropertyCard(property) {
  const title = getLocalized(property.title);
  const location = getLocalized(property.location?.display);
  const description = getLocalized(property.description);
  const details = getLocalized(property.details) || [];
  const preview = propertyPreviewImages(property);
  const detailUrl = `property.html?id=${encodeURIComponent(property.id)}&lang=${currentLanguage}`;
  const objectNumber = formatObjectNumber(property);

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
        <div class="card-meta-row">
          <p class="location">${escapeHtml(location)}</p>
          <span class="object-number">${escapeHtml(t('objectNumber'))}${escapeHtml(objectNumber)}</span>
        </div>
        <h3><a href="./${detailUrl}">${escapeHtml(title)}</a></h3>
        <p class="card-description">${escapeHtml(description)}</p>
        <div class="details">
          ${details.map(item => `<span>${escapeHtml(item)}</span>`).join('')}
        </div>
        <div class="card-footer">
          <div class="price">${escapeHtml(formatPrice(property.price))}</div>
          <div class="card-actions">
            <a class="details-link" href="./${detailUrl}">${escapeHtml(t('details'))}</a>
            <button class="share-property-button" type="button" data-share-property="${escapeHtml(property.id)}" aria-label="${escapeHtml(t('shareProperty'))}" title="${escapeHtml(t('shareProperty'))}">
              <i class="fa-solid fa-share" aria-hidden="true"></i>
            </button>
            <button class="save-property-button ${isPropertySaved(property.id) ? 'is-saved' : ''}" type="button" data-save-property="${escapeHtml(property.id)}" aria-label="${escapeHtml(isPropertySaved(property.id) ? t('savedProperty') : t('saveProperty'))}" title="${escapeHtml(isPropertySaved(property.id) ? t('savedProperty') : t('saveProperty'))}">
              <i class="${isPropertySaved(property.id) ? 'fa-solid' : 'fa-regular'} fa-bookmark" aria-hidden="true"></i>
            </button>
          </div>
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

function collectCatalogFilterState() {
  const state = {
    locationQuery: document.getElementById('locationSearch')?.value || '',
    sort: document.getElementById('sortSelect')?.value || '',
    ranges: {},
    selected: {}
  };

  document.querySelectorAll('.filters input[data-filter-key]').forEach(input => {
    const key = input.dataset.filterKey;
    if (!key) return;

    if (input.dataset.filterRange) {
      state.ranges[key] = state.ranges[key] || {};
      state.ranges[key][input.dataset.filterRange] = input.value || '';
      return;
    }

    if ((input.type === 'checkbox' || input.type === 'radio') && input.checked) {
      state.selected[key] = state.selected[key] || [];
      state.selected[key].push(input.value);
    }
  });

  return state;
}

function persistCatalogFilterState() {
  try {
    localStorage.setItem(CATALOG_FILTERS_STORAGE_KEY, JSON.stringify(collectCatalogFilterState()));
  } catch (error) {
    // Filtering should continue even when browser storage is unavailable.
  }
}

function restoreCatalogFilterState() {
  let state = null;

  try {
    state = JSON.parse(localStorage.getItem(CATALOG_FILTERS_STORAGE_KEY) || 'null');
  } catch (error) {
    state = null;
  }

  if (!state || typeof state !== 'object') return;

  const locationSearch = document.getElementById('locationSearch');
  if (locationSearch && typeof state.locationQuery === 'string') {
    locationSearch.value = state.locationQuery;
  }

  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect && typeof state.sort === 'string' && [...sortSelect.options].some(option => option.value === state.sort)) {
    sortSelect.value = state.sort;
  }

  document.querySelectorAll('.filters input[data-filter-key]').forEach(input => {
    const key = input.dataset.filterKey;
    if (!key) return;

    if (input.dataset.filterRange) {
      const value = state.ranges?.[key]?.[input.dataset.filterRange];
      if (typeof value === 'string' || typeof value === 'number') input.value = value;
      return;
    }

    if (input.type === 'checkbox' || input.type === 'radio') {
      const selectedValues = Array.isArray(state.selected?.[key]) ? state.selected[key] : [];
      const selectedTokens = selectedValues.map(value => canonicalFilterValueToken(value, key));
      input.checked = selectedTokens.includes(input.value);
    }
  });
}

function clearCatalogFilterState() {
  try {
    localStorage.removeItem(CATALOG_FILTERS_STORAGE_KEY);
  } catch (error) {
    // Nothing else is needed when storage cannot be changed.
  }
}

function bindFilters() {
  document.querySelectorAll('.filters input, #sortSelect').forEach(element => {
    const updateFilters = () => {
      persistCatalogFilterState();
      renderCatalog();
    };

    element.addEventListener('input', updateFilters);
    element.addEventListener('change', updateFilters);
  });

  document.getElementById('resetFilters')?.addEventListener('click', () => {
    document.querySelectorAll('.filters input').forEach(input => {
      if (input.type === 'checkbox' || input.type === 'radio') {
        input.checked = false;
      } else {
        input.value = '';
      }
    });
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) sortSelect.value = 'newest';
    clearCatalogFilterState();
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
    ['landShare', features.landShare ? `${features.landShare} m2` : null],
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

function googleMapEmbedUrl(property) {
  const coordinates = property.location?.coordinates;
  const lat = Number(coordinates?.lat);
  const lng = Number(coordinates?.lng);

  if (Number.isFinite(lat) && Number.isFinite(lng)) {
    return `https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`;
  }

  const location = [
    property.location?.subdistrict,
    property.location?.district,
    property.location?.city,
    property.location?.country
  ].filter(Boolean).join(', ');

  return `https://www.google.com/maps?q=${encodeURIComponent(location)}&z=14&output=embed`;
}

function renderLocationMap(property, location) {
  return `
    <section class="detail-map">
      <div class="detail-map-heading">
        <h2>${escapeHtml(t('locationMap'))}</h2>
        <span>${escapeHtml(location)}</span>
      </div>
      <iframe
        src="${escapeHtml(googleMapEmbedUrl(property))}"
        title="${escapeHtml(`${t('locationMap')} - ${location}`)}"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        allowfullscreen>
      </iframe>
    </section>
  `;
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
  const images = propertyMediaImages(property);
  const objectNumber = formatObjectNumber(property);
  detailGalleryImages = images;
  detailGalleryTitle = title;
  detailGalleryVisibleLimit = 0;
  lightboxImages = images.map((image, index) => ({
    src: image,
    alt: `${title} ${index + 1}`
  }));

  document.title = `${title} | Antalya Realty Group`;
  const detailPath = `property.html?id=${encodeURIComponent(property.id)}&lang=${encodeURIComponent(currentLanguage)}`;
  const metaDescription = [description, location, formatPrice(property.price)].filter(Boolean).join(' — ');
  updatePageMeta({
    title: `${title} | Antalya Realty Group`,
    description: metaDescription,
    url: detailPath,
    image: images[0],
    imageAlt: title,
    type: 'article'
  });

  container.innerHTML = `
    <section class="detail-shell">
      <a href="./${catalogPageForLanguage(currentLanguage)}" class="back-link"><i class="fa-solid fa-arrow-left" aria-hidden="true"></i><span>${escapeHtml(t('backToCatalog'))}</span></a>
      <div class="detail-heading">
        <div>
          <div class="detail-meta-row">
            <p class="eyebrow">${escapeHtml(location)}</p>
            <span class="object-number detail-object-number">${escapeHtml(t('objectNumber'))}${escapeHtml(objectNumber)}</span>
          </div>
          <h1>${escapeHtml(title)}</h1>
        </div>
        <div class="detail-side-actions">
          <div class="detail-price">${escapeHtml(formatPrice(property.price))}</div>
          <button class="share-property-button" type="button" data-share-property="${escapeHtml(property.id)}" aria-label="${escapeHtml(t('shareProperty'))}" title="${escapeHtml(t('shareProperty'))}">
            <i class="fa-solid fa-share" aria-hidden="true"></i>
          </button>
          <button class="save-property-button ${isPropertySaved(property.id) ? 'is-saved' : ''}" type="button" data-save-property="${escapeHtml(property.id)}" aria-label="${escapeHtml(isPropertySaved(property.id) ? t('savedProperty') : t('saveProperty'))}" title="${escapeHtml(isPropertySaved(property.id) ? t('savedProperty') : t('saveProperty'))}">
            <i class="${isPropertySaved(property.id) ? 'fa-solid' : 'fa-regular'} fa-bookmark" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      <div class="detail-gallery" data-detail-gallery></div>

      <div class="detail-layout">
        <article class="detail-description">
          <h2>${escapeHtml(t('description'))}</h2>
          <p>${escapeHtml(description)}</p>
        </article>
        <aside class="detail-features">
          <h2>${escapeHtml(t('features'))}</h2>
          ${featureRows(property)}
          ${renderLocationMap(property, location)}
        </aside>
      </div>
    </section>
    <div class="gallery-lightbox" id="galleryLightbox">
      <button class="lightbox-close" id="lightboxClose" type="button" aria-label="Close"></button>
      <button class="lightbox-nav lightbox-prev" id="lightboxPrev" type="button" aria-label="Previous"><i class="fa-solid fa-chevron-left" aria-hidden="true"></i></button>
      <img id="lightboxImage" src="" alt="">
      <button class="lightbox-nav lightbox-next" id="lightboxNext" type="button" aria-label="Next"><i class="fa-solid fa-chevron-right" aria-hidden="true"></i></button>
      <span class="lightbox-counter" id="lightboxCounter"></span>
    </div>
  `;

  updateDetailGallery(true);
  bindLightbox();
}

function renderAbout() {
  const container = document.querySelector('.about-page');
  if (!container) return;

  const content = ABOUT_CONTENT[currentLanguage] || ABOUT_CONTENT.en;
  document.title = `${t('aboutNav')} | Antalya Realty Group`;
  updatePageMeta({
    title: `${t('aboutNav')} | Antalya Realty Group`,
    description: content.heroText,
    url: `about.html?lang=${encodeURIComponent(currentLanguage)}`,
    image: 'assets/logo-realty-16-9.png',
    imageAlt: 'Antalya Realty Group'
  });

  container.innerHTML = `
    <section class="about-hero">
      <div class="about-hero-inner">
        <p class="eyebrow">Antalya Realty Group</p>
        <h1>${escapeHtml(content.heroTitle)}</h1>
        <p>${escapeHtml(content.heroText)}</p>
      </div>
    </section>

    <section class="about-section">
      <div class="about-intro">
        <div>
          <p class="eyebrow">${escapeHtml(content.introEyebrow)}</p>
          <h2>${escapeHtml(content.introTitle)}</h2>
        </div>
        <p>${escapeHtml(content.introText)}</p>
      </div>

      <div class="about-stats">
        ${content.stats.map(([value, label]) => `
          <div><strong>${escapeHtml(value)}</strong><span>${escapeHtml(label)}</span></div>
        `).join('')}
      </div>
    </section>

    <section class="about-section about-band">
      <div>
        <p class="eyebrow">${escapeHtml(content.approachEyebrow)}</p>
        <h2>${escapeHtml(content.approachTitle)}</h2>
      </div>
      <div class="about-benefits">
        ${content.benefits.map(([icon, title, text]) => `
          <article>
            <i class="fa-solid ${escapeHtml(icon)}"></i>
            <h3>${escapeHtml(title)}</h3>
            <p>${escapeHtml(text)}</p>
          </article>
        `).join('')}
      </div>
    </section>

    <section class="about-section about-cta">
      <div>
        <p class="eyebrow">${escapeHtml(content.ctaEyebrow)}</p>
        <h2>${escapeHtml(content.ctaTitle)}</h2>
        <p>${escapeHtml(content.ctaText)}</p>
      </div>
      <div class="about-cta-actions">
        <button class="appointment-btn" id="aboutAppointment" type="button">${escapeHtml(t('appointment'))}</button>
        <nav class="about-social-links" aria-label="Social links">
          ${ABOUT_SOCIAL_LINKS.map(link => `
            <a class="about-social-link ${escapeHtml(link.className)}" href="${escapeHtml(link.url)}" aria-label="${escapeHtml(link.name)}">
              <i class="fa-brands ${escapeHtml(link.icon)}" aria-hidden="true"></i>
              <span>${escapeHtml(link.name)}</span>
            </a>
          `).join('')}
        </nav>
      </div>
    </section>
  `;

  document.getElementById('aboutAppointment')?.addEventListener('click', openAppointmentModal);
}

function renderCurrentPage() {
  if (document.body.dataset.page === 'about') {
    renderAbout();
  } else if (document.body.dataset.page === 'detail') {
    renderDetail();
  } else {
    renderCatalog();
  }
}

function openAppointmentModal() {
  const appointmentOverlay = document.getElementById('appointmentOverlay');
  if (!appointmentOverlay) return;
  appointmentOverlay.classList.add('active');
  document.body.classList.add('modal-open');
  appointmentOverlay.querySelector('input[type="tel"]')?.focus();
}

function normalizeTurkishPhone(value) {
  let digits = String(value || '').replace(/\D/g, '');

  if (digits.startsWith('90')) {
    digits = digits.slice(2);
  }

  if (digits.startsWith('0')) {
    digits = digits.slice(1);
  }

  return `+90${digits.slice(0, 10)}`;
}

function bindTurkishPhoneInput(input) {
  if (!input) return;

  input.setAttribute('inputmode', 'numeric');
  input.setAttribute('autocomplete', 'tel');
  input.setAttribute('maxlength', '13');
  input.placeholder = '+905XXXXXXXXX';

  const applyValue = () => {
    input.value = normalizeTurkishPhone(input.value);
  };

  if (input.dataset.phoneBound === 'true') {
    applyValue();
    return;
  }

  input.dataset.phoneBound = 'true';

  if (!input.value) {
    input.value = '+90';
  } else {
    applyValue();
  }

  input.addEventListener('focus', applyValue);
  input.addEventListener('input', applyValue);
  input.addEventListener('keydown', event => {
    const selectionStartsInPrefix = input.selectionStart !== null && input.selectionStart < 3;
    const selectionEndsInPrefix = input.selectionEnd !== null && input.selectionEnd <= 3;
    const isDeletingPrefix = (event.key === 'Backspace' && selectionEndsInPrefix) || (event.key === 'Delete' && selectionStartsInPrefix);

    if (isDeletingPrefix) {
      event.preventDefault();
      input.setSelectionRange(3, 3);
    }
  });
  input.addEventListener('blur', () => {
    if (input.value === '+90') return;
    applyValue();
  });
}

function prepareAppointmentForm(form) {
  if (!form) return;

  const requiredFields = [
    form.querySelector('input[type="date"]'),
    form.querySelector('input[data-i18n-placeholder="firstName"]'),
    form.querySelector('input[data-i18n-placeholder="lastName"]'),
    form.querySelector('input[type="tel"]')
  ];

  requiredFields.forEach(field => {
    field?.setAttribute('required', 'required');
  });

  const messageInput = form.querySelector('textarea[data-i18n-placeholder="message"]');
  messageInput?.removeAttribute('required');
  if (messageInput) {
    messageInput.placeholder = t('appointmentMessageOptional');
  }
}

async function sendAppointmentRequest(form) {
  const dateInput = form.querySelector('input[type="date"]');
  const firstNameInput = form.querySelector('input[data-i18n-placeholder="firstName"]');
  const lastNameInput = form.querySelector('input[data-i18n-placeholder="lastName"]');
  const phoneInput = form.querySelector('input[type="tel"]');
  const messageInput = form.querySelector('textarea');
  const date = String(dateInput?.value || '').trim();
  const firstName = String(firstNameInput?.value || '').trim();
  const lastName = String(lastNameInput?.value || '').trim();
  const phone = normalizeTurkishPhone(phoneInput?.value || '');
  const localPhoneDigits = phone.replace(/^\+90/, '');

  if (!date) {
    dateInput?.focus();
    throw new Error('Date is required');
  }

  if (!firstName) {
    firstNameInput?.focus();
    throw new Error('First name is required');
  }

  if (!lastName) {
    lastNameInput?.focus();
    throw new Error('Last name is required');
  }

  if (localPhoneDigits.length !== 10) {
    phoneInput?.focus();
    throw new Error('Turkish phone number is required');
  }

  const response = await fetch(APPOINTMENT_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      action: 'appointment_request',
      date,
      firstName,
      lastName,
      phone,
      message: messageInput?.value || '',
      language: currentLanguage,
      page: document.body.dataset.page || '',
      url: window.location.href,
      propertyId: new URLSearchParams(window.location.search).get('id') || ''
    })
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.details || data.error || `Appointment request failed: ${response.status}`);
  }

  return data;
}

function bindAppointment() {
  const openAppointment = document.getElementById('openAppointment');
  const aboutAppointment = document.getElementById('aboutAppointment');
  const appointmentOverlay = document.getElementById('appointmentOverlay');
  const appointmentClose = document.getElementById('appointmentClose');
  const appointmentDate = document.getElementById('appointmentDate');
  const appointmentForm = appointmentOverlay?.querySelector('.appointment-form');
  const phoneInput = appointmentForm?.querySelector('input[type="tel"]');

  if (appointmentDate) {
    appointmentDate.min = new Date().toISOString().slice(0, 10);
  }

  prepareAppointmentForm(appointmentForm);
  bindTurkishPhoneInput(phoneInput);

  if (!appointmentOverlay || !appointmentClose) return;

  openAppointment?.addEventListener('click', openAppointmentModal);
  aboutAppointment?.addEventListener('click', openAppointmentModal);

  const closeAppointment = () => {
    appointmentOverlay.classList.remove('active');
    document.body.classList.remove('modal-open');
  };

  appointmentClose.addEventListener('click', closeAppointment);
  appointmentOverlay.addEventListener('click', event => {
    if (event.target === appointmentOverlay) closeAppointment();
  });

  appointmentForm?.addEventListener('submit', async event => {
    event.preventDefault();

    const submitButton = appointmentForm.querySelector('button[type="submit"]');
    const defaultButtonText = submitButton?.textContent || t('send');

    try {
      if (!appointmentForm.reportValidity()) return;

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = '...';
      }

      await sendAppointmentRequest(appointmentForm);
      appointmentForm.reset();
      bindTurkishPhoneInput(phoneInput);
      closeAppointment();
      alert(currentLanguage === 'ru' ? 'Заявка отправлена.' : 'Request sent.');
    } catch (error) {
      console.error('[Appointment] request failed', error);
      alert(currentLanguage === 'ru' ? 'Не удалось отправить заявку. Проверьте телефон и попробуйте еще раз.' : 'Could not send the request. Please check the phone and try again.');
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = defaultButtonText;
      }
    }
  });
}

async function loadProperties() {
  const response = await fetch('./data/properties.json', { cache: 'no-store' });
  if (!response.ok) throw new Error(`Properties request failed: ${response.status}`);
  const data = await response.json();
  properties = data.properties || [];
}

async function loadFilterSettings() {
  const response = await fetch('./data/filter-settings.json', { cache: 'no-store' });
  if (!response.ok) throw new Error(`Filter settings request failed: ${response.status}`);
  const data = await response.json();
  filterLabels = data.filterLabels || {};
  filterValueLabels = data.filterValueLabels || {};
  filterOrder = data.filterOrder || [];
}

async function init() {
  syncLanguageFromQuery();
  setupFavicon();
  applyTranslations();
  createSavedUi();
  createMobileMenu();
  bindPanels();
  bindAppointment();

  await Promise.all([loadProperties(), loadFilterSettings(), loadRates()]);
  collectFilterDefinitions();
  renderDynamicFilters();
  restoreCatalogFilterState();
  setupCatalogFilterToggle();
  loadLocalSavedProperties();

  renderLanguageLinks();
  renderCurrencyLinks();
  updateCurrencyLabels();
  updateSavedUi();
  updateMobileMenuContent();
  bindFilters();
  bindDetailGalleryResize();
  renderCurrentPage();
}

init().catch(error => {
  console.error(error);
  const grid = document.getElementById('propertyGrid');
  if (grid) grid.innerHTML = `<p class="empty-state">${escapeHtml(t('emptyState'))}</p>`;
});
