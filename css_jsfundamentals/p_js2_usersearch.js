var searchInputField = document.getElementById("searchInput");

searchInputField.addEventListener("keyup", function(event){
    console.log("usernameinput"+searchInput.value);
    let searchQuery = event.target.value.toLowerCase();
    let allNamesDOMCollection = document.getElementsByClassName("name");     

    for(let counter = 0; counter < allNamesDOMCollection.length; counter++){
        const currentname = allNamesDOMCollection[counter].textContent.toLowerCase();
        console.log(currentname);
    }
    
})

