import Name from "./components/Name";
import Country from "./components/Country";
import Bio from "./components/Bio";
import Quote from "./components/Quote";
import EditProfileBtn from "./components/EditProfileBtn";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

function App() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [quote, setQuote] = useState("");
  const [country, setCountry] = useState("");

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const ABI = [
    {
      inputs: [
        {
          internalType: "string",
          name: "_name",
          type: "string",
        },
        {
          internalType: "string",
          name: "_country",
          type: "string",
        },
        {
          internalType: "string",
          name: "_bio",
          type: "string",
        },
        {
          internalType: "string",
          name: "_quote",
          type: "string",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [],
      name: "getBio",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getCountry",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getName",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getQuote",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_bio",
          type: "string",
        },
      ],
      name: "setBio",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_country",
          type: "string",
        },
      ],
      name: "setCountry",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_name",
          type: "string",
        },
      ],
      name: "setName",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_quote",
          type: "string",
        },
      ],
      name: "setQuote",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];

  const contract = new ethers.Contract(contractAddress, ABI, signer);

  const requestAccounts = async () => {
    await provider.send("eth_requestAccounts", []);
  };

  const getName = async () => {
    const _name = await contract.getName();
    setName(_name);
  };
  const getBio = async () => {
    const _bio = await contract.getBio();
    setBio(_bio);
  };
  const getQuote = async () => {
    const _quote = await contract.getQuote();
    setQuote(_quote);
  };
  const getCountry = async () => {
    const _country = await contract.getCountry();
    setCountry(_country);
  };

  useEffect(() => {
    requestAccounts();
    getName();
    getCountry();
    getBio();
    getQuote();
  });

  return (
    <div className="container">
      <div className="row w-75  m-auto">
        <div className="text-center mt-5 mb-5">
          <EditProfileBtn
            contract={contract}
            name={name}
            bio={bio}
            quote={quote}
            country={country}
          />
        </div>
      </div>
      <div className="row w-75  m-auto">
        <Name name={name} />
        <Country country={country} />
        <Bio bio={bio} />
        <Quote quote={quote} />
      </div>
      
    </div>
  );
}

export default App;
