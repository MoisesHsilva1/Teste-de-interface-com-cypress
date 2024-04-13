describe('Testando a plataforma com tarefas sem serem concluidas', () => {
    beforeEach(() => {
        cy.visit('https://todomvc.com/examples/react/dist/')
    })
 it('Testando com o comportamento que um usuario colocou como tarefas nçao concluidas', () => {

    cy.log('adicionando a tarefa')
    cy.tarefa()

    cy.log('testando text sobre quantos itens de tarefas ')
    cy.contains('1 item left!').should('be.visible')

    cy.log('Selecionando o botao de tarefas ativas')
    cy.get('a[href="#/active"]').click()

    cy.log('Selecionando o botao de todas as tarefas')
    cy.get('a[href="#/"] ').click()

    cy.log('Selecionando o botao tarefas completas')
    cy.get('a[href="#/completed"]').click()
    cy.get('a[href="#/"] ').click()

    cy.log('removendo tarefa não concluida')
    cy.get('[data-testid="todo-item-button"]').click({force: true})

 })   
})