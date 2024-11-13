import {sum}from '../utils.js'

describe('Unit test - test sum method', ()=> {
    it('Test util.som method', ()=> {
        const a = sum(1,1)
        expect (a).toBe(2)
    });
})