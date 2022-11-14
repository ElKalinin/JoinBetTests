import {bonuses} from "../../../fixtures/selectors";

export const bonusModalClose = () => {
    cy.get('body').then(($body) => {
        if ($body.find(bonuses.regBonus.modalWindow).length > 0) {
            cy.get(bonuses.regBonus.closeButton).click();
        }
    });
    cy.get(bonuses.regBonus.modalWindow).should('not.exist');
};