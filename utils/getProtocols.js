// Get all protocols from Scrape Data without Duplicates
// Store an array in listOfProtocols.js

const fs = require('fs-extra');
let utils = require('./saveFileFunction')
const scrapeData = require('../scraper_output/fees_10012022')

let getProtocols = [];

scrapeData.forEach( (day) => {
    if ( getProtocols.indexOf( day[1] ) >= 0 ) {      
    } else {
        getProtocols.push( day[1] );
    }
})

const listOfProtocols = 'module.exports = ' + JSON.stringify( getProtocols );
console.log( listOfProtocols );

const filePath = './listOfProtocols.js';
utils.saveFile(filePath, listOfProtocols);