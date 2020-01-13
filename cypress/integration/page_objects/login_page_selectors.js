class login_page {

    email_field(){
        return cy.get('#email')
    }

    password_field(){
        return cy.get('#passwd')
    }

    submit_login_button(){
        return cy.get('#SubmitLogin')
    }

    authentication_failed_error(){
        return cy.get('ol li:contains("Authentication failed.")')
    }

    password_required_error(){
        return cy.get('ol li:contains("Password is required.")')
    }

    email_required_error(){
        return cy.get('ol li:contains("An email address required.")')
    }

    logout_button(){
        return cy.get('.logout')
    }
}

export default login_page;