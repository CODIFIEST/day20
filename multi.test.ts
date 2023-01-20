import multiply from "./multi"
it('this should multiply the two iput variables and return the product', ()=>{
    const x = 5;
    const y = 11;
    expect(multiply(x,y)).toBe(55)
})