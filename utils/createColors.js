// Generate the component that defines the colors on the convertArrayToJSON.js

const file = require('fs-extra/lib/ensure/file');
const protocols = require('./listOfProtocols');
const { saveFile } = require('./saveFileFunction');
const utils = require('./saveFileFunction');

let colors = [];

protocols.forEach( e => {
    let text = "const "+ e + "Color" + " = 'rgb(215, 31, 126)'";
    colors.push(text);
})

let stringOfColors = JSON.stringify(colors);

let filePath = './compSeriesColors.js'

saveFile(filePath, stringOfColors)

console.log(stringOfColors)