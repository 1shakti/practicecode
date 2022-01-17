/**
 * Challenge part 2: Display the image's author
 * 
 * With the data you've already fetched, display the name of the 
 * image author on the page. They show up as the "user" in the data
 * returned from the API.
 * 
 * Don't worry about positioning the author in the lower-left yet.
 */

 fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
 .then(res => res.json())
 .then(data => {
     document.body.style.backgroundImage = `url(${data.urls.regular})`;
     document.getElementById("author").textContent = `By: ${data.user.name}`
    })
 

/*
# Resolved promises quiz

1. What is a promise (in your own words)?
A promise that an operation that normally takes a bit of time
will eventually finish running. I.O.U. (I owe you)

2. Which part of the code we have so far is a promise?
The fetch request returns a promise object.

3. What are the three states a promise can be in?
(1) Pending, (2) Resolved (fulfilled), (3) Rejected

4. What does it mean when a promise is "resolved" (or fulfilled)?
The task we wanted to perform finished successfully.

5. How do we tell the code to do something only AFTER a
   promise is resolved?
.then() method
*/

//PromiseRejectionEvent

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=naturegdgdfgfdg")
.then(resp => resp.json())
.then(data => {
    console.log(data);
    throw Error("I'm an error!");
})
.catch(err => console.log("something went wrong!"))



fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong");
        }
        return res.json();
    })
    .then(data => {
        /**
         * Challenge: Add the name and icon of the cryptocurrency
         * to the upper-left of the dashboard page
         * 
         * Use `data.name` and `data.image.small` to access that info
         */

         document.getElementById("crypto").innerHTML = `
         <img src=${data.image.small} />`;
    })
    .catch(err => console.error(err));