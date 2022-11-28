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
    regButton: '[class^="Button_root__4U57W"][aria-label="signUpBtn"]',
    closeRegButton: '[class^="ButtonClose_root"][aria-label="Close modal auth"]',
    window1: {
        currencyItem: '[class^="CurrencySelect_toggler"]',
        currencyNameList: '[class*="CurrencySelect_item"]',
        currencyLogo: {
            usd: 'img[alt="USD"]',
            rub: 'img[alt="RUB"]',
            uzs: 'img[alt="UZS"]',
        },
        regEmailButton: '[class*="TypeToggler_button"]',
    },
}