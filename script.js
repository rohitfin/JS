
/*
alert("hello world");

var myName = "Ankit";
var myAge = "20"
console.log("My Name is " + myName, ", I am " + myAge + "years old.");
alert("My Name is " + myName + ", I am " + myAge + "years old.");

*/


//-------------------- prompt (fill data on alert)-----------------

/*
prompt("Enter Your Name?");               // check in console  enter code and check

var pet = prompt("Enter Your Pet Name?");       
console.log("Your Pet Name is " + pet);   // check in console see in top

var frnd = prompt("Enter Your Friend Name?"); 
alert("Your friend Name is " + frnd);     // see in alert 

var text = prompt("Enter any text");
alert("The length of your text is " + text.length );    // length of text 

*/





// ----------------------------- data types -------------------

/*
// 1 number
var num = 10;
console.log(num);
console.log(typeof number);

// 2 string
var myName = "ankit";
console.log(myName);
console.log(typeof myName);

// 3 boolean
var isHere = ture;
console.log(isHere);
console.log(typeof isHere);

// 4 object 
var a = null;
console.log(a);
console.log(typeof a);

// 5 undefined
var abc;
console.log(abc);
console.log(typeof abc);

// 6 null
var a = "a"
console.log(a);
var a = "null"
console.log(a);

*/






//------------------------------ new to write string-----------------
/* 
var newStyle = 'this is "new" style of string'
alert(newStyle); 

*/




//---------------------- convert string into number
/*
var age;
age = prompt("what is your age?");
console.log(typeof age);
console.log(age);

age = parseInt(age);
console.log(typeof age);
console.log("After 5 years you will be " + (age + 5));    // adding string number in 5
*/





//--------------------- convert number into string or string to number
/* 
var height = 5.6;
console.log(typeof height);
console.log("Your height " +  height);

height = height.toString();
console.log(typeof height);
console.log("My height is " + height);
*/



//--------------- Entering number and give alert
/*
var age = parseInt(prompt("How old are you?"));
console.log("Only 18+ can access the website.");
if( age >= 18 ) {
    alert("Welcome to the Website");
}
else {
    alert("You're not allowed to access the website.");
}

var age = parseInt(prompt("How old are you?"));
console.log("Only 18+ can access the website.");

if (isNaN(age)) {
    alert("The age must be a number");
}else{
    if( age >= 18 ) {
        alert("Welcome to the Website");
    }else if( age > 13) {
        alert("You're not allowed to access the website.");
        console.log("You're still teenager");
    }else {
        alert("You are to young!");
    }

}

*/



// ------------------Comparaison Operators

/*
var a = 5;
if(a == 5) {                   // dubale equale to check value only not type
    console.log(true);
}else {
    console.log(false);
}
var a = 5;
if( a == "5" ) {                 // dubale equale to check value only not type
    console.log(true);
}else {
    console.log(false);
}



var a = 5;
if(a === "5" ) {                 // tripal equale to check value and also type 
    console.log(true);
}else {
    console.log(false);
}
var a = 5;
if(a === 5 ) {                   // tripal equale to check value and also type 
    console.log(true);
}else{
    console.log(false);
}



var a = 5;
if( (a < 10) && (a > 1) ) {        // and operator
    console.log(true);
}else  {
    console.log(false);
}
var a = 5;
if( (a > 10) && (a > 1) ) {         // and operator
    console.log(true);
}else  {
    console.log(false);
}



var a = 5;
if( (a < 10) || (a > 1) ) {         // or operator
    console.log(true);
}else  {
    console.log(false);
}
var a = 5;
if( (a > 10) || (a > 1) ) {        // or operator
    console.log(true);
}else  {
    console.log(false);
}
var a = 5;
if( (a > 10) || (a < 1) ) {         // or operator
    console.log(true);
}else  {
    console.log(false);
}



var a = 5;
if(  a != 10 ) {                   // not equal operator  
    console.log(true);
}else  {
    console.log(false);
}
var a = 5;
if(  a !== 5 ) {                   // not equal operator  
    console.log(true);
}else  {
    console.log(false);
}
var a = 5;
if(  a !== "5" ) {                 // not equal operator  
    console.log(true);
}else  {
    console.log(false);
}


var a = 5;
if( ! a < 10 ) {                   // not operator  
    console.log(true);
}else  {
    console.log(false);
}

*/


