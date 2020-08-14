// var firstName = prompt("Whats your first name ?");
// var lastName = prompt("Whats your last Name ?");
// var age = prompt("Whats yor age ?");

// alert("hello! " + firstName +" "+lastName +  " Welcome to our gallery");
// console.log(firstName +" "+lastName + " just veiwed your page");
// console.log(firstName +" " +lastName + " age is " + age);

// var rem = age/4;

// var days = (rem*366) + ((age-rem)*365);

// alert("you lived for " + days);

// var stringNum=prompt("enter a negative num. for eg -10");
// var num = Number(stringNum);
// console.log("number between -10 to 20");
// while(num!=20)
// {
// console.log(num);
// num++;
// }
// var stringNum = prompt("Enter a positive num. for eg 10 ");
// var num = Number(stringNum);
// console.log("even number between 10 to 40");
// while(num<=40)
// {
//     if((num%2) === 0)
//     {
//         console.log(num);
//     }
//     num++;
// }

// var num = 300;
// console.log("odd number between 300 and 333");
// while(num<=333)
// {
//     if((num%2)!==0)
//     {
//         console.log(num);
//     }
//     num++;
// } 

// var num = 5;
// console.log("number divisible by 3 & 5 between 5 and 50 ");

// while(num<=50)
// {
//     if(num % 5 === 0 &&  num % 3 === 0)
//     {
//         console.log(num);
//     }
//     num++;
// }

// for loop

// console.log("no between -10 an 20");

// for(var i=-10; i<20; i++)
// {
//     console.log(i);
// }

// console.log("even num between 10 and 40");

// for(var i=10; i<=40; i++)
// {
//     if(i % 2 ===0)
//     {
//         console.log(i);
//     }
// }

// console.log("odd num between 300 and 333");

// for(var i=300; i<=333; i++)
// {
//     if(i % 2 !== 0)
//     {
//         console.log(i);
//     }
// }

// console.log("num divisible by 5 and 3 between 5 and 50");

// for(var i=5; i<=50; i++)
// {
//     if(i % 3 === 0 && i % 5 === 0)
//     {
//         console.log(i);
//     }
// }

// var value = isEven(Number(prompt("enter a number to check even or odd ")));

// console.log(value);

// function isEven(num)
// {
//     if(num % 2 === 0)
//     {
//         return "True";
//     }
//     else
//     return "False";
// }

// var num = Number(prompt("Enter a number yo calculate a factorial"));

// console.log( num + "! is " + factorial(num));

// function factorial(num){
//     var ans = 1;
//     for(var i=1; i<=num; i++){
//        ans = i * ans;
//     }
//     return ans;
// }

function kababToSnake(str){
    var newStr = str.replace(/-/g , "_");
    return newStr;
}