import lessThan from "./lessThan";
it('should return true if first variable is less than the second', ()=>{
    const x =6;
    const y =9;
    expect(lessThan(6,9)).toBe(true)
})