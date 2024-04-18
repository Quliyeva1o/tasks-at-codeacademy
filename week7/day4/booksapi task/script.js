import { getAllBooks, deleteBooksByID } from "./main.js"
const cards = document.querySelector('.cards')
const apiurl = "https://6620bbfc3bf790e070b07208.mockapi.io/books/books"

getAllBooks(apiurl).then((res) => {
    const booksarr = res.books
    booksarr.forEach(book => {
        cards.innerHTML += `
<div class=" col-lg-3 col-md-6 col-sm-12 ">
<div class="card p-3">
<h1>${book.name}</h1>
<h4>${book.author}</h4>
<h4>${book.publishYear}</h4>
<h4>${book.genre}</h4>
<p>${book.createdAt}</p>
<button class="btn detbtn" data-id=${book.id} >del</button>
</div></div>
`
    });

    let delBtns = document.querySelectorAll(".detbtn")
    delBtns.forEach((delbtn) => {
        delbtn.addEventListener('click', (e) => {
            e.preventDefault()
            let iddel = delbtn.dataset.id
            deleteBooksByID(apiurl, iddel).then((response) => {
              console.log(response);
                cards.textContent = ""
                
                getAllBooks(apiurl).then((res) => {
                    const booksarr = res.books
                    console.log((booksarr));
                    booksarr.forEach(book => {
                    cards.innerHTML += `
                <div class=" col-lg-3 col-md-6 col-sm-12 ">
                <div class="card p-3">
                <h1>${book.name}</h1>
                <h4>${book.author}</h4>
                <h4>${book.publishYear}</h4>
                <h4>${book.genre}</h4>
                <p>${book.createdAt}</p>
                <button class="btn detbtn" data-id=${book.id} >del</button>
                </div></div>
                `
                    });
                })
            })

        })


    })
})


