import { html } from "../../node_modules/lit-html/lit-html.js";
import * as recipeService from "../api/data.js"
import { submitHandler } from "../util.js";
//<form @submit=${onSubmit} id="edit-form" action="#" method="POST">


const editTemplate = (motor, onSubmit) => html`<section id="edit">
<div class="form form-auto">
  <h2>Edit Your Car</h2>
  <form class="edit-form">
    <input type="text" name="model" id="model" placeholder="Model" />
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
    <button type="submit">Edit</button>
  </form>
</div>
</section>`;


export async function editPage(ctx) {

const motorId = ctx.params.id;
const motor = await recipeService.getById(motorId)



    ctx.render(editTemplate(motor, submitHandler(ctx, onSubmit)))
}

async function onSubmit(ctx, data, event) {

    const motorId = ctx.params.id;

    if(Object.values(data).some(f => f == '')) {
        return alert('All fields are required!');
    }

    const result = await recipeService.update(motorId, {
        title: data.title,
        description: data.description,
        imageUrl: data.imageUrl,
        type: data.type,
        
    });



    event.target.reset();
    ctx.page.redirect(`/details/` + motorId)
}