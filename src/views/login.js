import { html } from "../../node_modules/lit-html/lit-html.js"
import { login } from "../api/user.js";
import { submitHandler } from "../util.js";
//@submit=${onSubmit}

const loginTemplate = (onSubmit) => html `<section id="login">
<div class="form">
  <h2>Login</h2>
  <form @submit=${onSubmit} class="login-form">
    <input type="text" name="email" id="email" placeholder="email" />
    <input
      type="password"
      name="password"
      id="password"
      placeholder="password"
    />
    <button type="submit">login</button>
    <p class="message">
      Not registered? <a href="/register">Create an account</a>
    </p>
  </form>
</div>
</section>`;


export function loginPage(ctx) {
    ctx.render(loginTemplate(submitHandler(ctx, onSubmit)));
}


// may need to change username to email
async function onSubmit(ctx, data, event) {
    if (data.email == "" || data.password == ""){
        return alert('Fill all fields please');
    }
    
    await login(data.email, data.password);
    event.target.reset();
    ctx.page.redirect('/home')


}