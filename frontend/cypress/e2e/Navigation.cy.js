/// <reference types="cypress" />

/*
Des tests pour ce rendre directement sur des pages bien précises
*/

describe('Navigation', () => {
  beforeEach(() => {
    cy.pageAdmin('admin@padel.com','Admin@2025!')
  })


  it("Aller sur les Joueurs", () => {
    cy.contains('button','Joueurs').click()
  })
  
  it("Aller sur les Equipes", () =>{
    cy.contains('button','Équipes').click()
  })

  it("Aller sur les poules", () =>{
    cy.contains('button','Poules').click()
  })

  it("Aller sur les Comptes", () =>{
    cy.contains('button','Comptes').click()
  })


//fin des tests
})
