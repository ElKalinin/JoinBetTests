// Hi, guys!

describe('Test QA',()=>{
    it('Part 1',()=>{
        cy.visit('https://qa-gdjsmns.hk/ru/sportsbook/home', {
            auth: {
                username: 'joinbet',
                password: 'ajvxeASUkr'
            }
        })
        //cy.get('[class="Menu_root__P08M2"]').find('article').eq(1).find('span').eq(1)
        //  .then(input=>{expect(input).to.be.a('Слоты')})
    })
})