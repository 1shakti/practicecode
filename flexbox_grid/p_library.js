/* 
    Library (Challenge)

    Write a displayLibrary(books) function
        - Add error catching

    Use CSS Grid instead of Flexbox to style 
        the library container
        - Use a gap of 1rem
        - Display 3 books per row
*/

async function getBooks() {
    let response = await fetch('books.json')
    let books = await response.json()
    let n = 1
    return books.map(book => {
        book.id = n
        n += 1
        return book
    })
}

function getBookHtml(book) {
    return `<div class="my-book">
        <div class="my-book-cover">${book.title}</div>
        <div class="my-book-spine"></div>
        <div class="my-book-footer"></div>
    </div>`
}

getBooks().then(books => {
    document.body.innerHTML = `<div class="my-library">
        ${books.map(getBookHtml).join('')}
    </div>`
})