const Verifier = artifacts.require("./Verifier.sol");
const SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");
const fs = require('fs');
const proofTree = JSON.parse(fs.readFileSync("../zokrates/code/square/proof.json"));

contract('TestSolnSquareVerifier', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];
    
    before('setup contract', async () => {
        proof = proofTree["proof"];
        verifier = await Verifier.new();
        solnSquareVerifier = await SolnSquareVerifier.new(verifier.address);
    });

    // Test if a new solution can be added for contract - SolnSquareVerifier
    it('adds a new solution for the contract', async () => {
        let result = await solnSquareVerifier.addSolution(proof.a, proof.b, proof.c, proofTree["inputs"], account_two, 20, {from: account_one});
        let event = result.logs[0].event;
        assert(event == "SolutionAdded");
    });

    // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
    it('mints a new token', async () => {
        let result = await solnSquareVerifier.mint(account_two, 20, {from: account_one});
        let event = result.logs[0].event;
        assert(event == "Transfer");
    });
});