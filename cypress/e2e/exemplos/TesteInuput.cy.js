describe('Testando o Input da pagina', () => {
   it('Testando comportamento de usuario adiciando e removendo terefa', () => {
       cy.visit('https://todomvc.com/examples/react/dist/')

        cy.log('Adicinando tarefa no input')
        cy.get('[data-testid="text-input"]').type('Tarefa {enter}')

        cy.log('Selecinando tarefa')
        cy.get('[type="checkbox"]').check()


         cy.get('[data-testid="todo-item-label"]').dblclick()   
         cy.get('[data-testid="todo-item-label"]').clear()   
        
       
   })
})

