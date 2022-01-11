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

protocols.forEach( e => {
    let text = "const "+ e + "Color" + " = 'rgb(215, 31, 126)'";
    colors.push(text);
})

let stringOfColors = JSON.stringify(colors);

let filePathColors = '../chartJS_input/utils/compSeriesColors.js'

utils.saveFile(filePathColors, stringOfColors)

// console.log(stringOfColors)
