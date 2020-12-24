const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
    'sudden define shrug race auction guitar enough bronze version swap reunion stable',
    'https://rinkeby.infura.io/v3/776a65755c5b4584874ff4780b58951e'
);
//account mnemonic (allows us to derive public and private key from metamask)-12 phrase
//we used web3 to send ether deploy contracts etc
const web3 = new Web3(provider);

const deploy = async() => {
    const accounts = await web3.eth.getAccounts();

    console.log('attempting to deploy from account', accounts[0]);

   //     const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
   //     .deploy({data: '0x' + compiledFactory.bytecode})
   //     .send({ from: accounts[0] });
   const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '9000000', from: accounts[0] });
        
    console.log('Contract deployed to', result.options.address);
};

deploy();