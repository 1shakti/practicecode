/* 
    1. 
    
    Load users from users.json (originally from https://jsonplaceholder.typicode.com/users)
    
    Create a simple component that displays the user's username 
        -Alongside a green circle
        -The username and circle should be in individual divs
        -Both should be vertically and horizontally centered
        -The component should only be wide enough to Fit its Content (and some padding)
*/

async function getUsers() {
    let response = await fetch("users.json")
    let users = await response.json()
    return users
}

getUsers().then(users => {
    let sampleUser = users[0]
    let userDiv = `
        <div class="my-online-user">
            <div class="user-username">${sampleUser.username}</div>
            <div class="user-online"></div>
        </div>
    `
    
    document.body.innerHTML = userDiv
})
