// 7) isHorseman, takes a string, throws an error if the string is not horseman, otherwise returns true.
function isHorseman(areYou:string):boolean{
    if(areYou.toLowerCase() === "horseman"){
        return true;
    }
    else throw console.error("liar");
    

}

export default isHorseman