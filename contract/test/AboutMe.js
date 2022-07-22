const {expect} = require('chai');
const {ethers} = require('hardhat');

describe('AboutMe', function(){
    it("should return the same value as in contructor", async function(){
        const Aboutme = await ethers.getContractFactory('AboutMe');
        const aboutme = await Aboutme.deploy("Ali Qumail","Pakistan","Student and a Software Engineer, learning solidity these days.","The journey of success begins with the journey of preparation.")
        await aboutme.deployed();

        expect(await aboutme.getName()).to.equal("Ali Qumail");
        expect(await aboutme.getCountry()).to.equal("Pakistan");
        expect(await aboutme.getBio()).to.equal("Student and a Software Engineer, learning solidity these days.");
        expect(await aboutme.getQuote()).to.equal("The journey of success begins with the journey of preparation.");
   


    })

    it("should return the new value when changed", async function(){
        const Aboutme = await ethers.getContractFactory('AboutMe');
        const aboutme = await Aboutme.deploy("Ali Qumail","Pakistan","Student and a Software Engineer, learning solidity these days.","The journey of success begins with the journey of preparation.")
        await aboutme.deployed();

        const newBio = aboutme.setBio("Interested in blockchain and smart contract");
        expect(await aboutme.getBio()).to.equal("Interested in blockchain and smart contract");
   


    })
});