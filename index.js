// 1

let userString = 'js';
userString = userString.toUpperCase()
console.log(userString);

// 2

const findStartsWith = (arr, string) => {
    const resultArr = [];
    arr.forEach(element => {
        if (element.toLowerCase().startsWith(string.toLowerCase())) resultArr.push(element);
    });
    return resultArr;
}

// 3

let number = 32.58884;
const x = Math.floor(number);
const y = Math.ceil(number);
const g = Math.round(number);

// 4

const numbers = [52, 53, 49, 77, 21, 32]

console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

// 5

function getRandomInt(minValue, maxValue) {

    return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}

console.log(getRandomInt(1, 10));

// 6

let numbersArray = new Array();

function getRandomArrNumbers(userValue) {
    let arrayLength = Math.floor(userValue / 2);
    for (let i = 0; i < arrayLength; i++) {
        numbersArray.push(Math.round(Math.random() * 10));
    }
    console.log(numbersArray);
}

// 7 


function getRandomInt(minValue, maxValue) {
    return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}

// 8

let myDate = new Date();
console.log(myDate);

// 9
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);

console.log(currentDate);

// 10

function formatDate(date) {
    const locale = 'ru-RU'
    return `Дата: ${date.toLocaleString(locale, { day: 'numeric', month: 'long', year: 'numeric' })} - это ${date.toLocaleString(locale, { weekday: 'long' })}.
Время: ${date.toLocaleTimeString(locale)}`
}
console.log(formatDate(new Date()));


