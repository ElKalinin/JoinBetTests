import {bonusModalClose} from "../../../../support/utils/footer";
import {header} from "../../../../fixtures/selectors";
import langsHeader from '../../../../fixtures/translations/navigation/header';
import {regStep1FieldsFillByEmail} from "../../../../support/utils/reg";
import {regStep1CurrencyAndPromoCheck} from "../../../../support/utils/reg";
import {checkRegStep1FieldsFillByEmail} from "../../../../support/utils/reg";

describe('Registration by email. Localization. Casino. Header.',() => {
    langsHeader.forEach(({lang, headerCurrency}) => {
        /*
        C1504 - https://jbtest.testrail.io/index.php?/cases/view/1504
         */
        it(`Проверить список валют в дропдауне "Валюта" - язык ${lang}`, () => {
            cy.authenticateUrl(`https://st2-gdjsmns.hk/${lang}/casino/lobby`);
            bonusModalClose();
            cy.get(header.regButton).click();
            cy.get(header.window1.regChoiceButton.regEmailButton).click();
            cy.get(header.window1.currencyItem).click();
            cy.get(header.window1.currencyNameList)
                .should('have.length', Object.values(headerCurrency).length)
                .each((element, index) => {
                    cy.get(element).should('have.text', Object.values(headerCurrency)[index])
                        .and('be.visible')
                });
            Object.values(header.window1.currencyLogo).forEach((selector) => {
                cy.get(selector)
                    .should('be.visible')
                    .and('have.attr', 'src')
                    .then((element) => {
                        cy.status200(element)
                    });
            });
            cy.get(header.closeRegButton).click();
        });
    });
});

describe('Registration by email. Casino. Header.', () => {
    beforeEach(() => {
        cy.authenticateUrl('https://st2-gdjsmns.hk/ru/casino/lobby');
        bonusModalClose();
    });
    /*
    C4928 - https://jbtest.testrail.io/index.php?/cases/view/4928
     */
    it('Проверить открытие/закрытие дропдауна "Валюта"', () => {
        cy.get(header.regButton).click();
        cy.get(header.window1.currencyList).should('be.hidden');
        cy.get(header.window1.currencyItem).click();
        cy.get(header.window1.currencyList).should('be.visible');
        cy.get(header.window1.banner).click();
        cy.get(header.window1.currencyList).should('be.hidden');
    });
    /*
    C1501 - https://jbtest.testrail.io/index.php?/cases/view/1501
     */
    it('Нажать на кнопку "Регистрация по телефону" после заполнения полей',() => {
        regStep1FieldsFillByEmail({email:5000, country:2, currency:1, promo:300});
        cy.get(header.window1.regChoiceButton.regPhoneButton).click();
        regStep1CurrencyAndPromoCheck({currency:1, promo:300});
        cy.get(header.window1.regChoiceButton.regEmailButton).click();
        checkRegStep1FieldsFillByEmail({email:5000, country:2, currency:1, promo:300});
    });
});