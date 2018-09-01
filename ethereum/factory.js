import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";
const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xe7A2fC6852658C9bCD38be4eB130EF318bAD5b61"
);
export default instance;
