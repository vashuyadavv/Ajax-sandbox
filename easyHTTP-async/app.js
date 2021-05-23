const http = new EasyHTTP();

//Get Users
// const users=http.get('https://jsonplaceholder.typicode.com/users');
// console.log(users);

// const users=http.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => console.log(err));
//will return an array

//Create user data
const data = {
    name: 'Dexter Morgan',
    username: 'dex', 
    email: 'dex@mailtest.com'
}

//Create post
// http.post('https://jsonplaceholder.typicode.com/users', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

// //Update post
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));


//Delted post
http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(err => console.log(err));