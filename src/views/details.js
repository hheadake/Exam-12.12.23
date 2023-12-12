import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as recipeService from "../api/data.js"
import { getUserData } from "../util.js";
const detailsTemplate = (book, onDelete) => html `
<section id="details">
<div id="details-wrapper">
  <img id="details-img" src="${book.imageUrl}" alt="example1" />
  <p id="details-title">${book.model}</p>
  <div id="info-wrapper">
    <div id="details-description">
      <p class="price">Price: €${book.price}</p>
      <p class="weight">Weight: ${book.weight} kg</p>
      <p class="top-speed">Top Speed: ${book.speed} kph</p>
      <p id="car-description">${book.about}</p>
    </div>
    <!--Edit and Delete are only for creator-->
    ${book.canEdit ? html` 
    <div id="action-buttons">
      <a href="/edit/${book._id}" id="edit-btn">Edit</a>
      <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
    </div>` : null }
  </div>
</div>
</section>
`;


export async function detailsPage(ctx) {

    const bookId = ctx.params.id;
    const book = await recipeService.getById(bookId)
    const userData = getUserData();
    if(userData && userData.id == book._ownerId) {
        book.canEdit = true
    }
    



     
     ctx.render(detailsTemplate(book,onDelete))

     async function onDelete(){
          const choice = confirm('Are you sure u want to delete this?') 
        if (choice) {
            await recipeService.deleteById(bookId)
            ctx.page.redirect('/catalog')
        }
     }
}