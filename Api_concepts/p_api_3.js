/**
 Challenge:
 
 GET a list of blog from the JSON Placeholder API.
 
 BaseURL: https://apis.scrimba.com/jsonplaceholder/
 Endpoint: /posts
 
 Since there's so many posts, let's limit the array to just 5 items.
 You can use the `.slice()` array method to just grab the first 5 objects
 from the data array that comes back from the API
 */

 fetch("https://apis.scrimba.com/jsonplaceholder/posts",  { method : "GET" })
    .then(resp => resp.json())
    .then(data => {
        const postArrs = data.slice(0, 5)

        let html = "";
        for(post of postArrs){
            html += 
            `<h3>${post.title}</h3>
             <p>${post.body}</p>
             <hr />
            `
        }
        document.getElementById("blog-list").innerHTML = html;
        console.log(postArrs)
        
    })

    /**
 Challenge:
 
 * Listen for the "submit" event on the form (which will happen when the button is clicked)
    * (Don't forget to preventDefault on the form so it doesn't refresh your page. Google "form preventDefault" if you're not sure what I'm talking about)
 * Combine the title value and body value into an object (with a "title" property and "body" property)
 * Log the object to the console

*/

document.getElementById("new-post").addEventListener("submit", function(e){
        e.preventDefault();
        const postTitle = document.getElementById("post-title").value;
        const postBody = document.getElementById("post-body").value;
        const data = {
            title: postTitle,
            body: postBody
        }
        console.log(data);

})


fetch("https://apis.scrimba.com/jsonplaceholder/todos" , {
    method : "POST",
    body: JSON.stringify({
        title: "BUy",
        completed: false
    })
})
    .then(resp => resp,json())
    .then(data => console.log(data))