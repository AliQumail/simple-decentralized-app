// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
// Import this file to use console.log
import "hardhat/console.sol";

contract AboutMe {

    string private name;
    string private bio;
    string private country;
    string private quote;

    constructor(string memory _name, string memory _country,  string memory _bio, string memory _quote){
        name = _name;
        country = _country;
        bio = _bio;
        quote = _quote;
    }

    function getName() public view returns (string memory){
        return name;
    }
    function getCountry() public view returns (string memory){
        return country;
    }
    function getBio() public view returns (string memory){
        return bio;
    }
    function getQuote() public view returns (string memory){
        return quote;
    }
    function setName(string memory _name) public {
        name = _name;
    }
    function setCountry(string memory _country) public {
        country = _country;
    }
    function setBio(string memory _bio) public {
        bio = _bio;
    }
    function setQuote(string memory _quote) public {
        quote = _quote;
    }

}