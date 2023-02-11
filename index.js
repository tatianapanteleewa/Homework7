// 1

let userString = 'js';
userString = userString.toUpperCase()
console.log(userString);

// 2

let newArray = new Array();
let newString;

newArray.forEach((arrayBefore) => {
    if (arrayBefore.toLowerCase().startsWith(newString.toLowerCase())) {
        return arrayBefore.split('');
    }
});

// 3

let number = 32.58884;
const x = Math.floor(number);
const y = Math.ceil(number);
const g = Math.round(number);

// 4

console.log(Math.max(52, 53, 49, 77, 21, 32));
console.log(Math.min(52, 53, 49, 77, 21, 32));

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
let days73 = 73 * 24 * 60 * 60 * 1000;
let searchDate = +currentDate + days73;
let daysAfter73 = new Date(searchDate);

console.log(daysAfter73);

// 10

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

function whatTheDay(Date) {
    let fullDate = "Дата: " + Date.getDate() + " " + months[Date.getMonth()] + " " + Date.getFullYear() + " - это " + days[Date.getDay()];
    console.log(fullDate);
    let fullTime = "Время: " + Date.getHours() + ":" + Date.getMinutes() + ":" + Date.getSeconds();
    console.log(fullTime);
}

whatTheDay(new Date);

