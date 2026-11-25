// Chargé automatiquement avant chaque fichier de test E2E.
// Ajoutez ici vos commandes personnalisées (ex. une commande de login) :
//   import './commands'
import './commands'

beforeEach(() => {
  cy.intercept('http://localhost:8000/**', (req) => {
    req.url = req.url.replace('http://localhost:8000', 'http://127.0.0.1:8000');
  });
});