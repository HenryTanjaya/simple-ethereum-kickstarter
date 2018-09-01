const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  "mention output flavor differ yellow tone snow list eight clean weasel true",
  "https://rinkeby.infura.io/v3/14e31b849d7b42c18cc6b9da3c9980f0"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const fetchedAccounts = await web3.eth.getAccounts();
  console.log(fetchedAccounts);
  console.log("attempting to deploy from account", fetchedAccounts[0]);
  console.log(compiledFactory.interface);
  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({
      data: "0x"+compiledFactory.bytecode,
    })
    .send({ from: fetchedAccounts[0] });
  console.log("address", result.options.address);
};

deploy();
//inbox
//1st:0xCb7e747eA565b05cE957C9D342f933548e2B6f43
//2nd:0x31883E2Df6C82A6783f83E1f73628E9B87810DE2
//3rd:0x55374E1581c8BdBBe08E661528E0496d95b48e85
//4rd:0x1C38cb1DB8BDD5D9027474978874400ec62B54CF
