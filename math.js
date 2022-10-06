var moment = require('moment-timezone');
var add = (num1, num2) => {
    return Number(num1 + num2);
}
var mul = (num1, num2) => {
    return Number(num1 * num2);
}
export function addConsole(num1, num2) {
    return "Result : " + num1 + " + " + num2 + " = " + add(num1.num2);
}
export function mulConsole(num1, num2) {
    return "Result : " + num1 + " * " + num2 + " = " + mul(num1.num2);
}
export function NYTime() {
    return "Time in New York is " + moment().tz('America/New_York').format('DD-MM-YYYY');
}