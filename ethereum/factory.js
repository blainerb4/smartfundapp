import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xf15c12E44cebFd94319c5f0CE9B590c748551EA8'
);

export default instance;