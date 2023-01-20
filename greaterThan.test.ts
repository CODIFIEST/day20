import greaterThan from "./greaterThan";
it('should return true if first var is greater than the second', ()=>{
   const x=99;
   const y=30;
   
    expect(greaterThan(x,y)).toBe(true)
})