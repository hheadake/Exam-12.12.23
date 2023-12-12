import { html } from "../../node_modules/lit-html/lit-html.js";
import { submitHandler } from "../util.js";
import * as recipeService from "../api/data.js"

// <form @submit=${onSubmit} class="create-form">

const createTemplate = (onSubmit) => html`<section id="create">
<div class="form form-auto">
  <h2>Share Your Car</h2>
  <form @submit=${onSubmit} class="create-form" method="POST">
    <input type="text" name="model" id="model" placeholder="Model"/>
    <input
      type="text"
      name="imageUrl"
      id="car-image"
      placeholder="Your Car Image URL"
    />
    <input
      type="text"
      name="price"
      id="price"
      placeholder="Price in Euro"
    />
    <input
      type="number"
      name="weight"
      id="weight"
      placeholder="Weight in Kg"
    />
    <input
      type="text"
      name="speed"
      id="speed"
      placeholder="Top Speed in Kmh"
    />
    <textarea
      id="about"
      name="about"
      placeholder="More About The Car"
      rows="10"
      cols="50"
    ></textarea>
    <button type="submit">Add</button>
  </form>
</div>
</section>`;


export function createPage(ctx) {
    ctx.render(createTemplate(onSubmit))


async function onSubmit(event) {

    event.preventDefault();

    const data = new FormData(event.target)

    const book = {
        model: data.get('model'),
        imageUrl: data.get('imageUrl'), 
        price: data.get('price'),
        weight: data.get('weight'),
        speed: data.get('speed'),
        about: data.get('about'),
      
    }

    if (book.model == '' 
    || book.imageUrl == '' 
    || book.price == ''
    || book.weight == ''
    || book.speed == ''
    || book.about == '') {
        return alert('All fields are required!')
    }

    await recipeService.create(book)
    event.target.reset();
    ctx.page.redirect(`/catalog`)
} 
}