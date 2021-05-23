// EasyHTTP library for making HTTP requests

class EasyHTTP{
    //Make HTTP get request
    // get(url){
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => data) //if you try to return it here, it will throw an error, that's why it is important to use promises or callbacks
    //         .catch(err => err);
    // }

    get(url){
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res=>res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }

    //Make post HTTP request
    post(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type' : 'application/json'
                }, 
                body: JSON.stringify(data)
            })
            .then(res=>res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }

    //Make Put HTTP request
    put(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }

    //Make DELETE HTTP request
    delete(url){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(()=> resolve("Resource deleted...."))
            .catch(err => reject(err));
        });
    }
}