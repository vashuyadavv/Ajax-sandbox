// EasyHTTP library for making HTTP requests

class EasyHTTP{
    //Make HTTP get request
    // get(url){
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => data) //if you try to return it here, it will throw an error, that's why it is important to use promises or callbacks
    //         .catch(err => err);
    // }

    async get(url){
        const response = await fetch(url);

        const resData = await response.json();

        return resData;
    }

    //Make post HTTP request
    async post(url, data){
        
        const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type' : 'application/json'
                }, 
                body: JSON.stringify(data)
        });

        const resData = await response.json();
        return resData;

        
    }

    //Make Put HTTP request 
    async put(url, data){
        
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const resData = await response.json();
            return resData;

        
    }

    //Make DELETE HTTP request
    async delete(url){
        
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });
        const resData = await 'response deleted...';
        return resData;
        
    }
}