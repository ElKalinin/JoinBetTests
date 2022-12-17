import {bonusModalClose} from "../../../../support/utils/footer";
import {header, notification, reg} from "../../../../fixtures/selectors";
import {profileMenu} from "../../../../fixtures/selectors";
import langsEmail from '../../../../fixtures/translations/navigation/registration/email';
import {regByEmail, regStep1FieldsFillByEmail} from "../../../../support/utils/reg";
import {regStep1CurrencyAndPromoCheck} from "../../../../support/utils/reg";
import {checkRegStep1FieldsFillByEmail} from "../../../../support/utils/reg";
import {generateStringEmail} from "../../../../support/utils/generate";
import {interceptDictionaries, checkBaseResponse} from "../../../../support/utils/intercept";

const MUTATION_REGISTER = 'emailRegister';
const DICTIONARIES_QUERY = 'getDictionaries';

langsEmail.forEach(({lang, headerCurrency, errorMessageEmail}) => {
    describe(`Регистрация по почте. Локализация -язык ${lang}`, () => {
        /*
        C1504 - https://jbtest.testrail.io/index.php?/cases/view/1504
         */
        it('Проверить список валют в дропдауне "Валюта"', () => {
            cy.authenticateUrl(`https://st2-gdjsmns.hk/${lang}/casino/lobby`);
            bonusModalClose();
            cy.get(header.regButton).click();
            cy.get(reg.window1.regChoiceButton.regEmailButton).click();
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
        /*
        C1518 - https://jbtest.testrail.io/index.php?/cases/view/1518
         */
        it('Нажать на кнопку "Зарегистрироваться" с не заполненной почтой', () => {
            cy.authenticateUrl(`https://st2-gdjsmns.hk/${lang}/casino/lobby`);
            bonusModalClose();
            const mockObject = {
                registerChecker() {
                },
            };
            cy.spy(mockObject, 'registerChecker').as('emailRegister');
            cy.intercept({
                method: 'POST',
                url: 'https://st2-gdjsmns.hk/graphql'
            }, (req) => {
                if (req.body.query.includes(MUTATION_REGISTER)) {
                    req.on('response', () => {
                        mockObject.registerChecker();
                    });
                }
            });
            cy.get(header.regButton).click();
            cy.get(reg.window1.regModButton).click();
            cy.get(reg.window1.emailField).should('have.text', errorMessageEmail);
            cy.wait(6000);
            cy.get('@emailRegister').should('not.be.called');
        });
    });
});

describe('Регистрация по почте.', () => {
    beforeEach(() => {
        cy.authenticateUrl('https://st2-gdjsmns.hk/ru/casino/lobby');
        bonusModalClose();
    });
    /*
    C4928 - https://jbtest.testrail.io/index.php?/cases/view/4928
     */
    it('Проверить открытие/закрытие дропдауна "Валюта"', () => {
        cy.get(header.regButton).click();
        cy.get(reg.window1.currencyList).should('be.hidden');
        cy.get(reg.window1.currencyItem).click();
        cy.get(reg.window1.currencyList).should('be.visible');
        cy.get(reg.window1.banner).click();
        cy.get(reg.window1.currencyList).should('be.hidden');
    });
    /*
    C1501 - https://jbtest.testrail.io/index.php?/cases/view/1501
     */
    it('Нажать на кнопку "Регистрация по телефону" после заполнения полей', () => {
        regStep1FieldsFillByEmail({email: 5000, country: 2, currency: 1, promo: 300});
        cy.get(reg.window1.regChoiceButton.regPhoneButton).click();
        regStep1CurrencyAndPromoCheck({currency: 1, promo: 300});
        cy.get(reg.window1.regChoiceButton.regEmailButton).click();
        checkRegStep1FieldsFillByEmail({email: 5000, country: 2, currency: 1, promo: 300});
    });
    /*
    C1519 - https://jbtest.testrail.io/index.php?/cases/view/1519
     */
    it('Нажать на кнопку "Зарегистрироваться" с заполненными обязательными полями', () => {
        const email = generateStringEmail();
        const password = 'testtest1';
        cy.intercept({
            method: 'POST',
            url: 'https://st2-gdjsmns.hk/graphql'
        }, (req) => {
            const PROFILEDATA_QUERY = 'getProfileData';
            const MUTATION_LOGOUT = 'logout';
            switch (true) {
                case req.body.query.includes(DICTIONARIES_QUERY):
                    req.alias = 'dictionaries';
                    req.on('response', (res) => {
                        expect(res.statusCode).to.eq(200);
                        expect(res.body.data.countries.list.length).to.be.greaterThan(0);
                        expect(res.body.data.currencies.list.length).to.be.greaterThan(0);
                    });
                    break;
                case req.body.query.includes(MUTATION_REGISTER):
                    expect(req.body.variables.payload).to.include({
                        email,
                        password,
                    });
                    req.on('response', (res) => {
                        checkBaseResponse(res, MUTATION_REGISTER);
                    });
                    break;
                case req.body.query.includes(PROFILEDATA_QUERY):
                    req.on('response', (res) => {
                        expect(res.statusCode).to.eq(200);
                    });
                    break;
                case req.body.query.includes(MUTATION_LOGOUT):
                    req.on('response', (res) => {
                        checkBaseResponse(res, MUTATION_LOGOUT);
                    });
                    break;
            }
        });
        regByEmail({email, country: 2, currency: 1, password});
        cy.get(reg.window1.modalWindow, {timeout: 60000}).should('not.exist');
        cy.get(reg.window2.closeWindow, {timeout: 60000})
            .should('be.visible')
            .click({force: true});
        cy.get(header.profileButton, {timeout: 60000}).click();
        cy.get(reg.window3.closeWindow, {timeout: 60000}).click();
        cy.get(profileMenu.logOutButton, {timeout: 60000}).click();
    });
    /*
    C4930 - https://jbtest.testrail.io/index.php?/cases/view/4930
     */
    it('Нажать на кнопку "Зарегистрироваться" с не заполненными страной и валютой', () => {
        const email = generateStringEmail();
        const password = 'testtest1';
        interceptDictionaries({url: 'https://st2-gdjsmns.hk/graphql'});
        cy.intercept({
            method: 'POST',
            url: 'https://st2-gdjsmns.hk/graphql'
        }, (req) => {
            if (req.body.query.includes(MUTATION_REGISTER)) {
                req.body.variables.payload.currency = null;
                req.body.variables.payload.countryCode = null;
                req.on('response', (res) => {
                    expect(res.statusCode).to.eq(400);
                });
            }
        });
        regByEmail({email, country: 2, currency: 1, password});
    });
    /*
    C5402 - https://jbtest.testrail.io/index.php?/cases/view/5402
     */
    it('Нотификация при bad response Проверка баланса', () => {
        const email = generateStringEmail();
        const password = 'testtest1';
        const GETBALANCE_QUERY = 'getBalance';
        interceptDictionaries({url: 'https://st2-gdjsmns.hk/graphql'});
        cy.intercept({
            method: 'POST',
            url: 'https://st2-gdjsmns.hk/graphql'
        }, (req) => {
            if (req.body.query.includes(GETBALANCE_QUERY)) {
                req.reply({
                    data: {
                        balance: {
                            __typename: 'ValidationError',
                            result: false,
                            errors: [{message: 'Session is expired', field: '0'}],
                        },
                    }
                })
            }
        });
        regByEmail({email, country: 2, currency: 1, password});
        cy.get(reg.window1.modalWindow, {timeout: 60000}).should('not.exist');
        cy.get(reg.window2.closeWindow, {timeout: 60000})
            .should('be.visible')
            .click({force: true});
        cy.get(header.profileButton).click();
        cy.get(profileMenu.personalData).click();
        cy.get(notification.windowErrorServer)
            .should('be.visible')
            .and('have.text', 'Ошибка сервера. Пожалуйста, обратитесь в поддержку.')
    });
});