describe ('Testando to-do-list', () => {
   beforeEach ( () => {
      cy.visit('https://todomvc.com/examples/react/dist/');
 });
       
   it ('Vericando Titulo', () => {
      cy.get('.header').contains('todos').should('to.have.lengthOf', 1)
   });

   it('Verificando Input', () => {
      cy.get('[data-testid="text-input"]').should('to.have.lengthOf', 1)
   });

   it('Verificando instrução de uso', () => {
      cy.contains('Double-click to edit a todo').should('be.visible')
   });

   it('Verificando criado do projeto',() => {
      cy.contains('Created by the TodoMVC Team').should('be.visible')
   });    

   it('Verificando Botao para page inicial', () => {
      cy.get('a').contains('TodoMVC').click()
      cy.location('href').should('visit','https://todomvc.com/')
   });
});
 