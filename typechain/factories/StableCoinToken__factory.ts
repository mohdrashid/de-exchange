/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  StableCoinToken,
  StableCoinTokenInterface,
} from "../StableCoinToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
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
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
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
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200226538038062002265833981810160405281019062000037919062000285565b818181600390805190602001906200005192919062000163565b5080600490805190602001906200006a92919062000163565b5050506200008d620000816200009560201b60201c565b6200009d60201b60201c565b505062000429565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b828054620001719062000395565b90600052602060002090601f016020900481019282620001955760008555620001e1565b82601f10620001b057805160ff1916838001178555620001e1565b82800160010185558215620001e1579182015b82811115620001e0578251825591602001919060010190620001c3565b5b509050620001f09190620001f4565b5090565b5b808211156200020f576000816000905550600101620001f5565b5090565b60006200022a62000224846200032c565b620002f8565b9050828152602081018484840111156200024357600080fd5b620002508482856200035f565b509392505050565b600082601f8301126200026a57600080fd5b81516200027c84826020860162000213565b91505092915050565b600080604083850312156200029957600080fd5b600083015167ffffffffffffffff811115620002b457600080fd5b620002c28582860162000258565b925050602083015167ffffffffffffffff811115620002e057600080fd5b620002ee8582860162000258565b9150509250929050565b6000604051905081810181811067ffffffffffffffff82111715620003225762000321620003fa565b5b8060405250919050565b600067ffffffffffffffff8211156200034a5762000349620003fa565b5b601f19601f8301169050602081019050919050565b60005b838110156200037f57808201518184015260208101905062000362565b838111156200038f576000848401525b50505050565b60006002820490506001821680620003ae57607f821691505b60208210811415620003c557620003c4620003cb565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611e2c80620004396000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063715018a611610097578063a457c2d711610066578063a457c2d7146102c5578063a9059cbb146102f5578063dd62ed3e14610325578063f2fde38b1461035557610100565b8063715018a61461024f5780638da5cb5b1461025957806395d89b41146102775780639dc29fac1461029557610100565b8063313ce567116100d3578063313ce567146101a157806339509351146101bf57806340c10f19146101ef57806370a082311461021f57610100565b806306fdde0314610105578063095ea7b31461012357806318160ddd1461015357806323b872dd14610171575b600080fd5b61010d610371565b60405161011a91906119e3565b60405180910390f35b61013d60048036038101906101389190611480565b610403565b60405161014a91906119c8565b60405180910390f35b61015b610421565b6040516101689190611bc3565b60405180910390f35b61018b60048036038101906101869190611431565b61042b565b60405161019891906119c8565b60405180910390f35b6101a961054a565b6040516101b69190611bde565b60405180910390f35b6101d960048036038101906101d49190611480565b610553565b6040516101e691906119c8565b60405180910390f35b61020960048036038101906102049190611480565b6105ff565b60405161021691906119c8565b60405180910390f35b610239600480360381019061023491906113cc565b610655565b6040516102469190611bc3565b60405180910390f35b61025761069d565b005b610261610725565b60405161026e91906119ad565b60405180910390f35b61027f61074f565b60405161028c91906119e3565b60405180910390f35b6102af60048036038101906102aa9190611480565b6107e1565b6040516102bc91906119c8565b60405180910390f35b6102df60048036038101906102da9190611480565b6107f7565b6040516102ec91906119c8565b60405180910390f35b61030f600480360381019061030a9190611480565b6108e2565b60405161031c91906119c8565b60405180910390f35b61033f600480360381019061033a91906113f5565b610900565b60405161034c9190611bc3565b60405180910390f35b61036f600480360381019061036a91906113cc565b610987565b005b60606003805461038090611d27565b80601f01602080910402602001604051908101604052809291908181526020018280546103ac90611d27565b80156103f95780601f106103ce576101008083540402835291602001916103f9565b820191906000526020600020905b8154815290600101906020018083116103dc57829003601f168201915b5050505050905090565b6000610417610410610a7f565b8484610a87565b6001905092915050565b6000600254905090565b600080600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000610477610a7f565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610533578281101561051e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161051590611ae3565b60405180910390fd5b6105328561052a610a7f565b858403610a87565b5b61053e858585610c52565b60019150509392505050565b60006012905090565b60006105f5610560610a7f565b84846001600061056e610a7f565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546105f09190611c15565b610a87565b6001905092915050565b60006106416040518060400160405280601481526020017f53656e64657220616464726573732025732025730000000000000000000000008152508484610ed3565b61064b8383610f72565b6001905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6106a5610a7f565b73ffffffffffffffffffffffffffffffffffffffff166106c3610725565b73ffffffffffffffffffffffffffffffffffffffff1614610719576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161071090611b03565b60405180910390fd5b61072360006110d2565b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606004805461075e90611d27565b80601f016020809104026020016040519081016040528092919081815260200182805461078a90611d27565b80156107d75780601f106107ac576101008083540402835291602001916107d7565b820191906000526020600020905b8154815290600101906020018083116107ba57829003601f168201915b5050505050905090565b60006107ed8383611198565b6001905092915050565b60008060016000610806610a7f565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050828110156108c3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ba90611b83565b60405180910390fd5b6108d76108ce610a7f565b85858403610a87565b600191505092915050565b60006108f66108ef610a7f565b8484610c52565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b61098f610a7f565b73ffffffffffffffffffffffffffffffffffffffff166109ad610725565b73ffffffffffffffffffffffffffffffffffffffff1614610a03576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109fa90611b03565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610a73576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a6a90611a83565b60405180910390fd5b610a7c816110d2565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610af7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aee90611b63565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b67576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5e90611aa3565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610c459190611bc3565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610cc2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cb990611b43565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d32576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d2990611a43565b60405180910390fd5b610d3d83838361136f565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610dc3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dba90611ac3565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e569190611c15565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610eba9190611bc3565b60405180910390a3610ecd848484611374565b50505050565b610f6d838383604051602401610eeb93929190611a05565b6040516020818303038152906040527f07c81217000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611379565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610fe2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fd990611ba3565b60405180910390fd5b610fee6000838361136f565b80600260008282546110009190611c15565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546110559190611c15565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516110ba9190611bc3565b60405180910390a36110ce60008383611374565b5050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611208576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111ff90611b23565b60405180910390fd5b6112148260008361136f565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561129a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161129190611a63565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600260008282546112f19190611c6b565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516113569190611bc3565b60405180910390a361136a83600084611374565b505050565b505050565b505050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b6000813590506113b181611dc8565b92915050565b6000813590506113c681611ddf565b92915050565b6000602082840312156113de57600080fd5b60006113ec848285016113a2565b91505092915050565b6000806040838503121561140857600080fd5b6000611416858286016113a2565b9250506020611427858286016113a2565b9150509250929050565b60008060006060848603121561144657600080fd5b6000611454868287016113a2565b9350506020611465868287016113a2565b9250506040611476868287016113b7565b9150509250925092565b6000806040838503121561149357600080fd5b60006114a1858286016113a2565b92505060206114b2858286016113b7565b9150509250929050565b6114c581611c9f565b82525050565b6114d481611cb1565b82525050565b60006114e582611bf9565b6114ef8185611c04565b93506114ff818560208601611cf4565b61150881611db7565b840191505092915050565b6000611520602383611c04565b91507f45524332303a207472616e7366657220746f20746865207a65726f206164647260008301527f65737300000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611586602283611c04565b91507f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008301527f63650000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006115ec602683611c04565b91507f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008301527f64647265737300000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611652602283611c04565b91507f45524332303a20617070726f766520746f20746865207a65726f20616464726560008301527f73730000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006116b8602683611c04565b91507f45524332303a207472616e7366657220616d6f756e742065786365656473206260008301527f616c616e636500000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061171e602883611c04565b91507f45524332303a207472616e7366657220616d6f756e742065786365656473206160008301527f6c6c6f77616e63650000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611784602083611c04565b91507f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726000830152602082019050919050565b60006117c4602183611c04565b91507f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008301527f73000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061182a602583611c04565b91507f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008301527f64726573730000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611890602483611c04565b91507f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008301527f72657373000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006118f6602583611c04565b91507f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008301527f207a65726f0000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061195c601f83611c04565b91507f45524332303a206d696e7420746f20746865207a65726f2061646472657373006000830152602082019050919050565b61199881611cdd565b82525050565b6119a781611ce7565b82525050565b60006020820190506119c260008301846114bc565b92915050565b60006020820190506119dd60008301846114cb565b92915050565b600060208201905081810360008301526119fd81846114da565b905092915050565b60006060820190508181036000830152611a1f81866114da565b9050611a2e60208301856114bc565b611a3b604083018461198f565b949350505050565b60006020820190508181036000830152611a5c81611513565b9050919050565b60006020820190508181036000830152611a7c81611579565b9050919050565b60006020820190508181036000830152611a9c816115df565b9050919050565b60006020820190508181036000830152611abc81611645565b9050919050565b60006020820190508181036000830152611adc816116ab565b9050919050565b60006020820190508181036000830152611afc81611711565b9050919050565b60006020820190508181036000830152611b1c81611777565b9050919050565b60006020820190508181036000830152611b3c816117b7565b9050919050565b60006020820190508181036000830152611b5c8161181d565b9050919050565b60006020820190508181036000830152611b7c81611883565b9050919050565b60006020820190508181036000830152611b9c816118e9565b9050919050565b60006020820190508181036000830152611bbc8161194f565b9050919050565b6000602082019050611bd8600083018461198f565b92915050565b6000602082019050611bf3600083018461199e565b92915050565b600081519050919050565b600082825260208201905092915050565b6000611c2082611cdd565b9150611c2b83611cdd565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611c6057611c5f611d59565b5b828201905092915050565b6000611c7682611cdd565b9150611c8183611cdd565b925082821015611c9457611c93611d59565b5b828203905092915050565b6000611caa82611cbd565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015611d12578082015181840152602081019050611cf7565b83811115611d21576000848401525b50505050565b60006002820490506001821680611d3f57607f821691505b60208210811415611d5357611d52611d88565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b611dd181611c9f565b8114611ddc57600080fd5b50565b611de881611cdd565b8114611df357600080fd5b5056fea264697066735822122035a6a191049a61c589f14d6deba9be0b721cf29d7a667e17693078dd506f61da64736f6c63430008000033";

export class StableCoinToken__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _name: string,
    _symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<StableCoinToken> {
    return super.deploy(_name, _symbol, overrides || {}) as Promise<
      StableCoinToken
    >;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_name, _symbol, overrides || {});
  }
  attach(address: string): StableCoinToken {
    return super.attach(address) as StableCoinToken;
  }
  connect(signer: Signer): StableCoinToken__factory {
    return super.connect(signer) as StableCoinToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StableCoinTokenInterface {
    return new utils.Interface(_abi) as StableCoinTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StableCoinToken {
    return new Contract(address, _abi, signerOrProvider) as StableCoinToken;
  }
}