//----------- switch statement
/*
var a = 5;
debugger;
switch (a) {
    case 5:
        console.log("a is 5");
        break;
    case 6:
        console.log("a is 6");
        break;
    case 7:
        console.log("a is 7");
        break;
    case 8:
        console.log("a is 8");
        break;
    default:
        console.log("not any thing");

}

*/


//------------------------ Number Generator
/*
var  randomNumber = Math.ceil( Math.random() * 5);
console.log(randomNumber);

var gaussNumber = prompt("Enter Your Random Number Between 1 to 5");
console.log(gaussNumber);

if (randomNumber == gaussNumber) {
    alert("Your Gauss Number is  Match ");
}else {
    alert("Your Gauss Number is is Not Match");
}
*/


//------------------------ select biggest  Number 
/*
var wantToPlay = prompt("would you like to get the biggest number of 3 numbers? y(yes), n(no)");
wantToPlay = wantToPlay.toLowerCase();
console.log(wantToPlay);

if(wantToPlay === "yes" || wantToPlay === "y") {
    console.log("enter yes(y)");

    var num1 = prompt("Enter your first number");

    var num2 = prompt("Enter your second number");

    var num3 = prompt("Enter your third number");

    console.log(num1, num2, num3);

    var res = num1; 
    if(res < num2){
        res = num2;
    }
    if(res < num3) {
        res = num3;
    }
    console.log(res);
    alert("the biggest number is : " + res);

}
else {
    console.log("dont want to Play ");
    alert("you want to play again refresh the page");
}

*/

//------ for loop
/*
for (var i = 0; i < 5; i++ ) {
    console.log(i);
    console.log("repeat");
}
*/

/*
for (var i = 1; i < 100; i++ ) {
    console.log(i);
}
*/

// for (var i = 1; i < 10; i++ ) {
//     console.log(i + 1);
//     console.log(i);
// }


// for (var i = 100; i > 0; i-- ) {
//     console.log(i);
// }

// for (var i = 5; i !=0; i-- ) {
//     console.log(i);
// }


// for (var i = 0; i < 10; i++ ) {
//     console.log(i + 1);         // where to start your no, add those no to start
//     console.log("repeat");
// }


//--------- multiplication  table
// for (var i = 2; i <= 20; i += 2) {
//     console.log(i);
// }


//------ while loop
// var i = 0;
// while(i <= 10) {                            
//     console.log(i);
//     i++;
// }

// var i = 0;
// while(i < 10) {                 
//     console.log(i);
//     i++;
// }


//------ break and continue

// var i = 0;
// while( i < 10 ) {
//     i++;
//     if( i === 5 ){
//         break;
//     }
//     console.log(i);
// }

// var i = 0;
// while( i < 10 ) {
//     i++;
//     if( i === 5 ){
//         continue;
//     }
//     console.log(i);
// }



//------ do while loop

// var i = 5;
// do {
//     console.log(i);
//     i++;
// }while(i <= 10);


// var i = 15;
// do {
//     console.log(i);
//     i++;
// }while(i <= 10);



// **************  nesting  loop important *****************
/*
for (var i = 0; i < 10 ; i++ ) {
    var a = "";
    for(var j = 0; j < i ; j++){
        a = a+"*";
    }
    console.log(a);
}
*/

//------- Nesting loop

// for(var i = 0; i < 5; i++){
//     console.log("i:" + i);
//     for(var j = 0; j <= 5; j++) {
//         console.log("j:" + j);
//     }
// }

// for(var i = 1; i < 10; i++){
//     console.log(i);
//     for(var j = 1; j <= 10; j++) {
//         console.log(j);
//         console.log("i*j: " + ( i*j ) );
//     }
    
// }


//--------- number genrator

