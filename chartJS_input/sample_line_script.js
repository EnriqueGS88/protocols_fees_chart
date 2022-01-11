// Sample from stackoverflow
// source: https://stackoverflow.com/questions/44990517/displaying-json-data-in-chartjs

// Below snippet Data for Sample Demo 
/*
const jsonFile = {
    "ethereumData": [{
        date: '2021-12-29',
        fee: 100
    }, {
        date: '2021-12-30',
        fee: 110
    }, {
        date: '2021-12-31',
        fee: 250
    }],
    "sushiswapData": [{
        date: '2021-12-29',
        fee: 50
    }, {
        date: '2021-12-30',
        fee: 195
    }, {
        date: '2021-12-31',
        fee: 70
    }],
    "uniswapData": [{
        date: '2021-12-29',
        fee: 50
    }, {
        date: '2021-12-30',
        fee: 110
    }, {
        date: '2021-12-31',
        fee: 280
    }]
};



// Use the Ethereum data series to define the labels (X axis)
let labels = jsonFile.ethereumData.map(function(e) {
    return e.date;
});


// These are the data series for 3 sample protocols
let dataEthereum = jsonFile.ethereumData.map( e => {
    return e.fee;
});

let dataUniswap = jsonFile.uniswapData.map(function(e) {
    return e.fee;
});

let dataSushiswap = jsonFile.sushiswapData.map( function(e) {
    return e.fee;
});

const ethereumColor = 'rgba(0, 119, 204, 0.3)';
const uniswapColor = 'rgb(255, 99, 132)';
const sushiswapColor = 'rgb(215, 31, 126)';

*/

