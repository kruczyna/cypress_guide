/// <reference types="Cypress" />

describe('My HTTP POST request', function(){
    it('My POST request', function(){
        cy.request('POST', 'https://automationintesting.online/auth/login', {
            "username": "admin",
            "password": "password"
        }).then(function(response){
            expect(response.status).to.eq(200)
        })
    })
})

describe('My HTTP GET request', function(){
    it('GET first room information', function(){
        cy.request('GET', 'https://automationintesting.online/room/')
        .its('body.rooms.0')
        .then(function(response){
            expect(response).property('roomNumber').to.equal(101)
            expect(response).property('type').to.equal('Single')
            expect(response).property('roomPrice').to.equal(100)
        })
    })
    it('GET second room information', function(){
        cy.request('GET', 'https://automationintesting.online/room/')
        .its('body.rooms.1')
        .then(function(response){
            expect(response).property('roomNumber').to.equal(102)
            expect(response).property('type').to.equal('Twin')
            expect(response).property('roomPrice').to.equal(250)
        })
    })
})