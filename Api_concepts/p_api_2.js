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
