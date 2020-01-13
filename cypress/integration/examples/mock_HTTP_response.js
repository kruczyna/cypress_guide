/// <reference types="Cypress" />

beforeEach(function(){
    cy.server()
    cy.visit('https://example.cypress.io/commands/network-requests')
})

describe('My mocked HTTP PUT response', function(){
    it('My mocked PUT HTTP response', function(){
        cy.route({
            method: 'PUT',
            url: 'comments/*',
            status: '404',
            response: {
                error: "Hey Comment do not exist"
            },
            delay: 1000
        }).as('update_comment')
        cy.get('.network-put').click()
        cy.get('.network-put-comment').should('contain', 'Hey Comment do not exist')
    })
})
