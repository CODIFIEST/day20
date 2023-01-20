// 4) collectionHasNft, which takes an array of NFTs
// which is a custom object type that has two parameters, name and imageURL, 
// and  returns true if the provided collection (array of NFTs) includes the provided nft. 
// collectionHasNft(collection, nft)
import NFT from "./domain/NFT";

function collectionHasNft(collection: NFT[], nft: NFT): boolean {
    let answer:boolean= false;
    collection.find((element) => {
        
        // console.log(`element ${element.imageURL} ${element.name}`)
        // console.log(`nft var ${nft.imageURL} ${nft.name}`)
        if (element.imageURL === nft.imageURL && element.name===nft.name) {
            answer = true;
        }
        else answer = false
    
    })
 return answer;

}
export default collectionHasNft