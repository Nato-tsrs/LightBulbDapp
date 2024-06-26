import Web3 from 'web3';

const getWeb3 = () => {
  //Ganache provider URL (usually "http://127.0.0.1:7545")
  const ganacheUrl="http://127.0.0.1:7545"
  const provider = new Web3.providers.HttpProvider(ganacheUrl);
  return new Web3(provider);
};

export default getWeb3;