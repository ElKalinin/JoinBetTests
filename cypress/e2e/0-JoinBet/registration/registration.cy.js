import {bonusModalClose} from "../../../support/utils/footer";
import { header } from "../../../fixtures/selectors";
import langsHeader from '../../../fixtures/translations/navigation/header';

describe('Registration. Localization. Casino. Header.',() => {
    langsHeader.forEach(({lang, headerCurrency}) => {
        it(`Проверить список валют в дропдауне "Валюта" - язык ${lang}`, () => {
            cy.authenticateUrl(`https://st2-gdjsmns.hk/${lang}/casino/lobby`);
            bonusModalClose();
            cy.get(header.regButton)
                .click();
            cy.get(header.window1.regEmailButton)
                .should('have.length', 2)
                .each((el) => {
                    cy.get(el)
                        .click();
                    cy.get(header.window1.currencyItem)
                        .click();
                    cy.get(header.window1.currencyNameList)
                        .should('have.length', Object.values(headerCurrency).length)
                        .each((element, index) => {
                            cy.get(element).should('have.text', Object.values(headerCurrency)[index])
                                .trigger('mouseover')
                                .get(element)
                                .should('be.visible')
                        });
                    Object.values(header.window1.currencyLogo).forEach((selector) => {
                        cy.get(selector)
                            .should('be.visible')
                            .and('have.attr', 'src')
                            .then((element) => {
                                cy.status200(element)
                            });
                    });
                });
            cy.get(header.closeRegButton)
                .click();
        });
    });
});