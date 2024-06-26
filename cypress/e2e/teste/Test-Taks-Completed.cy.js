describe('Testando a plataforma com tarafas marcadas como completas', () => {
  beforeEach(() => {
      cy.visit('https://todomvc.com/examples/react/dist/')
    })
    
it('Testando comportamento de usuario adiciando tarefas completas e removendo', () => {

        cy.log('Funcao de adicionar tarefa')
        cy.tarefa()
        
        cy.log('Selecinando todas as terefas como conlcuidas')
        cy.get('[data-testid="toggle-all"]').click()
        cy.get('[data-testid="toggle-all"]').click()

        cy.log('Selecinando tarefa como concluida pelo checkbox')
        cy.get('[type="checkbox"]').check()

        cy.log('Selecionando o botao tarefas completas')
        cy.get('a[href="#/completed"]').click()

        cy.log('Selecionando o botao de tarefas ativas')
        cy.get('a[href="#/active"]').click()

       cy.log('Selecionando o botao de todas as tarefas')
       cy.get('a[href="#/"] ').click()

       cy.log('Removendo apenas uma Tarefa selecionda')
       cy.get('[data-testid="todo-item-button"]').click({force: true})
    
       cy.log('selecionando botao de remover todas as tarefas completas')
       cy.tarefa()
       cy.TarefaconcluidaCheck()
       cy.get('.clear-completed').click()
   })
})

