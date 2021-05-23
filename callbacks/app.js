const posts = [
    {title: 'post one', body: 'This is post one'},
    {title: 'post two', body: 'this is post two'}
];

//SYNCHRONOUS WAY
// function createPost(post){
//     setTimeout(function(){
//         posts.push(post);
//     }, 2000);
// }

// function getPosts(){
//     setTimeout(function(){
//         let output = '';
//         posts.forEach(function(post){
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML=output;
//     }, 1000);
// }

// createPost({title: 'Post three', body: 'This is post three'});

// getPosts();


//ASYNCHRONOUS WAY
// function createPost(post, callback){
//     setTimeout(function(){
//         posts.push(post);
//         callback();
//     }, 2000);
// }

// function getPosts(){
//     setTimeout(function(){
//         let output = '';
//         posts.forEach(function(post){
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML=output;
//     }, 1000);
// }

// createPost({title: 'Post three', body: 'This is post three'}, getPosts);

//Use promises instead of callbacks
function createPost(post){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            posts.push(post);
            const error = false;
            if (!error) {
                resolve();    
            } else {
                reject('Error: Something went wrong!');
            }
            
        }, 2000);
    });

}

function getPosts(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML=output;
    }, 1000);
}

createPost({title: 'Post three', body: 'This is post three'})
.then(getPosts)
.catch(function(err){
    console.log(err);
});