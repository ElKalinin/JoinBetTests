const stand1 = Cypress.env('stand1');
import { footer } from '../../../fixtures/selectors';
import langs from '../../../fixtures/translations/navigation/footer';
import urls from '../../../fixtures/url/footer';

Cypress.Commands.add('authenticateUrl',(url)=>{
    cy.visit(url, {
        auth: {
            username: stand1.username,
            password: stand1.password
        }
    })
})

Cypress.Commands.add('status200',(url)=>{
    cy.request({
        url: url,
        auth: {
            username: stand1.username,
            password: stand1.password
        },
        failOnStatusCode: false
    })
        .then((response)=>{
            expect(response.status).to.eq(200)
        })
})

describe('Localization. Casino. Footer.', () => {
    langs.forEach(({lang, values}) => {
        it(`Отображение всех текстовых данных - язык ${lang}`, () => {
            cy.authenticateUrl(`https://st2-gdjsmns.hk/${lang}/casino/lobby`)
            Object.values(footer.links).forEach((selector, index) => {
                cy.get(selector).should('have.text', Object.values(values)[index])
                    })
            cy.get(footer.titles)
                .should('have.length', 5)
                .each((element, index) => {
                    cy.get(element).should('have.text', Object.values(values.headLines)[index])
                })
        })
    })
})

beforeEach(()=>{
    cy.authenticateUrl('https://st2-gdjsmns.hk/ru/casino/lobby')
})

describe('Link navigation. Casino. Footer.',()=>{
    it('Переход по ссылкам', () => {
        cy.authenticateUrl('https://st2-gdjsmns.hk/ru/casino/lobby')
        Object.values(footer.links).forEach((selector, index) => {
            cy.scrollTo('bottom')
            cy.wait(3000)
            cy.get(selector)
                .click()
            cy.url().should('include', urls[index])
            cy.status200(urls[index])
            cy.go('back')
        })
    })
})

describe('Logo click. Casino. Footer.',()=>{
    it('Клик по логотипу',()=>{
        cy.scrollTo('bottom')
        cy.wait(3000)
        cy.get(footer.logo)
            .click()
        cy.url().should('include',urls[0])
        cy.status200(urls[0])
    })
})

describe('Payment systems. Casino. Footer',()=>{
    it('Отображение платёжных систем',()=>{
        cy.scrollTo('bottom')
        cy.wait(3000)
        Object.values(footer.payment).forEach((selector)=> {
            cy.get(selector)
                .should('be.visible')
                .and('have.prop', 'naturalWidth')
                .should('be.greaterThan', 0)
        })
    })
})