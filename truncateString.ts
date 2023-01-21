// 6) truncateString, which takes a string and returns the first maxLength characters of it. 
// syntax like truncateString(string, maxLength) if the string is longer than maxLength, 
// otherwise, it returns the string itself.
function truncateString(toShorten:string, maxLength:number):string{
    let shorterString = toShorten.slice(0, maxLength)
    return shorterString;
}


export default truncateString;