const jsonFile = {
  ethereumData: [
    { date: '2021-12-01', fee: 62620320 },
    { date: '2021-12-02', fee: 52833931 },
    { date: '2021-12-03', fee: 45878831 },
    { date: '2021-12-04', fee: 58845694 },
    { date: '2021-12-05', fee: 42813383 },
    { date: '2021-12-06', fee: 46679090 },
    { date: '2021-12-07', fee: 40639663 },
    { date: '2021-12-08', fee: 35685618 },
    { date: '2021-12-09', fee: 35248800 },
    { date: '2021-12-10', fee: 37343967 },
    { date: '2021-12-11', fee: 31529460 },
    { date: '2021-12-12', fee: 27188480 },
    { date: '2021-12-13', fee: 33644781 },
    { date: '2021-12-14', fee: 30767621 },
    { date: '2021-12-15', fee: 36707369 },
    { date: '2021-12-16', fee: 41423662 },
    { date: '2021-12-17', fee: 39239439 },
    { date: '2021-12-18', fee: 26795865 },
    { date: '2021-12-19', fee: 25355936 },
    { date: '2021-12-20', fee: 28700496 },
    { date: '2021-12-21', fee: 28036811 },
    { date: '2021-12-22', fee: 31670162 },
    { date: '2021-12-23', fee: 35207125 },
    { date: '2021-12-24', fee: 29971714 },
    { date: '2021-12-25', fee: 29759815 },
    { date: '2021-12-26', fee: 23277469 },
    { date: '2021-12-27', fee: 32497271 },
    { date: '2021-12-28', fee: 39628046 },
    { date: '2021-12-29', fee: 46065642 },
    { date: '2021-12-30', fee: 40773595 }
  ],
  uniswapData: [
    { date: '2021-12-01', fee: 11315687 },
    { date: '2021-12-02', fee: 10822348 },
    { date: '2021-12-03', fee: 11764485 },
    { date: '2021-12-04', fee: 17640347 },
    { date: '2021-12-05', fee: 9949195 },
    { date: '2021-12-06', fee: 12803938 },
    { date: '2021-12-07', fee: 8187235 },
    { date: '2021-12-08', fee: 8493173 },
    { date: '2021-12-09', fee: 10522510 },
    { date: '2021-12-10', fee: 11552793 },
    { date: '2021-12-11', fee: 8377597 },
    { date: '2021-12-12', fee: 5186078 },
    { date: '2021-12-13', fee: 7297223 },
    { date: '2021-12-14', fee: 4044851 },
    { date: '2021-12-15', fee: 5605966 },
    { date: '2021-12-16', fee: 4207082 },
    { date: '2021-12-17', fee: 4824260 },
    { date: '2021-12-18', fee: 3721218 },
    { date: '2021-12-19', fee: 3718491 },
    { date: '2021-12-20', fee: 4370582 },
    { date: '2021-12-21', fee: 3873456 },
    { date: '2021-12-22', fee: 3773158 },
    { date: '2021-12-23', fee: 4733293 },
    { date: '2021-12-24', fee: 3789574 },
    { date: '2021-12-25', fee: 5799913 },
    { date: '2021-12-26', fee: 3378549 },
    { date: '2021-12-27', fee: 3642096 },
    { date: '2021-12-28', fee: 5098550 },
    { date: '2021-12-29', fee: 1144687 },
    { date: '2021-12-30', fee: 3557185 }
  ],
  binance_Smart_ChainData: [
    { date: '2021-12-01', fee: 7240187 },
    { date: '2021-12-02', fee: 6542318 },
    { date: '2021-12-03', fee: 5032637 },
    { date: '2021-12-04', fee: 5219315 },
    { date: '2021-12-05', fee: 5512088 },
    { date: '2021-12-06', fee: 5436708 },
    { date: '2021-12-07', fee: 5573333 },
    { date: '2021-12-08', fee: 4503546 },
    { date: '2021-12-09', fee: 4085662 },
    { date: '2021-12-10', fee: 4285835 },
    { date: '2021-12-11', fee: 2767860 },
    { date: '2021-12-12', fee: 3040083 },
    { date: '2021-12-13', fee: 3244510 },
    { date: '2021-12-14', fee: 3179916 },
    { date: '2021-12-15', fee: 2973182 },
    { date: '2021-12-16', fee: 3122655 },
    { date: '2021-12-17', fee: 3381074 },
    { date: '2021-12-18', fee: 2873172 },
    { date: '2021-12-19', fee: 2548941 },
    { date: '2021-12-20', fee: 2997805 },
    { date: '2021-12-21', fee: 3428016 },
    { date: '2021-12-22', fee: 3061285 },
    { date: '2021-12-23', fee: 3037150 },
    { date: '2021-12-24', fee: 2746036 },
    { date: '2021-12-25', fee: 2276870 },
    { date: '2021-12-26', fee: 2609750 },
    { date: '2021-12-27', fee: 3032033 },
    { date: '2021-12-28', fee: 2981894 },
    { date: '2021-12-29', fee: 2798436 },
    { date: '2021-12-30', fee: 2631006 }
  ],
  sushiSwapData: [
    { date: '2021-12-01', fee: 1379943 },
    { date: '2021-12-02', fee: 1508072 },
    { date: '2021-12-03', fee: 1677121 },
    { date: '2021-12-04', fee: 2951080 },
    { date: '2021-12-05', fee: 1277717 },
    { date: '2021-12-06', fee: 1902719 },
    { date: '2021-12-07', fee: 1255775 },
    { date: '2021-12-08', fee: 1348950 },
    { date: '2021-12-09', fee: 1457735 },
    { date: '2021-12-10', fee: 1397227 },
    { date: '2021-12-11', fee: 775480 },
    { date: '2021-12-12', fee: 702138 },
    { date: '2021-12-13', fee: 1165130 },
    { date: '2021-12-14', fee: 1084584 },
    { date: '2021-12-15', fee: 1197523 },
    { date: '2021-12-16', fee: 823867 },
    { date: '2021-12-17', fee: 1232246 },
    { date: '2021-12-18', fee: 1198872 },
    { date: '2021-12-19', fee: 940814 },
    { date: '2021-12-20', fee: 1063478 },
    { date: '2021-12-21', fee: 1033840 },
    { date: '2021-12-22', fee: 1113881 },
    { date: '2021-12-23', fee: 1531030 },
    { date: '2021-12-24', fee: 1196357 },
    { date: '2021-12-25', fee: 861630 },
    { date: '2021-12-26', fee: 774139 },
    { date: '2021-12-27', fee: 1277537 },
    { date: '2021-12-28', fee: 1347931 },
    { date: '2021-12-29', fee: 371945 },
    { date: '2021-12-30', fee: 1097646 }
  ],
  aaveData: [
    { date: '2021-12-01', fee: 1572934 },
    { date: '2021-12-02', fee: 1192397 },
    { date: '2021-12-03', fee: 1278866 },
    { date: '2021-12-04', fee: 1840730 },
    { date: '2021-12-11', fee: 454606 },
    { date: '2021-12-14', fee: 503657 },
    { date: '2021-12-15', fee: 467937 },
    { date: '2021-12-16', fee: 492714 },
    { date: '2021-12-17', fee: 458155 },
    { date: '2021-12-30', fee: 428469 }
  ],
  bitcoinData: [
    { date: '2021-12-01', fee: 1160676 },
    { date: '2021-12-02', fee: 1053088 },
    { date: '2021-12-03', fee: 718519 },
    { date: '2021-12-04', fee: 878325 },
    { date: '2021-12-05', fee: 1046410 },
    { date: '2021-12-06', fee: 673208 },
    { date: '2021-12-07', fee: 545034 },
    { date: '2021-12-08', fee: 540776 },
    { date: '2021-12-09', fee: 571806 },
    { date: '2021-12-10', fee: 555995 },
    { date: '2021-12-13', fee: 634191 },
    { date: '2021-12-14', fee: 564525 },
    { date: '2021-12-15', fee: 556157 },
    { date: '2021-12-16', fee: 491487 },
    { date: '2021-12-17', fee: 612283 },
    { date: '2021-12-20', fee: 515934 },
    { date: '2021-12-21', fee: 585498 },
    { date: '2021-12-22', fee: 521928 },
    { date: '2021-12-23', fee: 561103 },
    { date: '2021-12-24', fee: 608298 },
    { date: '2021-12-25', fee: 413606 },
    { date: '2021-12-26', fee: 398654 },
    { date: '2021-12-27', fee: 681810 },
    { date: '2021-12-28', fee: 847676 },
    { date: '2021-12-29', fee: 767390 },
    { date: '2021-12-30', fee: 847312 }
  ],
  trader_JoeData: [
    { date: '2021-12-01', fee: 1840553 },
    { date: '2021-12-02', fee: 1964356 },
    { date: '2021-12-03', fee: 1943144 },
    { date: '2021-12-04', fee: 1527164 },
    { date: '2021-12-05', fee: 1302291 },
    { date: '2021-12-06', fee: 1240711 },
    { date: '2021-12-07', fee: 1377347 },
    { date: '2021-12-08', fee: 1350458 },
    { date: '2021-12-09', fee: 1301323 },
    { date: '2021-12-10', fee: 1250495 },
    { date: '2021-12-11', fee: 1205058 },
    { date: '2021-12-12', fee: 1230041 },
    { date: '2021-12-13', fee: 1291905 },
    { date: '2021-12-14', fee: 1187804 },
    { date: '2021-12-15', fee: 1201361 },
    { date: '2021-12-16', fee: 1212604 },
    { date: '2021-12-17', fee: 1214952 },
    { date: '2021-12-18', fee: 1248161 },
    { date: '2021-12-19', fee: 1284183 },
    { date: '2021-12-20', fee: 1273764 },
    { date: '2021-12-21', fee: 1274200 },
    { date: '2021-12-22', fee: 1290820 },
    { date: '2021-12-23', fee: 1336867 },
    { date: '2021-12-24', fee: 1355850 },
    { date: '2021-12-25', fee: 1591886 },
    { date: '2021-12-26', fee: 1427536 },
    { date: '2021-12-27', fee: 1304185 },
    { date: '2021-12-28', fee: 1172709 },
    { date: '2021-12-29', fee: 616712 },
    { date: '2021-12-30', fee: 1361447 }
  ],
  compoundData: [
    { date: '2021-12-01', fee: 1285815 },
    { date: '2021-12-02', fee: 1405670 },
    { date: '2021-12-03', fee: 1730622 },
    { date: '2021-12-04', fee: 2336272 },
    { date: '2021-12-05', fee: 1517446 },
    { date: '2021-12-06', fee: 1801101 },
    { date: '2021-12-07', fee: 1289833 },
    { date: '2021-12-08', fee: 1091212 },
    { date: '2021-12-09', fee: 1476028 },
    { date: '2021-12-10', fee: 1264706 },
    { date: '2021-12-11', fee: 813346 },
    { date: '2021-12-12', fee: 739001 },
    { date: '2021-12-13', fee: 1392881 },
    { date: '2021-12-14', fee: 1452840 },
    { date: '2021-12-15', fee: 1494138 },
    { date: '2021-12-16', fee: 1378778 },
    { date: '2021-12-17', fee: 1531625 },
    { date: '2021-12-18', fee: 1030164 },
    { date: '2021-12-19', fee: 919089 },
    { date: '2021-12-20', fee: 1325496 },
    { date: '2021-12-21', fee: 1250485 },
    { date: '2021-12-22', fee: 1109070 },
    { date: '2021-12-23', fee: 1197158 },
    { date: '2021-12-24', fee: 955830 },
    { date: '2021-12-25', fee: 498565 },
    { date: '2021-12-26', fee: 647671 },
    { date: '2021-12-27', fee: 784631 },
    { date: '2021-12-28', fee: 1251073 },
    { date: '2021-12-30', fee: 822320 }
  ],
  balancerData: [
    { date: '2021-12-01', fee: 989648 },
    { date: '2021-12-02', fee: 988059 },
    { date: '2021-12-05', fee: 940559 },
    { date: '2021-12-07', fee: 935952 },
    { date: '2021-12-08', fee: 909875 },
    { date: '2021-12-09', fee: 419932 },
    { date: '2021-12-10', fee: 918639 },
    { date: '2021-12-11', fee: 933108 },
    { date: '2021-12-12', fee: 924082 },
    { date: '2021-12-13', fee: 891485 },
    { date: '2021-12-14', fee: 854694 },
    { date: '2021-12-15', fee: 814570 },
    { date: '2021-12-16', fee: 891507 },
    { date: '2021-12-18', fee: 814364 },
    { date: '2021-12-19', fee: 807445 },
    { date: '2021-12-21', fee: 809960 },
    { date: '2021-12-22', fee: 828190 },
    { date: '2021-12-23', fee: 850796 },
    { date: '2021-12-25', fee: 430669 },
    { date: '2021-12-26', fee: 810143 },
    { date: '2021-12-29', fee: 781388 },
    { date: '2021-12-30', fee: 783945 }
  ],
  terraswapData: [
    { date: '2021-12-01', fee: 458268 },
    { date: '2021-12-06', fee: 682365 },
    { date: '2021-12-18', fee: 596660 },
    { date: '2021-12-24', fee: 459433 },
    { date: '2021-12-28', fee: 545080 },
    { date: '2021-12-29', fee: 405292 }
  ],
  makerDAOData: [
    { date: '2021-12-02', fee: 682090 },
    { date: '2021-12-03', fee: 693489 },
    { date: '2021-12-05', fee: 1311883 },
    { date: '2021-12-09', fee: 2800686 },
    { date: '2021-12-10', fee: 565414 },
    { date: '2021-12-18', fee: 1753552 },
    { date: '2021-12-21', fee: 4203942 },
    { date: '2021-12-30', fee: 609053 }
  ],
  avalancheData: [
    { date: '2021-12-03', fee: 717466 },
    { date: '2021-12-04', fee: 1734071 },
    { date: '2021-12-05', fee: 680018 },
    { date: '2021-12-06', fee: 763157 },
    { date: '2021-12-07', fee: 602455 },
    { date: '2021-12-08', fee: 478899 },
    { date: '2021-12-09', fee: 831918 },
    { date: '2021-12-10', fee: 633870 },
    { date: '2021-12-11', fee: 776151 },
    { date: '2021-12-12', fee: 355550 },
    { date: '2021-12-13', fee: 565498 },
    { date: '2021-12-14', fee: 436388 },
    { date: '2021-12-15', fee: 437746 },
    { date: '2021-12-17', fee: 409312 },
    { date: '2021-12-18', fee: 575329 },
    { date: '2021-12-19', fee: 542218 },
    { date: '2021-12-20', fee: 804306 },
    { date: '2021-12-21', fee: 600492 },
    { date: '2021-12-22', fee: 861808 },
    { date: '2021-12-23', fee: 533595 },
    { date: '2021-12-24', fee: 707786 },
    { date: '2021-12-25', fee: 323853 },
    { date: '2021-12-26', fee: 438635 },
    { date: '2021-12-27', fee: 693270 }
  ],
  abracadabra_moneyData: [
    { date: '2021-12-04', fee: 895637 },
    { date: '2021-12-06', fee: 490621 },
    { date: '2021-12-07', fee: 457112 },
    { date: '2021-12-08', fee: 395373 },
    { date: '2021-12-19', fee: 420549 },
    { date: '2021-12-28', fee: 454266 }
  ],
  spookyswapData: [
    { date: '2021-12-11', fee: 403334 },
    { date: '2021-12-12', fee: 403597 },
    { date: '2021-12-16', fee: 400463 },
    { date: '2021-12-20', fee: 395817 },
    { date: '2021-12-25', fee: 396905 },
    { date: '2021-12-26', fee: 397286 },
    { date: '2021-12-27', fee: 397763 },
    { date: '2021-12-29', fee: 395520 }
  ],
  quickswapData: [
    { date: '2021-12-12', fee: 327402 },
    { date: '2021-12-13', fee: 640774 },
    { date: '2021-12-17', fee: 413690 },
    { date: '2021-12-19', fee: 401105 },
    { date: '2021-12-20', fee: 798748 },
    { date: '2021-12-22', fee: 1013179 },
    { date: '2021-12-23', fee: 500316 },
    { date: '2021-12-24', fee: 418695 },
    { date: '2021-12-27', fee: 393191 },
    { date: '2021-12-28', fee: 413305 },
    { date: '2021-12-29', fee: 325169 }
  ]
}

