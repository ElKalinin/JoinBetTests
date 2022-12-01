import {header} from "../../../fixtures/selectors";
import {regCountry, regCurrency} from "../../../fixtures/arrays/header";
import {regCodeCountry} from "../../../fixtures/arrays/header";
/*
 Регистрация по телефону и по почте
 el0 - e-mail
 index0 - номер страны из списка
 index1 - номер телефонного кода страны
 el1 - номер телефона
 index2 - номер валюты
 el2 - промокод
 */
export const regByEmail = (el0, index0, index2, el2) => {
    cy.get(header.regButton).click();
    cy.get(header.window1.email)
        .type(el0)
        .should('have.value', el0)
        .and('be.visible');
    cy.get(header.window1.countryButton).click();
    cy.get(header.window1.country).eq(index0).click();
    cy.get(header.window1.countryButton).should('have.text', regCountry[index0]);
    cy.get(header.window1.currencyItem).click();
    cy.get(header.window1.currencyNameList).eq(index2).click();
    cy.get(header.window1.currencyItem).should('have.text', regCurrency[index2]);
    cy.get(header.window1.promocodeButton).click();
    cy.get(header.window1.promocode)
        .type(el2)
        .should('have.value', el2)
        .and('be.visible');
};
export const regByPhone = (index1, el1, index2, el2) => {
    cy.get(header.window1.countryPhButton).click();
    cy.get(header.window1.countryPh).eq(index1).click();
    cy.get(header.window1.countryPhButton).should('have.text', regCodeCountry[index1]);
    cy.get(header.window1.numberPh)
        .type(el1)
        .should('have.value', el1)
        .and('be.visible');
    cy.get(header.window1.currencyItem).click();
    cy.get(header.window1.currencyNameList).eq(index2).click();
    cy.get(header.window1.currencyItem).should('have.text', regCurrency[index2]);
    cy.get(header.window1.promocodeButton).click();
    cy.get(header.window1.promocode)
        .type(el2)
        .should('have.value', el2)
        .and('be.visible');
};
export const intermCheckReg = (index2, el2) => {
    cy.get(header.window1.currencyItem).should('have.text', regCurrency[index2]);
    cy.get(header.window1.promocode)
        .should('have.value', el2)
        .and('be.visible');
};
export const checkRegByEmail = (el0, index0, index2, el2) => {
    cy.get(header.window1.email)
        .should('have.value', el0)
        .and('be.visible');
    cy.get(header.window1.countryButton).should('have.text', regCountry[index0]);
    cy.get(header.window1.currencyItem).should('have.text', regCurrency[index2]);
    cy.get(header.window1.promocode)
        .should('have.value', el2)
        .and('be.visible');
};
export const checkRegByPhone = (index1, el1, index2, el2) => {
    cy.get(header.window1.countryPhButton).should('have.text', regCodeCountry[index1]);
    cy.get(header.window1.numberPh)
        .should('have.value', el1)
        .and('be.visible');
    cy.get(header.window1.currencyItem).should('have.text', regCurrency[index2]);
    cy.get(header.window1.promocode)
        .should('have.value', el2)
        .and('be.visible');
};