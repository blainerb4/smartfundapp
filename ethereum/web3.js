/*import Web3 from 'web3';

let web3;
// we use typeof  operator to see if variable is undefined
// in browser window = 'object'

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    //we are in the browser and metamask is running.
    //if window and window.web3 is not equal to undefined.
    web3 = new Web3(window.web3.currentProvider); //creatw own copy of web3 and assign it to this variable
} else {
    //we are on the server OR the user is not running metamask.
    //set up own provider that connects to rinkbey test network that works through infura
    const provider = new Web3.providers.HttpProvider(
        //pass in url of infura node,infura(portal to access ethereum entowke)
        'https://rinkeby.infura.io/v3/776a65755c5b4584874ff4780b58951e'
    );
    web3 = new Web3(provider);
};

//const getProvider = async() => {
//    await window.web3.currentProvider.enable(); // request authentication
//}

export default web3;

//gonna assume user has metamask in present state

//const web3 = new Web3()(window.web3.currentProvider);

*/

import Web3 from 'web3';
 
let web3;
 
const ethEnabled = () => {
    if (typeof window !== 'undefined'){
        if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        web3 = window.web3
        window.ethereum.enable();
        return true;
        }
        return false;
    } else {
        const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/776a65755c5b4584874ff4780b58951e'
            );
        web3 = new Web3(provider);
    }
}
ethEnabled()
 
export default web3;

//ref: https://medium.com/@awantoch/how-to-connect-web3-js-to-metamask-in-2020-fee2b2edf58a