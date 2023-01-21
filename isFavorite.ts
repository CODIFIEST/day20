// 8) create a User type with a property favoriteShows, 
// and a function isFavorite that takes a user, and a show name. 
// Return true if the user has favorited the show, false if not. 
// However, if the user has more than 10 favorite shows, the function should throw an error saying too many favorite shows, im not checking, 
// fml. If the user has 2 or less favorite shows, the function should throw an error saying not worth my time to check 
import {User} from "./domain/user";
// type User = {
//     favoriteShows: string[];
// }

function isFavorite(user:User, showName:string){
    if(user.favoriteShows.length > 10){
        throw console.error(`too many favorite shows, i'm not checking, FML`);
    }
    else if (user.favoriteShows.length < 2){
        throw console.error(`not worth my time to check, kek`);
        
    }
    else {
        if (user.favoriteShows.includes(showName)) return true; 
    }
    return false;
}
export default isFavorite;

// console.log(isFavorite(wonky, "breaking bar"))