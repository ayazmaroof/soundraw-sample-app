// https://on.cypress.io/api

describe('Quiz e2e test', () => {
  it('visits the homepage and renders the quiz', () => {
    cy.visit('/');
    cy.get('div#question1')
      .children()
      .first()
      .should('have.text', 'What’s the first thing you would do when you need motivation?');
  });
  it('submits the quiz and renders the score', () => {
    cy.visit('/');
    cy.get('[type="radio"]').check(['1a', '2b']);
    cy.get('[type="checkbox"]').check(['3a', '3c']);
    cy.get('button#submit').click();
    cy.get('div#score').should('be.visible').contains('You scored')
  });
})
