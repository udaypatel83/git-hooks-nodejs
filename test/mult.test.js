const mult = require('../src/mul') 

it('should return correct multipication', () => { 
    const result = mult(2,5)
    expect(result).toBe(10)
})