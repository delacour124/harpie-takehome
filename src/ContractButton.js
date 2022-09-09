import { ethers } from 'ethers';

const CONTRACT_ADDRESS = '0xBA62BCfcAaFc6622853cca2BE6Ac7d845BC0f2Dc';
const ABI_ADDRESS = 'http://api-goerli.etherscan.io/api?module=contract&action=getabi&address=0xba62bcfcaafc6622853cca2be6ac7d845bc0f2dc&format=raw';


// ContractButton that calls the approve method upon a smart contract, on the behalf of the connected wallet
export const ContractButton = () => {
  
  const getContract = async () => {
    // get abi
    const fetchAbi = async () => {
      const response = await fetch(ABI_ADDRESS);
      const data = await response.json();
      return data;
    }
    const abi = await fetchAbi();
    
    // get Signer
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
  
    // creat contract
    const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);
  
    // call approve method
    const wallet_address = await signer.getAddress();
    contract.approve(wallet_address, 0);
  }

  return (
    <button id='contractButton' onClick={getContract}>Sign Contract</button>
  )
}