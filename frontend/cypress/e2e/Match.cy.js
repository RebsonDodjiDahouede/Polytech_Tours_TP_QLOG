/// <reference types="cypress" />

/*
Des tests sur les matchs
*/

describe('Matchs', () => {
  beforeEach(() => {
    cy.pageMatchs('admin@padel.com','Admin@2025!')
  })

  /*
  Prérequis: python seed.py a été exécuté juste avant
  */
  it("SuppressionMatchTermine", () =>{
    cy.suppressionMatchPrecis('Jean Joueur','Tech Corp','Wednesday, October 14, 2026 à 18:00')
  })

  it("SuppressionTousLesMatchsGabrielRobin", () =>{
    cy.suppressionMatchsJoueur('Gabriel Robin')
  })

  it("SuppressionTousLesMatchsWebSphere", () =>{
    cy.suppressionMatchsJoueur('WebSphere')
  })

  it("SuppressionTousLesMatchs", () =>{
    cy.suppressionMatchs()
  })


//fin des tests
})
