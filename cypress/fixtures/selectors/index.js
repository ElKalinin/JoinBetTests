export const footer = {
    links: {
        line: 'a[target="_self"][href*="sportsbook/home"]', //'Линия'
        live: 'a[target="_self"][href*="sportsbook/live"]', //'Лайв'
        cybersport: 'a[target="_self"][href*="sportsbook/esports"]', //'Киберспорт'
        //statistics: 'a[target="_blank"][href*="https://stats"]', //'Статистика'
        //results: 'a[target="_blank"][href*="https://livescore"]', //'Результаты'
        slots: 'a[target="_self"][href*="casino/categories/2254"]', //'Слоты'
        liveCasino: 'a[target="_self"][href*="casino/live"]', //'Лайв казино'
        news: 'a[target="_self"][href*="casino/categories/2245"]', //'Новинки'
        topGames: 'a[target="_self"][href*="casino/categories/2242"]', //'Топ игры'
        jackpots: 'a[target="_self"][href*="casino/categories/2248"]', //'Джекпоты'
        about: 'a[target="_self"][href*="info/about"]', //'О нас'
        privacy: 'a[target="_self"][href*="info/privacy"]', //'Конфиденциальность'
        faq: 'a[target="_self"][href*="info/faq"]', //'FAQ'
        amlKyc: 'a[target="_self"][href*="info/aml-kyc"]', //'AML & KYC'
        responsibleGambling: 'a[target="_self"][href*="info/responsiblegambling"]', //'Ответственная игра'
        //welcomeBonus: 'a[target="_self"][href*="#"]', //'Вступительный бонус'
        terms: 'a[target="_self"][href*="promo"]', //'Условия'
        payments: 'a[target="_self"][href*="info/payments"]', //'Прием платежей'
        bettingPolicy: 'a[target="_self"][href*="info/bets"]' //'Политика ставок'
    },
    titles: '[class*="Menu_label"]', //'Cтавки','Казино','Информация','Бонусы','Полезное'
    logo: 'a[aria-label="logoLinkFooter"][href*="sportsbook/home"]', //Логотип
    payment: {
        uzcard: 'img[alt="UZCARD"]',
        visa: 'img[alt="VISA"]',
        mastercard: 'img[alt="mastercard"]',
        //mir: 'img[alt="MIR"]',
        maestro: 'img[alt="Maestro.svg"]',
        qiwi: 'img[alt="QIWI"]',
        adv: 'img[alt="ADV"]',
        webmoney: 'img[alt="WebMoney"]',
        pm: 'img[alt="PM"]',
        bitcoin: 'img[alt="Bitcoin"]',
        usdt: 'img[alt="USDT"]',
        ethereum: 'img[alt="Ethereum"]'
    },
};
export const bonuses = {
    listBonuses: {
        groups: '[role="group"]', // группы бонусов
        groupHeaders: '[role="group"] > h3', // заголовки групп бонусов
        tags: '[role="group"] > article > a > span', // тэги бонусов ("Казино"/"Спорт")
    },
    singleBonus: {
        banner: '[role="banner"]', // главный баннер
        bannerText: '[role="banner"] div', // текст баннера
        bannerHeader: '[role="banner"] h1', // заголовок баннера
        bannerTimeEndText: '[role="banner"] > span', // "Акция завершится 31 октября 00:00"
        faqText: 'hgroup span', // FAQ текст
        faqHeader: 'hgroup h2', // FAQ заголовок
        bonusTime: '[role="banner"] div div div span:nth-child(2)', // дн/час/мин/сек
    },
    regBonus: {
        modalWindow: '[class^="RegistrationBonus_root"]', // модальное окно
        getButton: '[aria-label="bonusButton"]', // кнопка "Получи бонус!"
        closeButton: '[class^="RegistrationBonus_root"] > header > button:nth-child(1)', // кнопка "Закрыть"
    },
};
export const header = {
    regButton: '[class^="Button_root__4U57W"][aria-label="signUpBtn"]', // кнопка "Регистрация"
    closeRegButton: '[class^="ButtonClose_root"][aria-label="Close modal auth"]', // кнопка закрывания окна регистрации
    window1: {
        currencyItem: '[class^="CurrencySelect_toggler"]', // кнопка выбор валюты
        currencyList: '[class^="CurrencySelect_list"]', // поле со всей валютой
        currencyNameList: '[class*="CurrencySelect_item"]', // валюта
        currencyLogo: {
            usd: 'img[alt="USD"]',
            rub: 'img[alt="RUB"]',
            uzs: 'img[alt="UZS"]',
        },
        regChoiceButton: {
            regEmailButton: '[class*="TypeToggler_button"][aria-label="Toggler on email"]', // кнопка выбора почты
            regPhoneButton: '[class*="TypeToggler_button"][aria-label="Toggler on mobile"]', // кнопка выбора телефона
        },
        email: '[class*="inputWrapper"]', // поле электронной почты
        numberPh: '[aria-label="Enter phone number"]', // поле номера телефона
        countryButton: '[class*="CountrySelect_toggler"]', // кнопка выбора страны при регистрации по почте
        country: '[class*="CountrySelect_item"]', // страна при регистрации по почте
        countryPhButton: '[class*="phone_toggleView"]', // кнопка выбора страны при регистрации по телефону
        countryPh: '[class*="phone_item"]', // страна при регистрации по телефону
        banner: '[class^="SignUpBannerBlock_bannerStub"]', // баннер вверху окна
        regModButton: '[aria-label="authModalButton"]', // кнопка "Зарегистрироваться"
        promocodeButton: '[class*="Promocode_button"]', // кнопка "Промокод (если есть)"
        promocode: '[class*="PromocodeField_promocode"]', // поле для ввода промокода
    },
}