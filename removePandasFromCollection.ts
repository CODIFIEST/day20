// 5) removePandasFromCollection, which takes an array of NFTs which is the same NFT custom object type, 
// and removes any nfts that have Panda in their name, and returns the new array with no pandas in it.
import NFT from "./domain/NFT";

function removePandasFromCollection(nfts:NFT[]):NFT[] {
   for(let i=0; i< nfts.length; i++)

        if (nfts[i].name.toLowerCase().match('panda')){
            // console.log("there is a panda")
            nfts.splice(i,1)
            removePandasFromCollection(nfts)
        }
       
        // console.log("there is no panda")
    

    return nfts
}
export default removePandasFromCollection