// var res = ""
// for(var i = 1; i <= 1000; i++){
//     var r = Math.ceil(Math.random() * 9 );
//     res += r
//     // console.log(res);   
// }
// document.write("<p>" + res  + "</p>");


//--------- with enter multification number

// var entNo = parseInt(prompt("Enter Your Number"));
// if(!isNaN(entNo)){
//     var ul = "<ul>"
//     for (var i = 1; i <= 10; i++ ) {
//         var res = entNo + " * " + i + "  =  " + (i*entNo);
//         ul +=  "<li>" + res + "</li>"
//     }
//     ul += "</ul>"  
//     document.write(ul);

// }else{
//     alert("Enter Your Number.");
// }


//----------- odd and even number 

// var entNo = prompt("Enter Your Number?");
// if(!isNaN(entNo)) {
//     for(var i = 0; i <= entNo; i++){
//         var ODD = ""
//         var EVEN = ""
//         if(i % 2 === 0 ) {
//            EVEN += i
//            console.log("even : " + i);
//         }else{
//             console.log("Odd : " + i);
//         }
//     }  
// }else{
//     alert("Enter A Number To Know ODD and EVEN before those number? & refresh...");
// }




//----------- randome number game

// var randomNo = Math.ceil(Math.random()*10);
// var chancesLeft = 5;
// do{
//     var enterNo = parseInt(prompt("Guess the randome number (between 1-10).\n " + chancesLeft + " chances left." ));
//     chancesLeft--;
//     if( randomNo === enterNo ) {
//         console.log( enterNo );
//         break;
//     }
// }while(chancesLeft !== 0);

// if( chancesLeft !== 0) {
//     alert("You Won");
// }else{
//     alert("You Loosed");
// }




//-------- Array 

// var cars = [ "mahindra bolero", "tata indica", "tata safari", "fortuner" ];

// cars = push("mercedes");            // adding new array at the ending

// cars = unshift("innova");           // adding new array at the starting

// cars[cars.length] = "honda";           // adding new array at the ending

// cars[cars.length - 3 ] = "Maruti Suziki"    // changing array 

// console.log(cars);

// console.log(cars[cars.length - 1]);         // check position of the array 

// console.log(cars["0"]);         // check the fist  array 





//------- two dimesional array

// var cars = [["running"],
//             ["mahindra bolero", "tata indica"],
//             ["potato"],
//             ["football","cricket"] 
//            ];


// var cars = [["running"],["mahindra bolero","tata indica"],["potato"],["football","cricket"]];
// for(var i = 0; i < cars.length; i++ ) {
//    for(var j = 0; j < cars[i].length; j++){
//         console.log(cars[i][j] );
//    }

// }





//---------- join array

// var cars = ["mahindra bolero","tata indica","potato","football","cricket"];
// var bike = cars.join(" ");
// console.log(bike);




//------- concat array

// var cars = ["mahindra","tata"];
// var fruits = ["apple","mango"];
// var res = cars.concat(fruits);

// console.log(res);




//-------- indexOf

// var cars = ["mahindra","tata"];
// var res = cars.indexOf("tata");
// console.log(res);

// var cars = ["mahindra","tata"];
// var res = cars.indexOf("fruits");
// console.log(res);



//-------- forEach 

// var cars = ["mahindra", "tata", "maruti"]
// cars.forEach(function(){
//     console.log("hello");
// }) 


// var cars = ["mahindra", "tata", "maruti"]
// cars.forEach(function(element, index, arr){
//     console.log(element + "is at:" + index);
//     console.log(arr);
// }) 





//------ filter  method

// var numberList = [2,10,5,15,7];

// var res = numberList.filter(function(element){
//     return element > 8;                          // compair with size or greater-than
    
// })
// console.log(res);


// var numberList = [["2"],["10","12","6"],"5",["15","7","20"]];

// var res = numberList.filter(function(element){
//     return element.length > 2;                        // compair with length    
// })
// console.log(res);





//------ map method 

// var numberList = [15,7,2];

// var res = numberList.map(function(element){
//     // return element * 2;                        // multiply with array    
//     return element + 2;                        // multiply with array    
// })
// console.log(res);





