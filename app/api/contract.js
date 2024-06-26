import Web3 from 'web3';

const getWeb3 = async () => { // Make the function async
  const ganacheUrl = "http://127.0.0.1:7545";
  const provider = new Web3.providers.HttpProvider(ganacheUrl);
  const web3 = new Web3(provider);
  return web3; // Return the entire Web3 instance
};

const contractAddress = '0x27CBDD92A12e3c83320B4536694131B1242BEecA';
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
          "type": "address"
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
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ];
var ideaMarketplace=undefined;
(async () => {
  const web3 = await getWeb3(); // Call getWeb3 to get the Web3 instance
   ideaMarketplace = new web3.eth.Contract(abi, contractAddress);
alert(ideaMarketplace)
})(); // Wrap everything in an IIFE
export default ideaMarketplace;