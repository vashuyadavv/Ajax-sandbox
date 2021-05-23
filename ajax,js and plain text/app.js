//Create an event listener
document.getElementById('button').addEventListener('click', loadData);

function loadData(){
    //Create an XHR object
    const xhr = new XMLHttpRequest();

    //OPEN 
    //console.log("readyState: ", xhr.readyState); //readyState = 0
    xhr.open('GET', 'data.txt', true);
    //console.log("readyState: ", xhr.readyState); //readyState = 1
   
    //Optional - Used for spinner/loaders
    // xhr.onprogress = function(){
    //     console.log("readyState: ", this.readyState);  //readyState = 3
    // }

    xhr.onload = function(){
        //console.log("readyState: ", xhr.readyState) //readyState = 4
        if(this.status === 200 ){
            //console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }
    
    // xhr.onreadystatechange = function(){
    //     //console.log("readyState: ", xhr.readyState) //readyState = 2,3,4
    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText);
    //     }
    // }   //OLDER SYNTAX
    xhr.onerror = function(){
        console.log("request error..");
    }
    xhr.send();
    //readyState Values
        //0: request not initialized
        //1: server connection established
        //2: request received
        //3: processing request
        //4: request finished and response is ready

    //HTTP statuses
        //200: "Ok"
        //403: "Forbidden"
        //404: "Not Found"
}