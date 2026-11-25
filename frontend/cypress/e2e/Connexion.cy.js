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
    cy.pagePlanning('admin@padel.com','Admin@2025!')
  })

  it("Charge matchs", () => {
    cy.pageMatchs('admin@padel.com','Admin@2025!')
  })

  it("Charge résultats", () => {
    cy.pageResultats('admin@padel.com','Admin@2025!')
  })

  it("Charge Profil", () => {
    cy.pageProfil('admin@padel.com','Admin@2025!')
  })

  it("Charge admin", () => {
    cy.pageAdmin('admin@padel.com','Admin@2025!') 
  })
})
