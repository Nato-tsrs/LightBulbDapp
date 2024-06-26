"use client";
import React, { useEffect, useState } from "react";
import background1 from "@/public/design/packground2.svg";
import logo from "@/public/design/logo.svg";
import Image from "next/image";
import button1 from "@/public/design/registration/register1.png";
import image1 from "@/public/design/mainPage/image1.png";
import image2 from "@/public/design/mainPage/image2.png";
import headerButton1 from "@/public/design/mainPage/header-button1.png";
import headerButton2 from "@/public/design/mainPage/header-button2.png";
import left1 from "@/public/design/mainPage/left1.svg";
import left2 from "@/public/design/mainPage/left2.svg";
import left3 from "@/public/design/mainPage/left3.svg";
import etherium from "@/public/design/mainPage/etherium.svg";
import view from "@/public/design/mainPage/view.png";
import pavle from "@/public/design/mainPage/pavlee.jpg";
import decor from "@/public/design/decor.svg";
import logout from "@/public/design/mainPage/logout.svg";
import Link from "next/link";
import claim from "@/public/design/registration/claim.svg"
import house from "@/public/design/registration/house.svg"
import Web3, { Contract } from 'web3';
const DetailsComponent = ({ idea, getOwner }: any) => {
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

    <div
      className="w-full h-[125vh] overflow-hidden px-[22px]"
      style={{
        backgroundImage: `url(${background1.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
      }}
    >
      <Image
        src={decor}
        alt=""
        width="300"
        className="absolute right-[100px] top-[100px]"
      />
      <div className=" flex items-center justify-between h-[100px] pr-[50px]">
        <div className="flex items-center h-full">
          {" "}
          <Image src={logo} alt="logo" />
          <a href="/main"><Image src={house} className="mt-[25px]" alt="" width="59" /></a>
          <Image
            src={headerButton1}
            className="mt-[25px] w-[160px] h-[45px] ml-[70px]"
            alt=""
          />
          <Image
            src={headerButton2}
            className="mt-[25px] w-[160px] h-[45px] ml-[25px]"
            alt=""
          />
        </div>
        <div className="flex items-center">
          <Image src={pavle} width="50" alt="" className="rounded-[25px] " />
          <Image src={logout} width="50" alt="" className="ml-[20px]" />
        </div>
      </div>
      <div className="flex p-[50px] ">
        <div className="flex flex-col items-center">
        <img
          src={idea?.authorsImage}
          className="w-[150px] h-[150px] rounded-[80px]"
          alt=""
        />
        <p className="text-white mt-[20px] mb-[10px]">@{idea?.userName}</p>
        <div className="flex flex-col items-center w-[50px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="34"
            viewBox="0 0 36 34"
            fill="none"
          >
            <path d="M18 0L35.3205 33.75H0.679491L18 0Z" fill="#D9D9D9" />
          </svg>
          <p className="text-white mb-[5px] text-[25px] mt-[5px]">
            {idea?.rating}
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="34"
            viewBox="0 0 36 34"
            fill="none"
          >
            <path d="M18 34L35.3205 0.25H0.679491L18 34Z" fill="#D9D9D9" />
          </svg>
        </div>
        </div>
        {/* detials */}
        <div className="ml-[50px] w-[50%]  backdrop-blur-[2px] mt-[70px] p-[20px] bg-rgba(255, 255, 255, 0.17)">
            <h1 className="text-white font-[600] text-[28px]  mb-[50px]">
                {idea?.ideaName}
            </h1>
            <p className="">
                {idea.ideaDescription}
            </p>
            <div className=" mt-[50px] flex justify-center">
                    <div>
                    <p className="text-[23px] flex items-center text-white ">
                      price: {idea.price}{" "}
                      <Image src={etherium} className="ml-[10px]" alt="" />
                    </p>
                    <p>{idea?.price=="0.01 ETH"?"Premium Subscription":(idea.price=="0.005 ETH"?"Featured Subscription":"Basic Subscription")}</p>
                   
                    </div>
                    <Image src={claim} alt="" className="ml-[20px] "/>
                  </div>
        </div>
        
        <div> 
        
        </div>
      </div>
    </div>
  );
};

export default DetailsComponent;
