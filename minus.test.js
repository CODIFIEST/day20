const minus = require('./minus')
test('this should subtract the 2nd number from the first', ()=>{
    const x = 71;
    const y =2;
    expect(minus(x,y)).toBe(69)
})