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

//MATCHS

//Commandes de suppressions
Cypress.Commands.add('suppressionMatchPrecis', (nom, entreprise,date) => {
    //Il faut connaitre le nom l'entreprise et la date précise (sous forme de texte avec l'heure en plus)
    cy.contains('[data-cy="match-row"]', nom, entreprise,date).find('[data-cy=m-delete]').click();
  })

//Suppression de tous les matchs d'un joueur
Cypress.Commands.add('suppressionMatchsJoueur', (nom) => {
    cy.get(`[data-cy="match-row"]:contains("${nom}")`).find('[data-cy=m-delete]').then(($lignes) => {
      //On les supprimme 1 à 1 avec une boucle pour pas faire planter le test
      for (let row = 0; row < $lignes.length; row++) {
        //Le first indique qu'on se concentre sur le premier élément trouvé, sinon click ne marche pas
        cy.get(`[data-cy="match-row"]:contains("${nom}")`).first().find('[data-cy=m-delete]').click();
      }
    })
  })

//Suppression de tous les matchs d'une entreprise
Cypress.Commands.add('suppressionMatchsEntreprise', (entreprise) => {
    cy.get(`[data-cy="match-row"]:contains("${entreprise}")`).find('[data-cy=m-delete]').then(($lignes) => {
      for (let row = 0; row < $lignes.length; row++) {
        cy.get(`[data-cy="match-row"]:contains("${entreprise}")`).first().find('[data-cy=m-delete]').click();
      }
    })
  })

//Suppression de tous les matchs
Cypress.Commands.add('suppressionMatchs', () => {
    cy.get(`[data-cy="match-row"]`).find('[data-cy=m-delete]').then(($lignes) => {
      for (let row = 0; row < $lignes.length; row++) {
        cy.get(`[data-cy="match-row"]`).first().find('[data-cy=m-delete]').click();
      }
    })
  })

//Peut être factoriser le code pour moins de duplication de code


//ADMINISTRATION
Cypress.Commands.add('suppressionJoueur', (nom, entreprise) => {
    cy.contains('[data-cy="players-table"] tbody tr', nom, entreprise).find('button','Supprimer').click();
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