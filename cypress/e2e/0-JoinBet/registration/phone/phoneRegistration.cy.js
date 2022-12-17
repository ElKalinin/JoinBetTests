import {bonusModalClose} from "../../../../support/utils/footer";
import {header} from "../../../../fixtures/selectors";
import {reg} from "../../../../fixtures/selectors";
import langsPhone from '../../../../fixtures/translations/navigation/registration/phone';
import {regStep1FieldsFillByPhone} from "../../../../support/utils/reg";
import {regStep1CurrencyAndPromoCheck} from "../../../../support/utils/reg";
import {checkRegStep1FieldsFillByPhone} from "../../../../support/utils/reg";

langsPhone.forEach(({lang, headerCurrency}) => {
    describe(`Регистрация по телефону. Локализация - язык ${lang}`, () => {
        /*
        C1447 - https://jbtest.testrail.io/index.php?/cases/view/1447
         */
        it('Проверить список валют в дропдауне "Валюта"', () => {
            cy.authenticateUrl(`https://st2-gdjsmns.hk/${lang}/casino/lobby`);
            bonusModalClose();
            cy.get(header.regButton).click();
            cy.get(reg.window1.regChoiceButton.regPhoneButton).click();
            cy.get(reg.window1.currencyItem).click();
            cy.get(reg.window1.currencyNameList)
                .should('have.length', Object.values(headerCurrency).length)
                .each((element, index) => {
                    cy.get(element).should('have.text', Object.values(headerCurrency)[index])
                        .and('be.visible')
                });
            Object.values(reg.window1.currencyLogo).forEach((selector) => {
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

describe('Регистрация по телефону.', () => {
    beforeEach(() => {
        cy.authenticateUrl('https://st2-gdjsmns.hk/ru/casino/lobby');
        bonusModalClose();
    });
    /*
    C1444 - https://jbtest.testrail.io/index.php?/cases/view/1444
     */
    it('Нажать на кнопку "Регистрация по почте" после заполнения полей', () => {
        cy.get(header.regButton).click();
        cy.get(reg.window1.regChoiceButton.regPhoneButton).click();
        regStep1FieldsFillByPhone({phoneCode: 3, phone: 100100, currency: 0, promo: 200});
        cy.get(reg.window1.regChoiceButton.regEmailButton).click();
        regStep1CurrencyAndPromoCheck({currency: 0, promo: 200});
        cy.get(reg.window1.regChoiceButton.regPhoneButton).click();
        checkRegStep1FieldsFillByPhone({phoneCode: 3, phone: 100100, currency: 0, promo: 200});
    });
});