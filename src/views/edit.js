import { html } from "../../node_modules/lit-html/lit-html.js";
import * as recipeService from "../api/data.js"
import { submitHandler } from "../util.js";
//<form @submit=${onSubmit} id="edit-form" action="#" method="POST">


const editTemplate = (motor, onSubmit) => html`<section id="edit">
<div class="form form-auto">
  <h2>Edit Your Car</h2>
  <form @submit=${onSubmit} class="edit-form" method="POST">
    <input type="text" name="model" id="model" placeholder="Model" />${motor.model}
    <input
      type="text"
      name="imageUrl"
      id="car-image"
      placeholder="Your Car Image URL"
    />${motor.imageUrl}
    <input
      type="text"
      name="price"
      id="price"
      placeholder="Price in Euro"
    /> ${motor.price}
    <input
      type="number"
      name="weight"
      id="weight"
      placeholder="Weight in Kg"
    />${motor.weight}
    <input
      type="text"
      name="speed"
      id="speed"
      placeholder="Top Speed in Kmh"
    /> ${motor.speed}
    <textarea
      id="about"
      name="about"
      placeholder="More About The Car"
      rows="10"
      cols="50"
    >${motor.abo}</textarea>
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
        
        model: data.model,
        imageUrl: data.imageUrl, 
        price: data.price,
        weight: data.weight,
        speed: data.speed,
        about: data.about,
        
    });



    event.target.reset();
    ctx.page.redirect(`/details/` + motorId)
}