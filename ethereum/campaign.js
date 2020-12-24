import web3 from './web3';
import Campaign from './build/Campaign.json';

export default (address) => {
    return new web3.eth.Contract(
        JSON.parse(Campaign.interface),
        address
    );
};

//if we pass address into function we will get a setup contract that will work with camapign