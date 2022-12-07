import {bonusModalClose} from "../../../../support/utils/footer";
import {header} from "../../../../fixtures/selectors";
import langsHeader from '../../../../fixtures/translations/navigation/header';
import {regStep1FieldsFillByPhone} from "../../../../support/utils/reg";
import {regStep1CurrencyAndPromoCheck} from "../../../../support/utils/reg";
import {checkRegStep1FieldsFillByPhone} from "../../../../support/utils/reg";

describe('Registration by phone. Localization. Casino. Header.',() => {
    langsHeader.forEach(({lang, headerCurrency}) => {
        /*
        C1447 - https://jbtest.testrail.io/index.php?/cases/view/1447
         */
        it(`Проверить список валют в дропдауне "Валюта" - язык ${lang}`, () => {
            cy.authenticateUrl(`https://st2-gdjsmns.hk/${lang}/casino/lobby`);
            bonusModalClose();
            cy.get(header.regButton).click();
            cy.get(header.window1.regChoiceButton.regPhoneButton).click();
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

describe('Registration by phone. Casino. Header.', () => {
    beforeEach(() => {
        cy.authenticateUrl('https://st2-gdjsmns.hk/ru/casino/lobby');
        bonusModalClose();
    });
    /*
    C1444 - https://jbtest.testrail.io/index.php?/cases/view/1444
     */
    it('Нажать на кнопку "Регистрация по почте" после заполнения полей',() => {
        cy.get(header.regButton).click();
        cy.get(header.window1.regChoiceButton.regPhoneButton).click();
        regStep1FieldsFillByPhone({phoneCode:3, phone:100100, currency:0, promo:200});
        cy.get(header.window1.regChoiceButton.regEmailButton).click();
        regStep1CurrencyAndPromoCheck({currency:0, promo:200});
        cy.get(header.window1.regChoiceButton.regPhoneButton).click();
        checkRegStep1FieldsFillByPhone({phoneCode:3, phone:100100, currency:0, promo:200});
    });
});