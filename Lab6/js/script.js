// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;

// COLLECT VALUES FROM THE USER
// Validate user entries
do {
    investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
} while (isNaN(investment))

do {
    rate = parseFloat(prompt('Enter interest rate as xx.x'));
} while (rate >= 8 || rate < 0)

do {
    years = parseInt(prompt('Enter the number of years you want to invest for'));
} while (0 < years && years >30)


// CALCULATE FUTURE VALUE
futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);