// Use the Ethereum data series to define the labels (X axis)
let labels = jsonFile.ethereumData.map( e => {
    return e.date;
});

// These are the data series for 3 sample protocols
let dataEthereum = jsonFile.ethereumData.map(  e => {
    return e.fee;
});

let dataUniswap = jsonFile.uniswapData.map( e => {
    return e.fee;
});

let dataSushiSwap = jsonFile.sushiSwapData.map(  e => {
    return e.fee;
});

let dataBinance_Smart_Chain = jsonFile.binance_Smart_ChainData.map( e => {
    return e.fee;
});

let dataAave = jsonFile.aaveData.map( e => {
    return e.fee
});

let dataBitcoin = jsonFile.bitcoinData.map( e => {
    return e.fee
});

let dataTrader_Joe = jsonFile.trader_JoeData.map( e => {
    return e.fee
});

let dataCompound = jsonFile.compoundData.map( e => {
    return e.fee
});

let dataBalancer = jsonFile.balancerData.map( e => {
    return e.fee
});

let dataTerraswap = jsonFile.terraswapData.map( e => {
    return e.fee
});

let dataMakerDAO = jsonFile.makerDAOData.map( e => {
    return e.fee
});

let dataAvalanche = jsonFile.avalancheData.map( e => {
    return e.fee
});

