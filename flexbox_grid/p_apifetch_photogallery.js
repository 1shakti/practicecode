/* 
    2. 
       Write a function to create the my-photos Component
       
       Create a Column Flexbox container around my-photos
       
       Create a new img and place it, centered, above my-photos
        -This should be hidden initially
        -Also give it the my-photo class
    
       Create a "click" event for each photo in my-photos
        -When clicked, load the clicked photo into the new img tag
*/

async function getPhotos() {
    let response = await fetch("D:/scrimba/practicecode/flexbox_grid/photos.json")
    let photos = await response.json()
    return photos
}

function getPhotosHtml(photos) {
    let myPhotosHtml = photos.map(photo => {
        return `<img class="my-photo" src="https://picsum.photos/id/${photo.id}/100/100" alt="${photo.title}"/>`
    }).join('')
    
    return `<div class="my-photos">${myPhotosHtml}</div>`   
}

getPhotos().then(photos => {    
    document.body.innerHTML = `<div class="my-gallery">
        <img style="display: none;" class="my-photo" id="my-selected-photo" src="https://picsum.photos/id/1/200/200" />
        ${getPhotosHtml(photos)}
    </div>`    
    
    let myPhotoImgs = Array.from(document.getElementsByClassName("my-photo"))
    myPhotoImgs.forEach(photoImg => {
        photoImg.addEventListener("click", event => {
            let selectedPhotoSrc = `${photoImg.src.substr(0, photoImg.src.length - 7)}200/200`

            let selectedPhoto = document.getElementById("my-selected-photo")
            selectedPhoto.src = selectedPhotoSrc
            selectedPhoto.style.display = "inline"
        })
    })
})