//---------- reduce method

// var numberList = [10,2,5,67,3,45,];
// var res = numberList.reduce(function(acc,element){
//     console.log(acc);
//     console.log(element);
//     return acc + element;

// },0);                        // where to start accumulator

// console.log(res);



// var numberList = [10,2,5,67,3,45];
// var res = numberList.reduce(function(acc,element){
//     if(element > 10){
//         acc.push(element);
//         return acc;
//     }
//     else{
//         return acc;
//     }

// },[]);                       // where to start accumulator
// console.log(res);






//------------------ compare max value in array with prompt

// var arr = []
// do {
//     var enterNumber = prompt("Enter Your Number\n for exit, type exit");
//     if(enterNumber.toLocaleLowerCase() === "exit") {    // TYPE EXIT ANY FORMATE IT TAKE EXIT ONLY LOWERCASE 
//         alert("You are Exit");
//         break;
//     }
//         enterNumber = parseInt(enterNumber);
//         if(!isNaN(enterNumber)){
//            arr.push(enterNumber);
//         }    
      

// }while(true)    // run forever

// if(arr.length === 0) {
//     alert("array is empty");
// }
// else{
//     var res = arr.reduce(function(acc, element){
//         if(element > acc){
//             return element;
//         }
//         else{
//             return acc;
//         }
//     },arr[0])            // for comparing (-) minus number 
//     console.log(res);

// }



//------------------- object 

// var personData = {
//     firstName : "Rohit",
//     lastName : "Yadav",
//     age : 24,    
//     email : "abc@gmail.com"
// };
//  personData.age = 23;                    // replacing new object 
 
//  personData.add = "abc de fgh";         // adding new object 

// console.log(typeof personData);         //type of object
// console.log(personData);
// console.log(personData.age);             //type of object


// var personData = {
//     firstName : "Rohit",
//     "first Name": "ROHIT YADAV",
//     lastName : "Yadav",
//     email : "abc@gmail.com"
// };

//   var age = 24;

// console.log(personData.age);                //not work      
// console.log(personData[age]);               // NOT WORK
// console.log(personData["email"]);
// console.log(personData[age]);
// console.log(personData.first Name);            // NOT WORK 
// console.log(personData["first Name"]);          // must in inverted-commas("") 


// var personData = {
//     firstName : "Rohit",
//     "first Name": "ROHIT YADAV",
//     lastName : "Yadav",
//     age : 24,
//     email : "abc@gmail.com",
//     skills:["html","css","bootstrap"],

//     display:function(){
//         console.log(this.firstName + " " + this.age);
//     }



// };
// personData.display();



//--------object method

// var personData = {
//     firstName : "Rohit",
//     "first Name": "ROHIT YADAV",
//     lastName : "Yadav",
//     age : 24,
//     email : "abc@gmail.com",
//     skills:["html","css","bootstrap"],
     
//     displaySKILLS:function(){
//         this.skills.forEach(function(e){
//             console.log(e);
//         })
//     }

// personData.displaySKILLS();



    
// };
// personData.displaySKILLS();



//-------- object with array

// var employeesData = [
//     {
//         name : "mike",
//         age : "10",
//         skills : ["bootstrap","css","html","wordpress"]
//     },
//     {
//         name : "john",
//         age : "20",
//         skills : ["bootstrap","css","html","jquery"]
//     },
//     {
//         name : "dave",
//         age : "30",
//         skills : ["bootstrap","css","javascript","wordpress"]
//     },
//     {
//         name : "pain",
//         age : "40",
//         skills : ["bootstrap","jquery","javascript","wordpress"]
//     }


// ]

// var res = employeesData.filter(function(e){
//     console.log(e.skills);
//     if(e.skills.indexOf("jquery") === -1) {
//         return false;
//     }else{
//         return true;
//     }

// })
//    console.log(res);




 //-------- object with for loop  


//  var personData = {
//         firstName : "Rohit",
//         "first Name": "ROHIT YADAV",
//         lastName : "Yadav",
//         age : 24,
//         email : "abc@gmail.com",
//         skills:["html","css","bootstrap"]

