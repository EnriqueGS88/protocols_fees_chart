// Files Dependencies:
// 1) scraper_output fees data
// 2) listOfProtocols
const protocols = require('./utils/listOfProtocols');
const fs = require('fs-extra');
const utils = require('./utils/saveFileFunction');

let jsonOuput = protocols.map( e => {
    let string = `"${e}Data": []`;
    return string;
});

// let stringJsonOutput = 'let jsonOutput = {' + JSON.stringify(jsonOuput) + ' };';
let stringJsonOutput =  JSON.stringify(jsonOuput);
console.log(stringJsonOutput)
let filePath = './utils/jsonConverter.js';

utils.saveFile(filePath, stringJsonOutput);