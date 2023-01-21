import truncateString from "./truncateString";
const shrinkMe:string ="12345678901"
const howShortDoIWantTheStringToBe:number = 15;
console.log(truncateString(shrinkMe, howShortDoIWantTheStringToBe))

it('takes a string and the max Length of the string, and truncates it to that length, returning the string shorter', ()=>{
    expect(truncateString(shrinkMe, howShortDoIWantTheStringToBe)).toBe("12345678901")
})