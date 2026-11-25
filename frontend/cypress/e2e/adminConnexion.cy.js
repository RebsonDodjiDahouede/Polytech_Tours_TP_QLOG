/// <reference types="cypress" />

/**
 * Test d'exemple — point de départ pour vos tests End-to-End.
 *
 * Pré-requis : le backend (http://localhost:8000) et le frontend
 * (http://localhost:5173) doivent tourner. Lancez :
 *   npx cypress open   # mode interactif
 *   npx cypress run    # mode headless (CI)
 *
 * À vous d'écrire les parcours visiteur / joueur / administrateur, et les
 * tests qui prouvent les anomalies détectées en recette.
 */



describe('Connexion toutes les pages', () => {
  it("Charge planning", () => {
    cy.login('admin@padel.com','Admin@2025!')
    cy.visit('/planning')
    cy.contains('Mois suivant').should('be.visible')    
  })

  it("Charge matchs", () => {
    cy.login('admin@padel.com','Admin@2025!')
    cy.visit('/matches')
    cy.contains('Matchs').should('be.visible')    
  })

  it("Charge résultats", () => {
    cy.login('admin@padel.com','Admin@2025!')
    cy.visit('/results')
    cy.contains('Résultats').should('be.visible')    
  })

  it("Charge Profil", () => {
    cy.login('admin@padel.com','Admin@2025!')
    cy.visit('/profile')
    cy.contains('Mon profil').should('be.visible')    
  })

  it("Charge admin", () => {
    cy.login('admin@padel.com','Admin@2025!')
    cy.visit('/admin')
    cy.contains('Administration').should('be.visible')    
  })

})
