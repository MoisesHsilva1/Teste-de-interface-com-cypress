describe('Testando o Input da pagina', () => {
  beforeEach(() => {
      cy.visit('https://todomvc.com/examples/react/dist/')
    })

it('funcao para adicionar tarefa', () => {
    const novaTask = 'Novatarefa'
    cy.get('[data-testid="text-input"]').type('Tarefa {enter}')
    cy.get('[data-testid="todo-list"]').should('contain', novaTask)
})

it('Testando comportamento de usuario adiciando tarefas completas e removendo', () => {
      
        cy.log('Selecinando tarefa como concluida')
        cy.get('[type="checkbox"]').check()

        cy.log('Selecionando o botao tarefas completas')
        cy.get('a[href="#/completed"]').click()

        cy.log('Selecionando o botao de tarefas ativas')
        cy.get('a[href="#/active"]').click()

       cy.log('Selecionando o botao de todas as tarefas')
       cy.get('a[href="#/"] ').click()

       cy.log('Removendo apenas uma Tarefa selecionda')
       cy.get('[data-testid="todo-item-button"]').click({force: true})
   
   })
})

