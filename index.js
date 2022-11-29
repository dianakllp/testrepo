// const date = new Date();
// console.log(date); 
// const daylist = ["Sunday", "Monday", "Tuesday"]

const days =["Sunday","Monday","Tuesday","Wendsday","Thursday","Friday","Saturday"];
const getday=new Date().getDay();
console.log("Today is : "+days[getday]);

// const options = { month: 'long'};
// console.log(new Intl.DateTimeFormat('en-US', options).format(Xmas95));
// // December{}

// // const date2 = new Date();
// // console.log(date2);

// // const options = { month: "long"};
// // console.log(new Intl.DateTimeFormat ("en-Us", options).format())

const epochTime = new Date();

console.log(epochTime);


const showMeToday = new Date ();
const options = {weekday: "long"};
console.log("Today is: " + showMeToday.toLocaleDateString("en-US", options));


const options2 = {hour: "numeric"};
const options3 = {minute: "2-digit", second: "2-digit"};
console.log("Current time is: "+ showMeToday.toLocaleTimeString("en-US", options2) + ":" + showMeToday.toLocaleTimeString("en-US",options3));

function print_current_page() {
    window.print();
}

const date= new Date();

let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();

let showtodaysday = `${day}-${month}-${year}`;
console.log(showtodaysday);

const a = 5; 
const b = 6;
const c = 7; 
const s = (a + b + c) / 2;
const d = s*(s-a)*(s-b)*(s-c); 
let AreaOfTriangle = Math.sqrt(d); 

console.log(AreaOfTriangle);


// let myFirstLetter = myArray[0];
// console.log(myFirstLetter); 

// console.log(myArray);

// function clickToReverse () {
//     for (let i = 0; i < myArray.length; i++){
//         const reverseIndex = myArray.length - 1 - i; 
//         myArray[i] = myArray[reverseIndex];
//         // myArray[reverseIndex]=myArray[i];

// }
// console.log(myArray);
// }

//chcemy zrobić działanie na kadym elemencie 
// zeby kazdy element tablicy zostaw zamieniony z odwróconym inteksem na tej tablicy 

// "string".split("").reverse().join("")

// const reversedArray = myArray.reverse();
// console.log(reversedArray);



// console.log (myArray);
// debugger

// const reversedAray = myArray.reverse();
// console.log(reversedAray);

const ourString = "string"; 
const myArray = ourString.split(""); 

function clickToReverse () {
    for (let i = 0; i < myArray.length; i++){ 
        const reverseIndex = myArray.length - 1 - i; 
        const letter = myArray[i];
        myArray[i] = myArray[reverseIndex];
        myArray[reverseIndex] = letter; 
        if (i === 2) { break; }
    }
    console.log(myArray);

}


