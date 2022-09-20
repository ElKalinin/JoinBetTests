// Hi, guys!

describe('Test QA',()=>{
    it('Part 1',()=>{
        cy.visit('https://qa-gdjsmns.hk/ru/sportsbook/home', {
            auth: {
                username: 'joinbet',
                password: 'ajvxeASUkr'
            }
        })
    })
})