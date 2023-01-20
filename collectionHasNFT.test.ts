import collectionHasNft from "./collectionHasNFT"
import NFT from "./domain/NFT"
let nfts: NFT[] = [{
    name: "stupid nft",
    imageURL: "http://someurl.org"
}, {
    name: "another waste of money",
    imageURL: "http://loser.org"
}, {
    name: "testit",
    imageURL: "http://winner.com"
}]
let nft: NFT = {
    name: "testit",
    imageURL: "http://winner.com"
}

it('should search the array for the nft and if it exists, return true', ()=>{
    expect(collectionHasNft(nfts, nft)).toBe(false)
})