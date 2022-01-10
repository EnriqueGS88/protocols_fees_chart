// List all dates between within a range period

const fs = require('fs-extra');

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

// Call the function from date in the past to today's date
// Below enter 'formatted_today' to set today's date
let daylist = getDaysArray(new Date("2021-12-01"), new Date("2021-12-31") );

// Convert the format into one accepted by Dates scraper
let daysRange = daylist.map( (v) => v.toISOString().slice(0,10));
console.log("Number of Dates: ", daysRange.length);
let days = daysRange.toString().replaceAll(',','","');

// Convert format into a String that can be saved to a file
let prefix = 'module.exports = ["';
let listOfDates = prefix.concat(days, '"]');

// Save output of dates into a JS file as an array
// where f = file path; and d = data to be written on file
async function saveFile(f, d) {
    try {
        await fs.outputFile(f, d);
        const data = await fs.readFile(f, 'utf8')
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

let fileOfDates = './scraper_input/listOfDates.js';
saveFile(fileOfDates, listOfDates);


let stringOfDays = '["' + days + '"]';
let arrayOfDays = JSON.parse(stringOfDays);
console.log( arrayOfDays );

// List all dates between within a range period
// const listOfDates = require('./listOfDates');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
const timeoutsMap = arrayOfDays.map( x => (x.length*getRandomInt(120, 230) ) );

// Convert format into a String that can be saved to a file
let timeoutsValues = 'module.exports = [' + timeoutsMap + ']';
console.log(timeoutsValues);


let fileOfTimeouts = './scraper_input/listOfTimeouts.js';
saveFile(fileOfTimeouts, timeoutsValues);

