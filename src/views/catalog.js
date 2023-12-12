import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as bookservice from "../api/data.js"

const catalogTemplate = (books) => html `
 <h3 class="heading">Our Cars</h3>
<section id="dashboard">
${books.map(previewTemplate)}


${books.length == 0
    ? html `<h3 class="nothing">Nothing to see yet</h3>`
: nothing }
</section>`;


const previewTemplate = (book) => html `
<div class="car">
<img src="${book.imageUrl}" alt="example1" />
<h3 class="model">${book.model}</h3>
<div class="specs">
  <p class="price">Price: €${book.price}</p>
  <p class="weight">Weight: ${book.weight} kg</p>
  <p class="top-speed">Top Speed: ${book.speed} kph</p>
</div>
<a class="details-btn" href="/details/${book._id}">More Info</a>
</div>


    
` 



export async function catalogPage(ctx) {
    const books = await bookservice.getAll()
    console.log(books)
    ctx.render(catalogTemplate(books))
}



