describe ('Testando a interface do to do list', () => {
   beforeEach(() => {
      cy.visit('https://todomvc.com/examples/react/dist/')
})
      
it ('Testando a interface da plataforma ', () => {
   
      cy.log('Verificando Titulo')
      cy.contains('todos').should('to.have.lengthOf', 1)

      cy.log('Verificando input')
      cy.get('[data-testid="text-input"]').should('to.have.lengthOf', 1)

      cy.log('Verificando sub-titulo sobre a plataforma')
      cy.contains('Double-click to edit a todo').should('to.have.lengthOf', 1)

      cy.log('Verificando sub-titulo sobre o criadores')
      cy.contains('Created by the TodoMVC Team').should('to.have.lengthOf', 1)

      cy.log('Verificando o botao link que direciona para pagina inicial')
      cy.contains('Part of ').should('to.have.lengthOf', 1)

   })
})

 