var moment = require('moment-timezone');

var add = (num1, num2) => {
    return Number(num1 + num2);
}
var mul = (num1, num2) => {
    return Number(num1 * num2);
}
var addConsole = (num1, num2) => {
    return "Result : " + num1 + " + " + num2 + " = " + add(num1.num2);
}
var mulConsole = (num1, num2) => {
    return "Result : " + num1 + " * " + num2 + " = " + mul(num1.num2);
}
var NYTime = () => {
    return "Time in New York is " + moment().tz('America/New_York').format('DD-MM-YYYY');
}
module.exports = { addConsole, mulConsole, NYTime }