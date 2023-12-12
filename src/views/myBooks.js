import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as bookService from "../api/data.js"
import { getUserData } from "../util.js";

const myBooksTemplate = (books) => html` <section Data="my-books-page" class="my-books">
<h1>My Books</h1>
<!-- Display ul: with list-items for every user's books (if any) -->
${books.length == 0 ?
 html `<p class="no-books">No books in database!</p>`
: html `<ul class="my-books-list">
    <li class="otherBooks">
        ${books.map(previewTemplate)}
    </li>
</ul>` } `;

const previewTemplate = (book) => html `

                <ul class="other-books-list">
    <li class="otherBooks">
        <h3>${book.title}</h3>
        <p>Type: ${book.type} </p>
        <p class="img"><img src="${book.imageUrl}"></p>
        <a class="button" href="/details/${book._id}">Details</a>
    </li>
</ul> `


  
 

export async function myBooksPage(ctx) {
    let userData = getUserData();


    let books = await bookService.getMyBooks(userData._id);


    
    ctx.render(myBooksTemplate(books))
}