import {header, reg} from "../../../fixtures/selectors";
import {regCountry, regCurrency} from "../../../fixtures/arrays/header";
import {regCodeCountry} from "../../../fixtures/arrays/header";

/**
 * Заполнение полей при регистрации по почте с проверкой введённых данных
 * @param {object} params - параметры
 * @param {string|number} params.email - e-mail
 * @param {number} params.country - номер страны из списка
 * @param {number} params.currency - номер валюты
 * @param {string|number} params.promo - промокод
 */
export const regStep1FieldsFillByEmail = (params) => {
    cy.get(header.regButton).click();
    cy.get(reg.window1.email)
        .type(params.email)
        .should('have.value', params.email)
        .and('be.visible');
    cy.get(reg.window1.countryButton).click();
    cy.get(reg.window1.country).eq(params.country).click();
    cy.get(reg.window1.countryButton).should('have.text', regCountry[params.country]);
    cy.get(reg.window1.currencyItem).click();
    cy.get(reg.window1.currencyNameList).eq(params.currency).click();
    cy.get(reg.window1.currencyItem).should('have.text', regCurrency[params.currency]);
    cy.get(reg.window1.promocodeButton).click();
    cy.get(reg.window1.promocode)
        .type(params.promo)
        .should('have.value', params.promo)
        .and('be.visible');
};

/**
 * Заполнение полей при регистрации по телефону с проверкой введённых данных
 * @param {object} params - параметры
 * @param {number} params.phoneCode - номер телефонного кода страны
 * @param {number} params.phone - номер телефона
 * @param {number} params.currency - номер валюты
 * @param {string|number} params.promo - промокод
 */
export const regStep1FieldsFillByPhone = (params) => {
    cy.get(reg.window1.countryPhButton).click();
    cy.get(reg.window1.countryPh).eq(params.phoneCode).click();
    cy.get(reg.window1.countryPhButton).should('have.text', regCodeCountry[params.phoneCode]);
    cy.get(reg.window1.numberPh)
        .type(params.phone)
        .should('have.value', params.phone)
        .and('be.visible');
    cy.get(reg.window1.currencyItem).click();
    cy.get(reg.window1.currencyNameList).eq(params.currency).click();
    cy.get(reg.window1.currencyItem).should('have.text', regCurrency[params.currency]);
    cy.get(reg.window1.promocodeButton).click();
    cy.get(reg.window1.promocode)
        .type(params.promo)
        .should('have.value', params.promo)
        .and('be.visible');
};

/**
 * Промежуточная проверка на видимость введённых данных при регистрации
 * @param {object} params - параметры
 * @param {number} params.currency - номер валюты
 * @param {string|number} params.promo - промокод
 */
export const regStep1CurrencyAndPromoCheck = (params) => {
    cy.get(reg.window1.currencyItem).should('have.text', regCurrency[params.currency]);
    cy.get(reg.window1.promocode)
        .should('have.value', params.promo)
        .and('be.visible');
};

/**
 * Проверка на видимость всех введённых данных при регистрации по почте
 * @param {object} params - параметры
 * @param {string|number} params.email - e-mail
 * @param {number} params.country - номер страны из списка
 * @param {number} params.currency - номер валюты
 * @param {string|number} params.promo - промокод
 */
export const checkRegStep1FieldsFillByEmail = (params) => {
    cy.get(reg.window1.email)
        .should('have.value', params.email)
        .and('be.visible');
    cy.get(reg.window1.countryButton).should('have.text', regCountry[params.country]);
    cy.get(reg.window1.currencyItem).should('have.text', regCurrency[params.currency]);
    cy.get(reg.window1.promocode)
        .should('have.value', params.promo)
        .and('be.visible');
};

/**
 * Проверка на видимость всех введённых данных при регистрации по телефону
 * @param {object} params - параметры
 * @param {number} params.phoneCode - номер телефонного кода страны
 * @param {number} params.phone - номер телефона
 * @param {number} params.currency - номер валюты
 * @param {string|number} params.promo - промокод
 */
export const checkRegStep1FieldsFillByPhone = (params) => {
    cy.get(reg.window1.countryPhButton).should('have.text', regCodeCountry[params.phoneCode]);
    cy.get(reg.window1.numberPh)
        .should('have.value', params.phone)
        .and('be.visible');
    cy.get(reg.window1.currencyItem).should('have.text', regCurrency[params.currency]);
    cy.get(reg.window1.promocode)
        .should('have.value', params.promo)
        .and('be.visible');
};

/**
 * Регистрация по почте и закрытие модального окна подтверждения регистрации
 * @param {object} params - параметры
 * @param {string|number} params.email - e-mail
 * @param {number} params.country - номер страны из списка
 * @param {number} params.currency - номер валюты
 * @param {string|number} params.password - пароль не менее 6 символов(латиница+цифры)
 */
export const regByEmail = (params) => {
    cy.get(header.regButton).click();
    cy.get(reg.window1.modalWindow, {timeout: 60000}).should('be.visible')
    //cy.wait('@dictionaries')
    cy.get(reg.window1.email)
        .type(params.email);
    cy.get(reg.window1.countryButton).click();
    cy.get(reg.window1.country).eq(params.country).click();
    cy.get(reg.window1.currencyItem).click();
    cy.get(reg.window1.currencyNameList).eq(params.currency).click();
    cy.get(reg.window1.password)
        .type(params.password);
    cy.get(reg.window1.regModButton).click();
};