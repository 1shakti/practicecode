/**
Challenge:

1. Google for "how to use fetch with json"
2. Should find a top result from MDN
3. MANUALLY copy over the fetch, but using the URL below 👇
    https://dog.ceo/api/breeds/image/random
*/

fetch("https://dog.ceo/api/breeds/image/random")
    .then(Response => Response.json())
    .then(data => {
        console.log(data)
        document.getElementById("image-container").innerHTML = `<img src="${data.message}">` 
    })
   


 /**
Challenge: 

1. Fetch a random activity from the Bored API
url: https://apis.scrimba.com/bored/api/activity

2. Display the text of the activity in the browser
*/

fetch("https://apis.scrimba.com/bored/api/activity")
    .then(Response => Response.json())
    .then(data => {
        console.log(data)
        document.getElementById("activity-name").textContent = data.activity
    })

 

 /**
Challenge: 

Fetch a list of todos from the JSON Placeholder API:

BaseURL: https://apis.scrimba.com/jsonplaceholder/
Endpoint: /todos

This time however, explicitly set the request method to "GET"
console.log the results
*/

fetch("https://apis.scrimba.com/jsonplaceholder/todos", {method: "GET"})
.then(res => res.json())
.then(data => console.log(data))   