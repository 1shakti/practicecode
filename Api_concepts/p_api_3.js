/**
 Challenge:
 
 GET a list of blog from the JSON Placeholder API.
 
 BaseURL: https://apis.scrimba.com/jsonplaceholder/
 Endpoint: /posts
 
 Since there's so many posts, let's limit the array to just 5 items.
 You can use the `.slice()` array method to just grab the first 5 objects
 from the data array that comes back from the API
 */


let postArray = [];
const titleInput = document.getElementById("post-title");
const bodyInput = document.getElementById("post-body");
const form = document.getElementById("new-post");


function renderPosts(){
    let html = "";
        for(let post of postArray){
            html += 
            `<h3>${post.title}</h3>
             <p>${post.body}</p>
             <hr />
            `
        }
        document.getElementById("blog-list").innerHTML = html;
}

 fetch("https://apis.scrimba.com/jsonplaceholder/posts",  { method : "GET" })
    .then(resp => resp.json())
    .then(data => {
        postArray = data.slice(0, 5);
        renderPosts();   
    })

    /**
 Challenge:
 
 * Listen for the "submit" event on the form (which will happen when the button is clicked)
    * (Don't forget to preventDefault on the form so it doesn't refresh your page. Google "form preventDefault" if you're not sure what I'm talking about)
 * Combine the title value and body value into an object (with a "title" property and "body" property)
 * Log the object to the console

*/

form.addEventListener("submit", function(e) {
    e.preventDefault()
    const postTitle = titleInput.value
    const postBody = bodyInput.value
    const data = {
        title: postTitle,
        body: postBody
    }
    
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }
    
    fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
        .then(res => res.json())
        .then(post => {
            /**
             * Challenge: Update the DOM with the new blog entry
             */
             
            postArray.unshift(post);
            renderPosts();
            form.reset();
        })
})


fetch("https://apis.scrimba.com/jsonplaceholder/todos" , {
    method : "POST",
    body: JSON.stringify({
        title: "BUy",
        completed: false
    }),
    headers:{
        'content-Type': 'application/json'
    }
})
    .then(resp => resp.json())
    .then(data => console.log(data))

