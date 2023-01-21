// import User from "./domain/User";
import {User} from "./domain/user";
import isFavorite from "./isFavorite";
// import User from "./domain/User";
// type User = {
//     favoriteShows: string[];
// }

let wonky:User={
    favoriteShows:['this show', 'that show', 'the other show', 'first time', 'friday night lights', 'rudy', 'kingpin', 'lost', 'found','breaking bad']
}

let theShow = "breaking boy";
it('takes a custom type user with property favoriteShows, and returns true if theShow is in that array.  if too many or not enough shows, throw errors', ()=>{
    expect(isFavorite(wonky, theShow)).toBe(true)
})