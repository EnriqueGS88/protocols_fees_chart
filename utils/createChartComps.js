// Generate components to assemble the script.js for ChartJS
const protocols = require('./listOfProtocols');
const utils = require('./saveFileFunction');

// Build component to map all dataseries with their colors
let buildMapping = e => {
    let label = "label: '" + e + "' ,";
    let background = "backgroundColor: " + e + "Color" + ", ";
    let border = "borderColor: " + e + "Color" + ", ";
    let fill = "fill: false, ";
    let data = "data: data" + e + ", " 
    let mappedElement = (
        "{ " + 
        label + 
        background + 
        border +
        fill +
        data +
        " }" 
    )
    return mappedElement
}

let mappings = protocols.map( p => {
    return buildMapping(p);
})

// console.log(mappings)

let stringMappings = JSON.stringify(mappings);
let filePathMappings = '../chartJS_input/utils/compDataMappings.js';
utils.saveFile(filePathMappings, stringMappings)

// Build list of colors for each data series
let colors = [];

let RGBs = [
    'rgba(247, 5, 207, 0.41)',
    'rgba(171, 123, 0, 1)',
    'rgba(249, 161, 234, 0.41)',
    'rgba(23, 0, 255, 0.41)',
    'rgba(0, 149, 51, 0.67)',
    'rgba(203, 198, 252, 0.41)',
    'rgba(44, 35, 135, 0.41)',
    'rgba(255, 0, 0, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(255, 0, 255, 1)',
    'rgba(0, 255, 236, 1)',
    'rgba(0, 255, 236, 0.12)',
    'rgba(35, 139, 132, 0.12)',
    'rgba(8, 210, 128, 0.67)',
    'rgba(0, 156, 94, 0.67)',
    'rgba(0, 255, 87, 0.67)',
    'rgba(123, 255, 168, 0.67)',
    'rgba(124, 255, 123, 1)',
    'rgba(209, 255, 209, 1)',
    'rgba(237, 255, 0, 1)',
    'rgba(247, 255, 135, 1)',
    'rgba(164, 176, 0, 1)',
    'rgba(216, 233, 0, 0.49)',
    'rgba(249, 255, 159, 0.49)',
    'rgba(255, 183, 0, 1)',
    'rgba(255, 220, 131, 1)',
    'rgba(160, 95, 0, 1)',
    'rgba(255, 61, 0, 1)',
    'rgba(254, 133, 95, 1)',
    'rgba(176, 42, 0, 1)',
    'rgba(176, 42, 0, 1)',
    'rgba(176, 0, 0, 1)',
];


for (let i = 0; i < protocols.length; i++ ) {

    let rgba = RGBs[i]
    let string = `const ${protocols[i]}Color = '${rgba}'`;
    colors.push(string);
}


let stringOfColors = JSON.stringify(colors);

let filePathColors = '../chartJS_input/utils/compSeriesColors.js'

utils.saveFile(filePathColors, stringOfColors)

