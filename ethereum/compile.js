const path = require('path');
const solc =  require('solc')
const fs = require('fs-extra');//file system(access fs on computer)

const buildPath =  path.resolve(__dirname, 'build'); //nned to remove build directory
fs.removeSync(buildPath); //remove build folder

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');// contents of campaign file
const output = solc.compile(source, 1).contracts;//compile wht we pulled out

fs.ensureDirSync(buildPath); //create build folder

for (let contract in output) {
    fs.outputJsonSync(
        path.resolve(buildPath, contract.replace(':', '') + '.json'),
        output[contract]
    );
}
//for loop interating over campaign and campaign factory