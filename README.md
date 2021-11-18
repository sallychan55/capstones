# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

# Install and Compile
To install required packages, run this command.

`npm install`

then run below command to compile.

`truffle compile`

# Test
In a terminal, go to `eth-contracts` folder and run following commands.

`truffle test ./test/TestERC721Mintable.js`

`truffle test ./test/TestSolnSquareVerifier.js`

`truffle test ./test/TestSquareVerifier.js`

# Rinkeby Deployment Information
Create .secret file in `eth-contracts` folder with your MetaMask.

then run below command to deploy.

`truffle migrate --network rinkeby`

# Deployment
Result of deployments with my address.

```
Deploying 'ERC721Mintable'
   --------------------------
   > transaction hash:    0x278c153fe5e63d48a354bdcecad5e72832dfc70e0b6cb4851866e60db9daa49d
   > Blocks: 1            Seconds: 9
   > contract address:    0x9614602DEEC3f4a795F9Ef79debD4E618D00Ec7F
   > block number:        9657075
   > block timestamp:     1637138893
   > account:             0x3d59E79Fa07281Cc6a73D1a3df765BE8a4222EDc
   > balance:             1.774158088870014549
   > gas used:            2722501
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.02722501 ETH


   Deploying 'Verifier'
   --------------------
   > transaction hash:    0xa8ca5c0f6aa49d7ef60be18db5e38315a8a2fbe70e46671c9a719f2cad6578e1
   > Blocks: 1            Seconds: 13
   > contract address:    0x313b2fa3aeC41CA80c4E2AE4F1eb35Bbd1681b96
   > block number:        9657076
   > block timestamp:     1637138908
   > account:             0x3d59E79Fa07281Cc6a73D1a3df765BE8a4222EDc
   > balance:             1.764380068870014549
   > gas used:            977802
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00977802 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0x5568ce36863c05b85a283ba090b821d4aa0214b830795c0e8c8a41e663540d49
   > Blocks: 0            Seconds: 5
   > contract address:    0x7fd0Dc5AC432AF909C611DB3E5392F22A29C4894
   > block number:        9657077
   > block timestamp:     1637138923
   > account:             0x3d59E79Fa07281Cc6a73D1a3df765BE8a4222EDc
   > balance:             1.722078898870014549
   > gas used:            4230117
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.04230117 ETH

```

See eth-contracts/build/contracts folder for Contract Abi's.

# OpenSea Store Front
https://testnets.opensea.io/collection/property-capstone-project

# Libraries
* Truffle v5.1.14-nodeLTS.0 (core: 5.1.13)
* Solidity v0.5.16 (solc-js)
* Node v16.10.0
* Web3.js v1.2.1

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