// }
// for(var res in personData){
//     console.log(res);
// }



//---------- call a function

// function fun(){
//     console.log("hello wold");
// }
// fun();



//---------- global variable and local variable

// var a = 5;          // global variable
// function num(){
//     var b = 10;         // local variable
//     console.log(a);
// }
// console.log(a);         // global variable


// var a = "zero";
// function num(){
//     var b = "one";       // local variable
//     var a = "two";
//     console.log(a);
// }
// console.log(a);       // global variable
// num();                   // local variable


// var a = "zero";
// function num(){
//     var b = "one";       // local variable
//         a = "two";
//     console.log(a);
// }
// console.log(a);       // global variable
// num();               // local variable




//=====================function


// function dsp(){
//     console.log("hello world");
// }
//     dsp(); 


 
//-------- function in loop    

    // function dsp(){
    //     console.log("hello world");
    // }
    // for(var i = 0; i < 5; i++){
    //     dsp();
    // }    
    
        

//---------- parameter

// function para(a , b){
//     console.log(a + b); 
// }
// para(10, 20);


// function para(a , b){
//     console.log(a);
//     console.log(b);  
// }
// para(20);


/*
function para(a , b){
    if(a === undefined && b === undefined){
        return 0;
    }else if (b === undefined){
        return a;
    }else{
        return a + b;
    } 
}
console.log( para(1) ); 
*/


// function inArray(arr, item) {
//     document.write(arr.indexOf(item));
// }
// inArray([1,2,3,4,5], 4)





var numList = [10, 3, 50, 30, 22, 24, 98, 77, 56, 34, 10, 1, 24, 3];

numList.unshift(2);
numList.push(50);

numList.pop();
numList.shift();


//------ bigger Number
var bigNumber = 0;
for(var i = 0; i < numList.length; i++){
    if(numList[i] > bigNumber){
         bigNumber = numList[i];
    }
};
//console.log('Big Number is ' + bigNumber);


//------- smallest number
var smallNumber = numList[0];
var a = 0;

for(var i = 0; i < numList.length; i++){
    if(numList[i] < smallNumber){
        
        console.log(numList[i]);
    }else {
        smallNumber = numList[i];

        //console.log( 'a ' +  smallNumber);
    }
   
};



//------- plus
var plusRes = numList.reduce(function(e1, e2){
    return e1 + e2;
});
// console.log(plusRes);


 var plusAdd = 0;
 for(var i = 0; i < numList.length; i++){
    plusAdd += numList[i];
}
// console.log(plusAdd);


//------ greater than 18
var gt = numList.reduce(function(acc, ele, ind, array){
    if(ele > 18){
        acc.push(ele);
        return acc;
    }else{
        return acc;
    }
},[]);
// console.log( ' Gt ' + gt );


var pushGt = [];
for(var i = 0; i < numList.length; i++){
    if(numList[i] > 18){
        pushGt.push(numList[i]);
    }
}
// console.log(pushGt);




//-------- sam value
var numList1 = [10, 3, 50, 30, 22, 24, 98, 77, 56, 34, 10, 1, 24, 3]; 
var numList2 = []
var samV = [];
for(var i = 0; i < numList1.length; i++){
    if(numList2.indexOf(numList1[i])  !=-1){
        //console.log(numList1[i]);
    } else{
        numList2.push(numList1[i]);
    }
}
//console.log(1111,numList2);


// ------- sort
var sortNum = numList.sort(function(val1, val2){
    return val1 - val2;
});
//console.log(sortNum);


// ---- 
var fruits = ['Apple', 'Orange', 'Pineapple', 'Mango', 'Strawberry', 'Pear', 'Grapes'];

//--- sort fruit
var sortFruits = fruits.sort();
// console.log(sortFruits);

// bigger length 
var bigMember = 0;
var result = '';
for(var i = 1; i < fruits.length; i++){
    if(fruits[i].length > bigMember){
        bigMember = fruits[i].length;
        result = fruits[i];
    }
    
    
};
//console.log(bigMember + ", " + result);



























