// var num = 11;
// var value = 1.0;
// var name = "Aizaz";
// var array = [
//   1,
//   "2",
//   true,
//   10.6,
//   [],
//   {
//     id: 1,
//     name: "Zohaib",
//     post: {
//       name: "Cartoon",
//     },
//   },
// ];
// var object = {
//   id: 1,
//   name: "Zohaib",
//   post: {
//     name: "Cartoon",
//   },
// };

// // console.log(array[3], object.name, object.post.name)
// // console.log(typeof num, typeof value, typeof name, typeof isValid, typeof array, typeof object)

// var addition = num / 2 + num * value;
// // console.log(addition)
// // console.log(9 === '9')
// // console.log(num >= 1 && num <= 10)
// // console.log(9 >= 9)
// // console.log(9 !== 10)

// if (num < 10) {
//   console.log("This niumber is smaller than 10");
// }
// if (num === 10) {
//   console.log("Numbe is equal to 10");
// }

// name === "Uzair" ? console.log("Teacher") : console.log("Student");

// var numCheck = num % 2 === 0
//   ? `${num} is Even Number`
//   : `${num} is Odd Number`;
//   console.log(numCheck)

// var isValid = true;
// var output = !isValid;
// console.log(output)

// var num2 = 7;
// if(num2 < 10 && num2 < 5) {
//         console.log("smaller than 5")
// }
// else {
//     if(num2 < 10 && num2 > 5){
//             console.log("greater than 5")
//     }
//     else {
//     console.log("Num is invalid")
//     }
// }

// const num2Check = num2 < 10 && num2 < 5 ? "smaller than 5" : num2 < 10 && num2 > 5 ? "greater than 5" : "Num is invalid"
// console.log(num2Check)

// var number = "true";
// if(typeof number === "number") {
//   console.log(`${number} is of type number`)
// }
// else if(typeof number === "string") {
//   console.log(`${number} is of type string`)
// }
// else {
//   console.log(`${number} is of type boolean`)
// }

// var color = "blue";
// var a = 5, b=10, operator="a";

// if(operator === "+")
//   console.log("a+b=",a+b)
// else if(operator === "-")
//   console.log("a-b=",a-b)
// else
//   console.log("a*b=",a*b)

// switch(operator) {
//   case '+': 
//     console.log("a+b=",a+b)
//     break;
//   case '-': 
//     console.log("a-b=",a-b)
//     break;
//   case '/': 
//     console.log("a/b=",a/b)
//     break;
//   case '*': 
//     console.log("a*b=",a*b)
//     break;
//   default: 
//     console.log("Please ennter correct operator value");
// }

// for(var i=0; i<=9; i++)
// console.log("hello i am uzair")
// var j=0;
// while(j<=9) {
//   console.log(j+"while loop");
//   j++
// }

// var k=10;
// do {
//   console.log(k+" do while loop");
//   k++
// }
// while(k<=9)



var array = [1, 2, 3, 4, 5];
// var sum = (num) => {
//   for(var i=0; i<array.length; i++)
//   console.log(`${array[i]} + ${num} = `, array[i]+num);
//   console.log("******************")
// }

// sum(5)

// var print = (num) => {
//   return num * 5;
// }

// for(var i =0; i<array.length; i++) {
//   var returnedNum = print(array[i], 8);
//   console.log(returnedNum);
// }

var table = (num) => {
  for(var i=10; i>0; i--) {
    console.log(`${num} * ${i} = ${num*(i)}`)
  }
}
table(15);