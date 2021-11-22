var searchInputField = document.getElementById("searchInput");

searchInputField.addEventListener("keyup", function(event){
    let searchQuery = event.target.value.toLowerCase();
    let allNamesDOMCollection = document.getElementsByClassName("name");     

    for(let counter = 0; counter < allNamesDOMCollection.length; counter++){
        const currentname = allNamesDOMCollection[counter].textContent.toLowerCase();
        if(currentname.includes(searchQuery)){
            allNamesDOMCollection[counter].style.display="block";
        }else{
            allNamesDOMCollection[counter].style.display="none";
        }  
    }
    
});

