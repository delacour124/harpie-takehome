import { ethers } from 'ethers';

// ConnectButton that opens up MetaMask and allows you to connect your MetaMask wallet to your page
export const ConnectButton = () => {
  // connect to MetaMask
  const connect = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
  }
  
  return (
    <button id='connectButton' onClick={connect}>Connect Wallet</button>
  )
}