import NFT from "./domain/NFT"
import removePandasFromCollection from "./removePandasFromCollection"

let nfts: NFT[] = [{
    name: "stupid PANDa nft",
    imageURL: "http://someurl.org"
}, {
    name: "another panda waste of money",
    imageURL: "http://loser.org"
}, {
    name: "testpand0it",
    imageURL: "http://winner.com"
}]

it('should search the array for any nft with panda in the name, remove the nft, and return the array with no pandas in it', ()=>{
    expect(removePandasFromCollection(nfts)).toStrictEqual([{
        name: "testpand0it",
        imageURL: "http://winner.com"
    }])
})