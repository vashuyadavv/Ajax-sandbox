// async function myFunc(){
//     //return "Hello";
//     //If we wanna do anything asynchronous we can use await
//     //which will wait for producing code to finish and then 
//     // consuming code will execute
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Hello'), 1000);
//     });

//     const error = true;
//     if (!error) {
//         const res = await promise; //Wait until promise is reolved
//         return res;        
//     } else {
//         await Promise.reject(new Error('Something went wrong'));
//     }


// } //will return a promise

// //console.log(myFunc());
// myFunc()
//     .then(res => console.log(res))
//     .catch(error => console.log(error));


async function getUsers(){
    //await response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //only proceed once it's resolved
    const data = await response.json();
    //only proceed once second promise is resolved
    return data;
}
getUsers()
    .then(res => console.log(res));