// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import {regStep1FieldsFillByEmail} from "./utils/reg";
import {header} from "../fixtures/selectors";

const stand1 = Cypress.env('stand1');

Cypress.Commands.add('authenticateUrl',(url)=>{
    cy.visit(url, {
        auth: {
            username: stand1.username,
            password: stand1.password
        }
    })
});

Cypress.Commands.add('status200',(url)=>{
    cy.request({
        url: url,
        auth: {
            username: stand1.username,
            password: stand1.password
        },
        failOnStatusCode: false
    })
        .then((response)=>{
            expect(response.status).to.eq(200)
        })
});