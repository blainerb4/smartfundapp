'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0; /*import Web3 from 'web3';
                   
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

var ethEnabled = function ethEnabled() {
    if (typeof window !== 'undefined') {
        if (window.ethereum) {
            window.web3 = new _web2.default(window.ethereum);
            web3 = window.web3;
            window.ethereum.enable();
            return true;
        }
        return false;
    } else {
        var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/776a65755c5b4584874ff4780b58951e');
        web3 = new _web2.default(provider);
    }
};
ethEnabled();

exports.default = web3;

//ref: https://medium.com/@awantoch/how-to-connect-web3-js-to-metamask-in-2020-fee2b2edf58a
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJldGhFbmFibGVkIiwid2luZG93IiwiZXRoZXJldW0iLCJlbmFibGUiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBZ0NBLEFBQU87Ozs7OztBQUVQLElBQUksWUFBSixHQWxDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQ0EsSUFBTSxhQUFhLFNBQWIsQUFBYSxhQUFNLEFBQ3JCO1FBQUksT0FBQSxBQUFPLFdBQVgsQUFBc0IsYUFBWSxBQUM5QjtZQUFJLE9BQUosQUFBVyxVQUFVLEFBQ3JCO21CQUFBLEFBQU8sT0FBTyxBQUFJLGtCQUFLLE9BQXZCLEFBQWMsQUFBZ0IsQUFDOUI7bUJBQU8sT0FBUCxBQUFjLEFBQ2Q7bUJBQUEsQUFBTyxTQUFQLEFBQWdCLEFBQ2hCO21CQUFBLEFBQU8sQUFDTjtBQUNEO2VBQUEsQUFBTyxBQUNWO0FBUkQsV0FRTyxBQUNIO1lBQU0sV0FBVyxJQUFJLGNBQUEsQUFBSyxVQUFULEFBQW1CLGFBQXBDLEFBQWlCLEFBQ2pCLEFBRUE7ZUFBTyxBQUFJLGtCQUFYLEFBQU8sQUFBUyxBQUNuQjtBQUNKO0FBZkQ7QUFnQkEsQUFFQTs7a0JBQUEsQUFBZTs7QUFFZiIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0aGV3aGFycmlzb24vRGVza3RvcC9raWNrc3RhcnQtYXBwIn0=