let dataAbracadabra_money = jsonFile.abracadabra_moneyData.map( e => {
    return e.fee
});

let dataSpookySwap = jsonFile.spookyswapData.map( e => {
    return e.fee
});

let dataQuickswap = jsonFile.quickswapData.map( e => {
    return e.fee
})


// Define colors for all series

const EthereumColor = 'rgb(215, 31, 126)';
const UniswapColor = 'rgb(215, 31, 126)';
const Binance_Smart_ChainColor = 'rgb(215, 31, 126)';
const AaveColor = 'rgb(215, 31, 126)';
const BalancerColor = 'rgb(215, 31, 126)';
const SushiSwapColor = 'rgb(215, 31, 126)';
const Trader_JoeColor = 'rgb(215, 31, 126)';
const BitcoinColor = 'rgb(215, 31, 126)';
const CompoundColor = 'rgb(215, 31, 126)';
const SpookySwapColor = 'rgb(215, 31, 126)';
const Abracadabra_moneyColor = 'rgb(215, 31, 126)';
const TerraswapColor = 'rgb(215, 31, 126)';
const QuickswapColor = 'rgb(215, 31, 126)';
const MakerDAOColor = 'rgb(215, 31, 126)';
const AvalancheColor = 'rgb(215, 31, 126)';

 var ctx = document.getElementById('myChart').getContext('2d');
 var config = {
    type: 'line',
    data: {
       labels: labels,
       datasets: 
       [
          {
            label: "Ethereum",
            backgroundColor: EthereumColor,
            borderColor: EthereumColor,
            fill: false,
            data: dataEthereum,
          },
          {
            label: "Uniswap",
            backgroundColor: UniswapColor,
            borderColor: UniswapColor,
            fill: false,
            data: dataUniswap,
          },
          {
            label: "Binance_Smart_Chain",
            backgroundColor: Binance_Smart_ChainColor,
            borderColor: Binance_Smart_ChainColor,
            fill: false,
            data: dataBinance_Smart_Chain,
          },
          {
            label: "Aave",
            backgroundColor: AaveColor,
            borderColor: AaveColor,
            fill: false,
            data: dataAave,
          },
          {
            label: "Balancer",
            backgroundColor: BalancerColor,
            borderColor: BalancerColor,
            fill: false,
            data: dataBalancer,
          },
          {
            label: "SushiSwap",
            backgroundColor: SushiSwapColor,
            borderColor: SushiSwapColor,
            fill: false,
            data: dataSushiSwap,
          },
          {
            label: "Trader_Joe",
            backgroundColor: Trader_JoeColor,
            borderColor: Trader_JoeColor,
            fill: false,
            data: dataTrader_Joe,
          },
          {
            label: "Bitcoin",
            backgroundColor: BitcoinColor,
            borderColor: BitcoinColor,
            fill: false,
            data: dataBitcoin,
          },
          {
            label: "Compound",
            backgroundColor: CompoundColor,
            borderColor: CompoundColor,
            fill: false,
            data: dataCompound,
          },
          {
            label: "SpookySwap",
            backgroundColor: SpookySwapColor,
            borderColor: SpookySwapColor,
            fill: false,
            data: dataSpookySwap,
          },
          {
            label: "Abracadabra_money",
            backgroundColor: Abracadabra_moneyColor,
            borderColor: Abracadabra_moneyColor,
            fill: false,
            data: dataAbracadabra_money,
          },
          {
            label: "Terraswap",
            backgroundColor: TerraswapColor,
            borderColor: TerraswapColor,
            fill: false,
            data: dataTerraswap,
          },
          {
            label: "Quickswap",
            backgroundColor: QuickswapColor,
            borderColor: QuickswapColor,
            fill: false,
            data: dataQuickswap,
          },
          {
            label: "MakerDAO",
            backgroundColor: MakerDAOColor,
            borderColor: MakerDAOColor,
            fill: false,
            data: dataMakerDAO,
          },
          {
            label: "Avalanche",
            backgroundColor: AvalancheColor,
            borderColor: AvalancheColor,
            fill: false,
            data: dataAvalanche,
          }
        ] 
       
       
       
      }
    };
    
    var chart = new Chart(ctx, config);
    
  //   [{
  //    label: 'Ethereum',
  //    backgroundColor: EthereumColor,
  //    borderColor: EthereumColor,
  //    fill: false,
  //    data: dataEthereum,
  //   }, {
  //    label: 'Uniswap',
  //    backgroundColor: UniswapColor,
  //    borderColor: UniswapColor,
  //    fill: false,
  //    data: dataUniswap,
  //   }, {
  //    label: 'Sushi',
  //    backgroundColor: SushiSwapColor,
  //    borderColor: SushiSwapColor,
  //    fill: false,
  //    data: dataSushiswap,
  //  } ]
 
  