import isHorseman from "./isHoreseman";
const tryName:string = "HORSEMAN"
it('accepts a string, checks to see if the string is horseman, if so returns true, otherwise returns an error', ()=>{
    expect(isHorseman(tryName)).toBe(true)
})

// console.log(isHorseman("HORSEMAN"))