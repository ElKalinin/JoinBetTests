import { footer } from '../../../fixtures/selectors';
import langs from '../../../fixtures/translations/navigation/footer';

langs.forEach(({lang, values})=>{

    describe(`Casino. Footer. ${lang}`,()=> {
        it(`Отображение всех текстовых данных - язык ${lang}`, () => {
            cy.visit(`https://st2-gdjsmns.hk/${lang}/casino/lobby`, {
                auth: {
                    username: 'joinbet',
                    password: 'ajvxeASUkr'
                }
            })
            const selectors = Object.values(footer.links)
            selectors.forEach((selector, index) => {
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

