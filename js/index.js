'use strict';

//estimates and actual value are made up data
let state = {
    inputtedGuess: 0,
    estimates: [],
    inputtedText: '',
    actualValue: 0,

    incubationEstimates: {
        lowerBounds: [4, 5, 6, 7],
        upperBounds: [8, 9, 10, 11]
    },
    inputtedLower: '',
    inputtedHigher: '',
    guessedIncubation: {
        lowerBounds: 5,
        upperBounds: 7
    },
    actualIncubation: {
        lowerBounds: 1,
        upperBounds: 3
    }
}

//create fake json object (hardcode the table), and write the logic for extracting data
//and assigning it to parts of the state

d3.csv("js/hospitalization_estimates.csv").then(function(data) {
    data.forEach(function(row) {
        let columns = Object.keys(row);
        columns.forEach(function(column) {
            let guess = row[column];
            state.estimates[state.estimates.length] = guess;
        })
    });
});

d3.csv("js/incubation_guesses.csv").then(function(data) {
    data.forEach(function(row) {
        let columns = Object.keys(row);
        columns.forEach(function(column) {
            let guess = row[column];
            stateObject.incubationEstimates.column[state.incubationEstimates.column.length] = guess;
        })
    });
});

// function returnedData()
function fetchPlaceholder() {
    let fakeJson = [{inputtedEstimates: 100},
        {inputtedEstimates: 200},
        {inputtedEstimate: 500},
        {inputtedEstimate: 300},
        {inputtedEstimate: 450},
        {inputtedEstimate: 60},
        {inputtedEstimate: 75}]
    return(fakeJson);
}

//take all values from an object and put it in the state
function updateState(data, stateObject) {
    data.forEach(function(row) {
        let columns = Object.keys(row);
        columns.forEach(function(column) {
            let guess = row[column];
            stateObject[stateObject.length] = guess;
        })
    });
}

let fakeCSV = fetchPlaceholder();
updateState(fakeCSV, state.estimates);

console.log(state.estimates);

function renderChartOne(updatedData) {
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: ['Your Estimate', 'Average Estimate', 'Actual Number'],
            datasets: [{
                barPercentage: 0.2,
                maxBarWidth: 1,
                backgroundColor: 'whitesmoke',
                borderColor: 'navy',
                borderWidth: 2,
                data: updatedData
            }]
        },

        // Configuration options go here
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            legend: {
                display: false,
            }
        }
    });
}

//CREATE CHART WITH NO DATA
renderChartOne([0, 0, 0]);
let userInput = document.querySelector('input');

function addNewHospGuess() {
    let newGuess = Number(state.inputtedText);
    state.estimates[state.estimates.length] = (newGuess);
    console.log(state.estimates);
    state.inputtedGuess = state.inputtedText;
    state.actualValue = 406.6;
    userInput.value = '';
    state.inputtedText = '';
    renderChartOne([state.inputtedGuess, state.estimates.reduce((a,b) => a + b, 0) / state.estimates.length, state.actualValue]);
}

let button = document.querySelector('button');
button.addEventListener('click', addNewHospGuess);

userInput.addEventListener('input', function() {
    state.inputtedText = userInput.value;
    renderInput();
})

function renderInput() {

    if (state.inputtedText.length == 0) {
        button.disabled = true;
    }

    if (state.inputtedText.length != 0) {
        button.disabled = false;
    }
    
}

var ctx2 = document.getElementById('myChart2').getContext('2d');
var chart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['', 'Your Estimate', 'Average Estimate', 'Actual Value', ''],
        datasets: [{
            borderColor: 'navy',
            data: []
        },{
            borderColor: 'navy',
            data: [{x: 'Your Estimate', y: 0},
                    {x: 'Your Estimate', y: 0}]
        },{
            borderColor: 'navy',
            data: [{x: 'Average Estimate', y: 0},
                    {x: 'Average Estimate', y: 0}]
        },{
            borderColor: 'navy',
            data: [{x: 'Actual Value', y: 0},
                    {x: 'Actual Value', y: 0}]
        },{
            borderColor: 'navy',
            data: []
        }]
    },

    // Configuration options go here
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            display: false,
        }
    }
});

function renderChartTwo() {
    chart2 = new Chart(ctx2, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ['', 'Your Estimate', 'Average Estimate', 'Actual Value', ''],
            datasets: [{
                borderColor: 'navy',
                data: []
            },{
                borderColor: 'navy',
                data: [{x: 'Your Estimate', y: state.guessedIncubation.lowerBounds},
                        {x: 'Your Estimate', y: state.guessedIncubation.upperBounds}]
            },{
                borderColor: 'navy',
                data: [{x: 'Average Estimate', y: state.incubationEstimates.lowerBounds.reduce((a,b) => a + b, 0) / state.incubationEstimates.lowerBounds.length},
                        {x: 'Average Estimate', y: state.incubationEstimates.upperBounds.reduce((a,b) => a + b, 0) / state.incubationEstimates.upperBounds.length}]
            },{
                borderColor: 'navy',
                data: [{x: 'Actual Value', y: state.actualIncubation.lowerBounds},
                        {x: 'Actual Value', y: state.actualIncubation.upperBounds}]
            },{
                borderColor: 'navy',
                data: []
            }]
        },

        // Configuration options go here
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            legend: {
                display: false,
            }
        }
    });
}

// renderChartOne([0, 0, 0]);

let lowerInput = document.getElementById('lowerBound');
lowerInput.addEventListener('input', function() {
    state.inputtedLower = lowerInput.value;
    console.log("lower bound" + lowerInput.value);
})

let upperInput = document.getElementById('upperBound');
upperInput.addEventListener('input', function() {
    state.inputtedHigher = upperInput.value;
    console.log("upper bound" + upperInput.value);
})

function addNewGuess() {
    let lowerGuess = Number(state.inputtedLower);
    let upperGuess = Number(state.inputtedHigher);
    state.guessedIncubation.lowerBounds = lowerGuess;
    state.guessedIncubation.upperBounds = upperGuess;
    state.incubationEstimates.lowerBounds[state.incubationEstimates.lowerBounds.length] = lowerGuess;
    state.incubationEstimates.upperBounds[state.incubationEstimates.upperBounds.length] = upperGuess;
    state.actualIncubation.lowerBounds = 6;
    state.actualIncubation.upperBounds = 8;
    lowerInput = '';
    upperInput = '';
    state.inputtedLower = '';
    state.inputtedHigher = '';
    renderChartTwo();
}

let button2 = document.getElementById('add-inc-guess');
button2.addEventListener('click', addNewGuess);