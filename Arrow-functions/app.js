// const sayHello = function(){
//     console.log("Hello");
// }
// 

// const sayHello = () => {
//     console.log("Hello");
// }

//One line functions does not need braces
// const sayHello = () => console.log("hello");

//One line returns
// const sayHello = () => "Hello";

//Same as above
// const sayHello = function(){
//     return 'Hello';
// }

//Return object
// const sayHello = () => ({msg: 'Hello'}) //this will return undefined because the object literal is being looked as an function. Wrap it it brackets.

//Single param does not need parenthesis
// const sayHello = name => console.log(`hello ${name}`)

//parenthesis is required for multiple parameters
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);
// sayHello('john', 'constantine');

const users = ['dexter', 'john', 'raymond'];

// const userLengths = users.map(function(user){
//     return user.length;
// })

//Shorter
// const userLengths = users.map((user) => {
//     return user.length;
// })

//Shortest
const userLengths = users.map(user => user.length);
console.log(userLengths);
