/// <reference types="Cypress" />

import login_page from '../page_objects/login_page_selectors'

beforeEach(function() {
    cy.fixture('example').then(function(data){
        this.data=data
    })
    cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
    window.login_page_el = new login_page()
})


describe('As a user I do not want to login if any of input provided is incorrect', function(){
    it('As a user I do not want to login if my credentials are incorrect', function(){
        login_page_el.email_field().type(this.data.incorrect_email)
        login_page_el.password_field().type(this.data.incorrect_password)
        login_page_el.submit_login_button().click()

        login_page_el.authentication_failed_error()
    })

    it('As a user I want to see error message if password field is empty', function(){
        login_page_el.email_field().type(this.data.incorrect_email)
        login_page_el.submit_login_button().click()

        login_page_el.password_required_error()
    })

    it('As a user I want to see error message if email field is empty', function(){
        login_page_el.password_field().type(this.data.incorrect_password)
        login_page_el.submit_login_button().click()

        login_page_el.email_required_error()
    })

    it('As a user I want to see error message if whole form is empty', function(){
        login_page_el.submit_login_button().click()

        login_page_el.email_required_error()
    })
})

describe('As a user want to login with valid credentials', function(){
    it('As a user I do not want to login if my credentials are incorrect', function(){
        login_page_el.email_field().type(this.data.correct_email)
        login_page_el.password_field().type(this.data.correct_password)
        login_page_el.submit_login_button().click()

        login_page_el.logout_button()
    })
})