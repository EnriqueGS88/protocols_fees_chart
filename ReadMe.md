# Protocol Fees Chart
## _Trends using ChartJS_

[![N|Solid](https://www.chartjs.org/img/chartjs-logo.svg)](https://www.chartjs.org/)

Use this repository plot the fees collected by top DeFi protocols in a given timeframe.

- Scrape fees data from cryptofees.infoype some Markdown on the left
- Then plot the scraped data as time series using ChartJS
- ✨Compare tokens  values ✨

## Components

- ./scraper_input
- ./scraper_output
- ./utils
- ./chartJS_input

## Installation

Install the dependencies:

```sh
git clone <github url>
npm i
```
## Setup Scraper

Go to ./utils/createScraperInputs.js and in "daylist", enter the time range the scraper should collect data from:
```sh
let daylist = getDaysArray(new Date("2021-12-01"), new Date("2021-12-31") );
```
Then run:
```sh
node createScraperInputs.js
```
This will create two files in ./scraper_input. These files contain the dates the scraper should go through and also a series of random timeouts that the scraper will wait on each page to bypass the server anti-bot logic.

Now let the scraper run:
```sh
node scraper.js
```

## Data Transformation
Scraped data will be saved in ./scraper_output as an array. We will have to transform this data into a JSON format that can be consumed by ChartJS. 

First, go to ./utils and run:
```sh
node getProtocols.js
```
This will build an array with all the names of the unique protocols saved under ./scraper_output

Do this by going to ./utils and running:
```sh
node createConverterComps.js
```
The line above creates 3 files in ./utils/jsonConverter:
- compJSONoutput.js
- compFunctions.js
- compArrayOfFunctions.js

Use the content of these 3 files to manually assemble a script that converst the scraped Array into a JSON.
You can use sampleJSONconverter.js as a model on how the scripts should be assembled.

A sample of the transformed data is in ./chartJS_input/jsonFile.js

## Plot Chart
Go to ./utils and run the next command to create two files (compDataMappings.js and compSeriesColors.js) in ./chartJS_input/utils:
```sh
node createChartComps.js
```
Now take the following snippets from ./chartJS_input to create the script that injects the data and config for ChartJS:
- compDataMappings.js
- compSeriesColors.js
- jsonFile.js

That file you create name it "line_script.js" and save it in ./chartJS_input

Now open the file "chart.html" with the OpenLive Server:

## License

MIT

## Future Enhancements
- Toggle to add/remove data series
- Toggle to change time period
- Credit data source (cryptofees.info)
- Display data of scrape and ETH price then
- Link Github repository


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
