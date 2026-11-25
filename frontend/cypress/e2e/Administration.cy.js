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

describe('Suppression de Joueur', () => {
  beforeEach(() => {
    cy.pageAdmin('admin@padel.com','Admin@2025!')
  })


  //Test Suppression
  

  it("Tentative de Suppression joueur qui a des matchs", () => {
    const entreprises = [];
    //Récupération du nom du joueur avant suppression
    cy.get('[data-cy="players-table"] tbody tr').first() //equivalent à .eq(0)
    .within(()=>{
      cy.get('td').first().invoke('text').then((nom)=>{
        const entreprise = nom.trim();
        entreprises.push(entreprise)
      })
    });
    //Affichage du nom du joueur qui va être supprimé
    console.log(entreprises)
    //Vérifier que Chloe Mercier est bien dans le tableau
    cy.contains('[data-cy="players-table"] tbody tr','Chloe Mercier').should('be.visible')

    //Appuyer sur le bouton supprimer
    cy.contains('button','Supprimer').click()
    cy.contains('Suppression impossible : le joueur appartient à une équipe').should('be.visible')
  })
  

  it("Suppression Joueur Nathan Blanc", () => {
    cy.suppressionJoueur('Nathan Blanc','ByteForge')
  })



//fin des tests
})
/*
data-cy="tab-teams"
data-cy="tab-pools"
data-cy="tab-accounts"
*/


//Apprendre comment récupérer le gars qui s'appellent Lucas Bernard par exemple
/*cy.get('@nomSupprime').then((nomSupprime) => {
  cy.get('[data-cy="players-table"] tbody').should('not.contain', nomSupprime);
});*/

//Récupérer seulement le nom (on peut mettre d'autres commandes en dessous)
/*
cy.get('[data-cy="players-table"] tbody tr').first()
    .within(()=>{
      cy.get('td').first().invoke('text').then((nom)=>{
        const entreprise = nom.trim();
        entreprises.push(entreprise)
    })
*/

//Tout récupérer 
/*cy.get('[data-cy="players-table"] tbody tr').first().find('td').invoke('text').then((nom)=>{
        const entreprise = nom.trim();
        cy.log('Nom récupéré :', entreprise);
        entreprises.push(entreprise)
    })
*/

/*
cy.contains('[data-cy="players-table"] tbody tr', 'Jean Dupont')
  .find('button')
  .click();
*/


/*
//venv\Scripts\Activate.ps1
//uvicorn app.main:app --reload --port 8000
//npm run dev
//npx cypress open
*/