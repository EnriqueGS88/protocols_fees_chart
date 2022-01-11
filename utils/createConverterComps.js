const fs = require('fs-extra');
const utils = require('./saveFileFunction');
const protocols = require('./listOfProtocols');
const { saveFile } = require('./saveFileFunction');

// Build jsonOutput that stores the re-arranged scraped data
let jsonOuput = protocols.map( e => {
    let string = `"${e}Data": []`;
    return string;
});

let stringJsonOutput =  JSON.stringify(jsonOuput);
let filePathJsonOutput = './jsonConverter/compJSONoutput.js';
utils.saveFile(filePathJsonOutput, stringJsonOutput);

// Build list of Functions
let buildingFunctions = protocols.map( e => {
    let string = `let ${e}Push = ( obj ) => {jsonOutput.${e}Data.push( obj )}`;
    return string
})

let listOfFunctions = JSON.stringify(buildingFunctions)
let filePathFunctions = './jsonConverter/compFunctions.js';
saveFile(filePathFunctions, listOfFunctions)

// Build Array that stores the Functions created above
let seriesOfFunctions = protocols.map( e => {
    let string = `${e}Push`
    return string
})

let arrayOfFunctions = JSON.stringify(seriesOfFunctions);
let filePathArrayOfFunctions = './jsonConverter/compArrayOfFunctions.js';
saveFile(filePathArrayOfFunctions, arrayOfFunctions)