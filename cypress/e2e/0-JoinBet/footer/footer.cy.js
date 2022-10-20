const stand1 = Cypress.env('stand1');
import { footer } from '../../../fixtures/selectors';
import langs from '../../../fixtures/translations/navigation/footer';
import urls from '../../../fixtures/url/footer';

describe('Localization. Casino. Footer.', () => {
    langs.forEach(({lang, values}) => {
        it(`Отображение всех текстовых данных - язык ${lang}`, () => {
            cy.visit(`https://st2-gdjsmns.hk/${lang}/casino/lobby`, {
                auth: {
                    username: stand1.username,
                    password: stand1.password
                }
            })
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

describe('Link navigation. Casino. Footer.',()=>{
    it('Переход по ссылкам', () => {
        cy.visit(`https://st2-gdjsmns.hk/ru/casino/lobby`, {
            auth: {
                username: stand1.username,
                password: stand1.password
            }
        })
        Object.values(footer.links).forEach((selector, index) => {
            cy.scrollTo('bottom')
            cy.wait(3000)
            cy.get(selector)
                .click()
            cy.url().should('include', urls[index])
            cy.request({
                url: urls[index],
                auth: {
                    username: stand1.username,
                    password: stand1.password
                },
                failOnStatusCode: false
            })
                .then((response)=>{
                    expect(response.status).to.eq(200)
                })
            cy.go('back')
        })
    })
})