import {bonusModalClose} from "../../../support/utils/footer";
import { footer } from '../../../fixtures/selectors';
import { header } from "../../../fixtures/selectors";
import langsFooter from '../../../fixtures/translations/navigation/footer';
import langsHeader from '../../../fixtures/translations/navigation/header';
import urls from '../../../fixtures/url/footer';

describe('Localization. Casino. Footer.', () => {
    langsFooter.forEach(({lang, values}) => {
        it(`Отображение всех текстовых данных - язык ${lang}`, () => {
            cy.authenticateUrl(`https://st2-gdjsmns.hk/${lang}/casino/lobby`);
            bonusModalClose();
            Object.values(footer.links).forEach((selector, index) => {
                cy.get(selector).should('have.text', Object.values(values)[index])
            });
            cy.get(footer.titles)
                .should('have.length', 5)
                .each((element, index) => {
                    cy.get(element).should('have.text', Object.values(values.headLines)[index])
                });
        });
    });
});

describe('Casino. Footer.',()=> {
    beforeEach(() => {
        cy.authenticateUrl('https://st2-gdjsmns.hk/ru/casino/lobby');
        bonusModalClose();
    });
    it('Переход по ссылкам', () => {
        Object.values(footer.links).forEach((selector, index) => {
            cy.scrollTo('bottom');
            cy.get(selector)
                .click({force: true});
            cy.url().should('include', urls[index]);
            cy.status200(urls[index]);
            cy.go('back');
        });
    });
    it('Клик по логотипу', () => {
        cy.scrollTo('bottom');
        cy.get(footer.logo)
            .click({force: true});
        cy.url().should('include', urls[0]);
        cy.status200(urls[0]);
    });
    it('Отображение платёжных систем', () => {
        cy.scrollTo('bottom');
        Object.values(footer.payment).forEach((selector) => {
            cy.get(selector)
                .should('be.visible')
                .and('have.attr', 'src')
                .then((element) => {
                    cy.status200(element)
                });
        });
    });
});

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