import { html } from "../../node_modules/lit-html/lit-html.js";
import * as recipeService from '../api/data.js';

const homeTemplate = () => html`   <section id="hero">
<h1>
  Accelerate Your Passion Unleash the Thrill of Sport Cars Together!
</h1>
</section>`;


export function homePage(ctx) {
    //const recipes = recipeService.get
    ctx.render(homeTemplate())
}