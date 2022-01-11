// Generate component that defines the data<>colors mappings used in the chartjs_json_script.js
const utils = require('./saveFileFunction');
const protocols = require('./listOfProtocols');
const { saveFile } = require('./saveFileFunction');
const preffix = "{ ";
const suffix = " }";

let buildMapping = e => {
    let label = "label: '" + e + "' ,";
    let background = "backgroundColor: " + e + "Color" + ", ";
    let border = "borderColor: " + e + "Color" + ", ";
    let fill = "fill: false, ";
    let data = "data: data" + e + ", " 
    
    let mappedElement = (
        preffix + 
        label + 
        background + 
        border +
        fill +
        data +
        suffix 
    )

    return mappedElement
}

let mapped = protocols.map( p => {
    return buildMapping(p);
})

console.log(mapped)

let stringMapped = JSON.stringify(mapped);
let filePath = './compDataMappings.js';
saveFile(filePath, stringMapped)
