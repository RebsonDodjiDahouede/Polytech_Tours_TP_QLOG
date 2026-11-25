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

//Commandes de navigation entre les pages

Cypress.Commands.add('login', (email, password) => {
  cy.session([email,password],() => {
    cy.visit('/login')
    //Renseignement des données
    cy.get('[data-cy=email]').type(email)
    cy.get('[data-cy=password]').type(password)
    cy.get('[data-cy=submit]').click() //OU cy.contains('button','Se connecter').click() en théorie
    cy.url().should('not.include', '/login')
  })
})

Cypress.Commands.add('pagePlanning', (email, password) => {
  cy.login(email,password)
  cy.visit('/planning')
  cy.contains('Mois suivant').should('be.visible')
})

Cypress.Commands.add('pageMatchs', (email, password) => {
  cy.login(email,password)
  cy.visit('/matches')
    cy.contains('Matchs').should('be.visible') 
})

Cypress.Commands.add('pageResultats', (email, password) => {
  cy.login(email,password)
  cy.visit('/results')
    cy.contains('Résultats').should('be.visible')
})

Cypress.Commands.add('pageProfil', (email, password) => {
  cy.login(email,password)
  cy.visit('/profile')
  cy.contains('Mon profil').should('be.visible') 
})

Cypress.Commands.add('pageAdmin', (email, password) => {
  cy.login(email,password)
  cy.visit('/admin')
  cy.contains('Administration').should('be.visible')
})

//Commandes de suppressions
Cypress.Commands.add('suppressionMatch', (nom, entreprise,date) => {
    //Il faut connaitre le nom l'entreprise et la date précise (sous forme de texte avec l'heure en plus)
    cy.contains('[data-cy="match-row"] tbody tr', nom, entreprise,date).find('button').click();
  })

Cypress.Commands.add('suppressionJoueur', (nom, entreprise) => {
    cy.contains('[data-cy="players-table"] tbody tr', nom, entreprise).find('button').click();
  })


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