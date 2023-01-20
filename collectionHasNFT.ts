// 4) collectionHasNft, which takes an array of NFTs
// which is a custom object type that has two parameters, name and imageURL, 
// and  returns true if the provided collection (array of NFTs) includes the provided nft. 
// collectionHasNft(collection, nft)
import NFT from "./domain/NFT";

function collectionHasNft(collection: NFT[], nft: NFT): boolean {
    collection.find((element) => {
        if (element === nft) return true;
    })
    return false;

}
export default collectionHasNft