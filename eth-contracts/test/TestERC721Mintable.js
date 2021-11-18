//var ERC721MintableComplete = artifacts.require('ERC721MintableComplete');
const ERC721Mintable = artifacts.require("./ERC721Mintable.sol");

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];
    const TOTAL_SUPPLY = 4;

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            //this.contract = await ERC721MintableComplete.new({from: account_one});
            this.contract = await ERC721Mintable.new({from: account_one});

            // TODO: mint multiple tokens
            let i = 0;
            for(let i=0; i < TOTAL_SUPPLY; i++) {
                await this.contract.mint((i % 2 == 0 ? account_one : account_two), i+1, {from: account_one});
            }
        })

        it('should return total supply', async function () { 
            let totalSupply = await this.contract.totalSupply.call();
            assert(totalSupply == TOTAL_SUPPLY);
        })

        it('should get token balance', async function () { 
            let tokenBalance = await this.contract.balanceOf.call(account_one);
            assert(tokenBalance == TOTAL_SUPPLY/2);
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            let tokenURI = "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1";
            let result = await this.contract.tokenURI.call(1, {from: account_one});
            assert(result == tokenURI)
        })

        it('should transfer token from one owner to another', async function () { 
            let result = await this.contract.approve(account_two, 1, {from: account_one});
            result = await this.contract.transferFrom(account_one, account_two, 1, {from: account_one});
            result = await this.contract.ownerOf.call(1);
            assert(result == account_two)
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            //this.contract = await ERC721MintableComplete.new({from: account_one});
            this.contract = await ERC721Mintable.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            let result = false;
            try {
                await this.contract.mint(account_two, 11, {from: account_two});
            } catch (e) {
                result = true
            }
            assert(result == true, "Non contract owner should not be able to mint a new token");
        })

        it('should return contract owner', async function () { 
            let result = await this.contract.owner.call();
            assert(result == account_one, "account_one should be the owner");
        })

    });
})