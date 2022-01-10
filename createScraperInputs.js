// This script will create 2 files in ./scraper_input
const fs = require('fs-extra');
const utils = require('./utils/saveFileFunction');

// 1) Create listoOfDates.js 
// Function to list all dates till Today in an Array
let getDaysArray = function(start, end) {
    let arr=[];
    for(dt=new Date(start); dt<=end; dt.setDate(dt.getDate()+1)) {
        arr.push(new Date(dt));
    }
    return arr;
};

// Get today's date in the right format
const today = new Date();
const formatted_today = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()-1;

// Below enter 'formatted_today' to set today's date or set a manual date below
let daylist = getDaysArray(new Date("2021-12-01"), new Date("2021-12-31") );

// Convert the date format into one accepted by cryptofees.info
let daysRange = daylist.map( (v) => v.toISOString().slice(0,10));
console.log("Number of Dates: ", daysRange.length);
let days = daysRange.toString().replaceAll(',','","');

// Convert format into a String that can be saved to a file
let prefix = 'module.exports = ["';
let listOfDates = prefix.concat(days, '"]');

// Function to save dates into a JS file as an array
// where f = file path; and d = data to be written on file
// async function saveFile(f, d) {
//     try {
//         await fs.outputFile(f, d);
//         const data = await fs.readFile(f, 'utf8')
//         console.log(data);
//     } catch (err) {
//         console.error(err);
//     }
// }

let pathOfDates = './scraper_input/listOfDates.js';
utils.saveFile(pathOfDates, listOfDates);

// 2) Create listOfTimeouts.js
// Create a timeout value for every position in the array listOfDates.js
// Save that output in an Array file
let stringOfDays = '["' + days + '"]';
let arrayOfDays = JSON.parse(stringOfDays);

// Function to get two random numbers
// Use these random numbers to calculate a timeout value fore very date
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
const timeoutsMap = arrayOfDays.map( x => (x.length*getRandomInt(120, 230) ) );

// Convert the Array of timeouts into a String that can be saved to a file
let timeoutsValues = 'module.exports = [' + timeoutsMap + ']';
console.log(timeoutsValues);

let pathOfTimeouts = './scraper_input/listOfTimeouts.js';
utils.saveFile(pathOfTimeouts, timeoutsValues);

