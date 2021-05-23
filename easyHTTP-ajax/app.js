const http = new easyHTTP();

//GET Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err,response){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(response);
//     }
// });

//GET single posts
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err,response){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(response);
//     }
// });


//Create data
const data = {
    title: 'custome post',
    body: 'I must remain calm with patience and gratitude'
};

//Add post
// http.post('https://jsonplaceholder.typicode.com/posts',data, function(err, response){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(response);
//     }
// })

//Update post
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, response){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(response);
//    }
//}); ///this will update data with id 1


//Delete post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response){
    if(err){
        console.log(err);
    }else{
        console.log(response);
    }
});