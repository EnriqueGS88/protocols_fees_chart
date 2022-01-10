// Convert Array of scraped data into a JSON and save it to a File
const scrapeData = require( './scraper_output/fees_10012022' );
const protocols = require('./utils/listOfProtocols');
const fs = require('fs-extra');
const utils = require('./utils/saveFileFunction');

let jsonOutput = {
    "ethereumData": [],
    "uniswapData": [],
    "binance_Smart_ChainData": [],
    "sushiswapData": [],
    "aaveData": [],
    "bitcoinData": [],
    "trader_JoeData": [],
    "compoundData": [],
    "balancerData": [],
    "terraswapData": [],
    "makerDAOData": [],
    "avalancheData": [],
    "abracadabra_moneyData": [],
    "spookyswapData": [],
    "quickswapData": [],
};

// List of Functions to be called according to the type of data being scraped

let ethereumPush = ( obj ) => {
    jsonOutput.ethereumData.push( obj );
}

let uniswapPush = ( obj ) => {
    jsonOutput.uniswapData.push( obj );
}

let binanceSmartChainPush = ( obj ) => {
    jsonOutput.binance_Smart_ChainData.push( obj );
}

let sushiswapPush = ( obj ) => {
    jsonOutput.sushiswapData.push( obj );
}

let aavePush = ( obj ) => {
    jsonOutput.aaveData.push( obj );
}

let bitcoinPush = ( obj ) => {
    jsonOutput.bitcoinData.push( obj );
}

let trader_JoePush = ( obj ) => {
    jsonOutput.trader_JoeData.push( obj );
}

let compoundPush = ( obj ) => {
    jsonOutput.compoundData.push( obj );
}

let balancerPush = ( obj ) => {
    jsonOutput.balancerData.push( obj );
}

let terraswapPush = ( obj ) => {
    jsonOutput.terraswapData.push( obj );
}

let makerDAOPush = ( obj ) => {
    jsonOutput.makerDAOData.push( obj );
}

let avalanchePush = ( obj ) => {
    jsonOutput.avalancheData.push( obj );
}

let abracadabra_moneyPush = ( obj ) => {
    jsonOutput.abracadabra_moneyData.push( obj );
}

let spookyswapPush = ( obj ) => {
    jsonOutput.spookyswapData.push( obj );
}

let quickswapPush = ( obj ) => {
    jsonOutput.quickswapData.push( obj );
}


// Array that stores the functions that will be called
const arrayOfFunctions = [
    ethereumPush,
    uniswapPush,
    binanceSmartChainPush,
    trader_JoePush,
    aavePush,
    sushiswapPush,
    compoundPush,
    bitcoinPush,
    balancerPush,
    terraswapPush,
    makerDAOPush,
    avalanchePush,
    abracadabra_moneyPush,
    spookyswapPush,
    quickswapPush,
];

// Main function that calls the other functions in the Array
// It maps the scraped data to the corresponding array within the jsonOutput object
let mapProtocolToJSON = (data, row ) => {

    let object = { "date": data[row][0], "fee": Number( data[row][2] ) };
    let thisProtocol = data[row][1];
    let protocolIndex = protocols.indexOf( thisProtocol );

    let funcFromArray = arrayOfFunctions[protocolIndex];
    funcFromArray( object )

}

// Loop to evaluate each position in the scrapeData
for ( let r = 0; r < scrapeData.length ; r++ ) {
    mapProtocolToJSON( scrapeData, r );
}

// console.log( jsonOutput );

const jsonFile = 'module.exports = ' + JSON.stringify(jsonOutput);
console.log(jsonFile)

// async function saveFile(f, d) {

//     try {
//         await fs.outputFile(f, d);
//         const data = await fs.readFile(d, 'utf8');
//         console.log(data);
//     } catch(e) {
//         console.error(e);
//     }


// }

const filePath = './chartJS_input/jsonFile.js'

utils.saveFile(filePath, jsonFile);










