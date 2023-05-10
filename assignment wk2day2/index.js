 function myFetch(method, url, body=null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        
        xhr.open(method, url);
        
        xhr.responseType = 'json';

        if(body)
            xhr.setRequestHeader('Content-Type', 'application/json');
        
        xhr.onload = () => {
            if(xhr.statusn>=400){
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        };
        
        xhr.onerror = () => {
            reject(xhr.response);
        };

        if(body)
            xhr.send(JSON.stringify(body));
        else
            xhr.send();
    })
};

myFetch('GET', 'https://jsonplaceholder.typicode.com/posts/1')
.then(res => {
    console.log('GET call: -----------------------------')
    console.log(res);
})
.catch(err => console.log(err));


myFetch('POST', 'https://jsonplaceholder.typicode.com/posts', 
{
    title: 'New post',
    body: 'This is a new post',
    userId: 1
})
.then(response => {
    console.log('POST request: -----------------------------');
    console.log(response)
})
.catch(error => console.error(error));

myFetch('PUT', 'https://jsonplaceholder.typicode.com/posts/1', 
{
    id: 1,
    title: 'Update Post',
    body: 'This is a updated post',
    userId: 1
})
.then(response => {
    console.log('PUT call: -----------------------------');
    console.log(response);
})
.catch(error => console.error(error));
  
myFetch('DELETE', 'https://jsonplaceholder.typicode.com/posts/1')
.then(response => {
    console.log('DELETE call: -----------------------------')
    console.log(response)
})
.catch(error => console.error(error));