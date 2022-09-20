//Hi, guys!!!

describe('Test QA213',()=>{
    it('Column 1',()=>{
        cy.visit('https://qa-gdjsmns.hk/ru/sportsbook/home', {
            auth: {
                username: 'joinbet',
                password: 'ajvxeASUkr'
            }
        })

        cy.get('[class="Menu_root__P08M2"]').contains('Ставки')
            .should('be.visible')
        cy.get('[class="Menu_root__P08M2"]').contains('Линия')
            .should('be.visible')
        cy.get('[class="Menu_root__P08M2"]').contains('Лайв')
            .should('be.visible')
        cy.get('[class="Menu_root__P08M2"]').contains('Киберспорт')
            .should('be.visible')
        cy.get('[class="Menu_root__P08M2"]').contains('Статистика')
            .should('be.visible')
        cy.get('[class="Menu_root__P08M2"]').contains('Результаты')
            .should('be.visible')
    })

    it('Column 2',()=>{
        cy.visit('https://qa-gdjsmns.hk/ru/sportsbook/home', {
            auth: {
                username: 'joinbet',
                password: 'ajvxeASUkr'
            }
        })

        cy.get('[class="Menu_root__P08M2"]').contains('Казино')
            .should('be.visible')
        cy.get('[class="Menu_root__P08M2"]').contains('Слоты')
            .should('be.visible')
        cy.get('[class="Menu_root__P08M2"]').contains('Лайв казино')
            .should('be.visible')
        cy.get('[class="Menu_root__P08M2"]').contains('Новинки')
            .should('be.visible')
        cy.get('[class="Menu_root__P08M2"]').contains('Топ игры')
            .should('be.visible')
        cy.get('[class="Menu_root__P08M2"]').contains('Джекпоты')
            .should('be.visible')
    })

    it('Column 3',()=>{
        cy.visit('https://qa-gdjsmns.hk/ru/sportsbook/home', {
            auth: {
                username: 'joinbet',
                password: 'ajvxeASUkr'
            }
        })

        cy.get('[class="Menu_root__P08M2"]').contains('Информация')
            .should('be.visible')
        cy.get('[class="Menu_root__P08M2"]').contains('О нас')
            .should('be.visible')
        cy.get('[class="Menu_root__P08M2"]').contains('Конфиденциальность')
            .should('be.visible')
        cy.get('[class="Menu_root__P08M2"]').contains('FAQ')
            .should('be.visible')
        cy.get('[class="Menu_root__P08M2"]').contains('AML & KYC')
            .should('be.visible')
        cy.get('[class="Menu_root__P08M2"]').contains('Ответственная игра')
            .should('be.visible')
    })

    it('Column 4',()=>{
        cy.visit('https://qa-gdjsmns.hk/ru/sportsbook/home', {
            auth: {
                username: 'joinbet',
                password: 'ajvxeASUkr'
            }
        })

        cy.get('[class="Menu_root__P08M2"]').contains('Бонусы')
            .should('be.visible')
        cy.get('[class="Menu_root__P08M2"]').contains('Вступительный бонус')
            .should('be.visible')
        cy.get('[class="Menu_root__P08M2"]').contains('Условия')
            .should('be.visible')
    })

    it('Column 5',()=>{
        cy.visit('https://qa-gdjsmns.hk/ru/sportsbook/home', {
            auth: {
                username: 'joinbet',
                password: 'ajvxeASUkr'
            }
        })

        cy.get('[class="Menu_root__P08M2"]').contains('Полезное')
            .should('be.visible')
        cy.get('[class="Menu_root__P08M2"]').contains('Прием платежей')
            .should('be.visible')
        cy.get('[class="Menu_root__P08M2"]').contains('Политика ставок')
            .should('be.visible')
    })
})