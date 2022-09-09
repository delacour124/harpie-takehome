import './App.css';
import { ethers } from 'ethers';
import { ConnectButton } from './ConnectButton';
import { ContractButton } from './ContractButton';



function App() {
  
  // const connect = async () => {
  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   // await provider.send('eth_requestAccounts', []);
  //   const signer = provider.getSigner(); // use signer to send eth
  // }
  
  
  return (
    <div className='buttons'>
      <ConnectButton />
      <ContractButton />
    </div>
  );
}

export default App;
