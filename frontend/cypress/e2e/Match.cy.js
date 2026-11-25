/// <reference types="cypress" />

/*
Des tests sur les matchs
*/

describe('Navigation', () => {
  beforeEach(() => {
    cy.pageMatchs('admin@padel.com','Admin@2025!')
  })

  /*
  Prérequis: python seed.py a été exécuté juste avant
  */
  it("SuppressionMatchTermine", () =>{
    cy.contains('button','Comptes').click()
  })


//fin des tests
})
