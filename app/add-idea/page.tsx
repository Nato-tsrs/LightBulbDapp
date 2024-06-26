"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
// import web3 from '../api/web_3'
// import ideaMarketplace from '../api/contract'
import Web3, { Contract } from 'web3';
const  Add=() =>{
const getWeb3 = async () => { // Make the function async
  const ganacheUrl = "http://127.0.0.1:7545";
  const provider = new Web3.providers.HttpProvider(ganacheUrl);
  const web3 = new Web3(provider);
  return web3; // Return the entire Web3 instance
};
const contractAddress = '0x29154EE453B86605C6134E4fD6C3308779AEecae';
const abi =[
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "ideas",
      "outputs": [
        {
          "name": "submitter",
          "type": "address"
        },
        {
          "name": "owner",
          "type": "uint256"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "isPrivate",
          "type": "bool"
        },
        {
          "name": "votes",
          "type": "uint256"
        },
        {
          "name": "hasNDA",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "nextIdeaId",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "tokens",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "TokensAwarded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "ideaId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "submitter",
          "type": "address"
        }
      ],
      "name": "IdeaSubmitted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "ideaId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "submitter",
          "type": "uint256"
        }
      ],
      "name": "IdeaSubmittedByID",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "ideaId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "company",
          "type": "address"
        }
      ],
      "name": "IdeaClaimed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "ideaId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "voter",
          "type": "address"
        }
      ],
      "name": "Voted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "ideaId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "company",
          "type": "address"
        }
      ],
      "name": "NDASigned",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "isPrivate",
          "type": "bool"
        }
      ],
      "name": "submitIdea",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "ownerId",
          "type": "uint256"
        },
        {
          "name": "ideaId",
          "type": "uint256"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "isPrivate",
          "type": "bool"
        }
      ],
      "name": "submitIdeaWithId",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "ideaId",
          "type": "uint256"
        }
      ],
      "name": "claimIdea",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "ideaId",
          "type": "uint256"
        }
      ],
      "name": "voteForIdea",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "ideaId",
          "type": "uint256"
        }
      ],
      "name": "signNDA",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "user",
          "type": "address"
        },
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "awardTokens",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "ideaId",
          "type": "uint256"
        }
      ],
      "name": "getIdeaOwner",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ];
var ideaMarketplace: Contract<({ constant: boolean; inputs: { name: string; type: string; }[]; name: string; outputs: { name: string; type: string; }[]; payable: boolean; stateMutability: string; type: string; anonymous?: undefined; } | { inputs: never[]; payable: boolean; stateMutability: string; type: string; constant?: undefined; name?: undefined; outputs?: undefined; anonymous?: undefined; } | { anonymous: boolean; inputs: { indexed: boolean; name: string; type: string; }[]; name: string; type: string; constant?: undefined; outputs?: undefined; payable?: undefined; stateMutability?: undefined; })[]> | undefined=undefined;
(async () => {
  const web3 = await getWeb3(); // Call getWeb3 to get the Web3 instance
   ideaMarketplace = new web3.eth.Contract(abi, contractAddress,{ gasLimit: "3000000" });
})(); 

    const submitIdeaWithId = async (ownerId: any, ideaId: any, description: any, isPrivate: any) => {
        // const accounts = await web3.eth.getAccounts();
   
        const owner = "0xEe6472Ccf45c0a2D69C598b4BA7eDbBb99F90df7"; 
        try {
            console.log(ideaMarketplace)
          const tx = await ideaMarketplace?.methods
            .submitIdeaWithId(ownerId, ideaId, description, isPrivate)
            .send({ from: owner });
            
          console.log('Idea submitted successfully:', tx?.transactionHash);
        } catch (error) {
          console.error('Error submitting idea:', error);
        }
      };
      const getIdeaOwner = async (ideaId:any) => {
        try {
          const owner = await ideaMarketplace?.methods.getIdeaOwner(ideaId).call();
          console.log('Idea owner:', owner);
          return owner;
        } catch (error) {
          console.error('Error getting idea owner:', error);
          return null;
        }
      };
  return (
  <>
  <button onClick={()=>{submitIdeaWithId(1, 1, 'My awesome idea!', false)}}>submit idea</button>
  <button onClick={()=>{getIdeaOwner(1)}}>get idea owner</button>
  </>
  );
}

export default Add;