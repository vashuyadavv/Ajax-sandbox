//Fetch API is new standard to fetch data instead of using Ajax.
//Fetch return promises
document.getElementById('button1').addEventListener('click', getText);

//Get local text data
function getText(){
    fetch('test.txt')
    // .then(function(res){
    //     //console.log(res);
    //     return res.text();
    // })
    .then(res => res.text())
    .then(data =>{
        //console.log(data);
        document.getElementById('output').innerHTML=data;
    })
    .catch(err =>
        console.log(err) //You have to change the filename in order to catch error
    );
}

document.getElementById("button2").addEventListener("click", getJson);

//Get local json data
function getJson(){
    fetch("posts.json")
        .then(res => res.json())
        .then(data => {
            //console.log(data); //it's an array you we'll have to loop through it
            let output='';
            data.forEach(function(post){
                output +=  `<li>${post.title}</li>`;
            });
            document.getElementById("output").innerHTML=output;
        })
        .catch(err => console.log(err));
}

document.getElementById("button3").addEventListener("click", getExternal);

//Get external API
function getExternal(){
    fetch("https://api.github.com/users")
        .then(res => res.json())
        .then(data => {
            //console.log(data)
            let output="";
            data.forEach(function(user){
                output += `<li>${user.login}</li>`;
            });
            document.getElementById("output").innerHTML=output;
        })
        .catch(err => console.log(err));
}