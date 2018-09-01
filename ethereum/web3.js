import Web3 from "web3";
// const web3 = new Web3(window.web3.currentProvider);
let web3;
if (typeof window !== "undefined" && typeof window.web3 !== undefined) {
  //in browser and metamask is running
  web3 = new Web3(window.web3.currentProvider);
} else {
  // we are on browser or user not runnning in metamask
  const provider = new Web3.providers.WebsocketProvider(
    "https://rinkeby.infura.io/v3/14e31b849d7b42c18cc6b9da3c9980f0"
  );
  web3 = new Web3(provider);
  web3.setProvider(
    "https://rinkeby.infura.io/v3/14e31b849d7b42c18cc6b9da3c9980f0"
  );
}

export default web3;
