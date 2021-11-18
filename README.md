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
