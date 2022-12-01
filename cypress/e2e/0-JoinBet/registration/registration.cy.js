import {bonusModalClose} from "../../../support/utils/footer";
import {header} from "../../../fixtures/selectors";
import langsHeader from '../../../fixtures/translations/navigation/header';
import {regByEmail, regByPhone} from "../../../support/utils/reg";
import {intermCheckReg} from "../../../support/utils/reg";
import {checkRegByPhone} from "../../../support/utils/reg";
import {checkRegByEmail} from "../../../support/utils/reg";

describe('Registration. Localization. Casino. Header.',() => {
    langsHeader.forEach(({lang, headerCurrency}) => {
        /*
        C1504 - https://jbtest.testrail.io/index.php?/cases/view/1504
         */
        it(`Проверить список валют в дропдауне "Валюта" - язык ${lang}`, () => {
            cy.authenticateUrl(`https://st2-gdjsmns.hk/${lang}/casino/lobby`);
            bonusModalClose();
            cy.get(header.regButton).click();
            Object.values(header.window1.regChoiceButton).forEach((el) => {
                cy.get(el).click();
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
            });
            cy.get(header.closeRegButton).click();
        });
    });
});

describe('Registration. Casino. Header.', () => {
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
        regByEmail(5000, 2, 1, 300);//e-mail, выбор страны, выбор валюты, промокод
        cy.get(header.window1.regChoiceButton.regPhoneButton).click();
        intermCheckReg(1, 300);//выбор валюты, промокод
        cy.get(header.window1.regChoiceButton.regEmailButton).click();
        checkRegByEmail(5000, 2, 1, 300);//e-mail, выбор страны, выбор валюты, промокод
    });
    /*
    C1444 - https://jbtest.testrail.io/index.php?/cases/view/1444
     */
    it('Нажать на кнопку "Регистрация по почте" после заполнения полей',() => {
        cy.get(header.regButton).click();
        cy.get(header.window1.regChoiceButton.regPhoneButton).click();
        regByPhone(3, 100100, 0, 200);//выбор кода страны, номер телефона, выбор валюты, промокод
        cy.get(header.window1.regChoiceButton.regEmailButton).click();
        intermCheckReg(0, 200);//выбор валюты, промокод
        cy.get(header.window1.regChoiceButton.regPhoneButton).click();
        checkRegByPhone(3, 100100, 0, 200);//выбор кода страны, номер телефона, выбор валюты, промокод
    });
});