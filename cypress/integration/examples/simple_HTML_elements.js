/// <reference types="Cypress" />

describe('This section has really simple HTML elements so that you can understand their basic nature', function(){
    it('Click buttons', function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')

        //click on button via id 
        //and navigate back to previous page
        cy.get('#idExample').click()
        cy.go('back')

        //click on button via classname
        //and navigate back to previous page
        cy.get('.buttonClass').click()
        cy.go('back')

        //click on button via name
        //and navigate back to previous page
        cy.get('button[name="button1"]').click()
        cy.go('back')

        //click on button via link text
        //and navigate back to previous page
        cy.get('a:contains("Click me using this link text!")').click()
        cy.go('back')
    })

    it('Click radiobutton and validate it is selected', function(){
    cy.get('input[type="radio"]').check('female').should('be.checked')
    })

    it('Click checkbox and validate it is marked', function(){
        cy.get('input[type="checkbox"]').check(['Car', 'Bike']).should('be.checked')
    })

    it('Click dropdown option and validate it is selected', function(){
        cy.get('select').select('Saab').should('have.value', 'saab')
    })

    it('Switch tab content and validate it is accurate to the section', function(){
        //click and check Tab 1 content
        cy.get('ul li a:contains("Tab 1")').click()
        cy.get('div.et_pb_tab_content').then(function(element){
            const tab2_text = element.text()
            expect(tab2_text.includes('tab 1 content')).to.be.true
        })

        //click and check Tab 2 content
        cy.get('ul li a:contains("Tab 2")').click()
        cy.get('div.et_pb_tab_content').then(function(element){
            const tab2_text = element.text()
            expect(tab2_text.includes('Tab 2 content')).to.be.true
        })

        //returned text in all tabs when calling .should method returns it with '/n' signs
        //using jquery function to check if tab 1 content exists
        cy.get('ul li a:contains("Tab 1")').click()
        cy.get('div.et_pb_all_tabs').then(function(element){
            const tab1_text = element.text()
            expect(tab1_text.includes('tab 1 content')).to.be.true
        })

    })
})
