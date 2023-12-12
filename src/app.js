import { render } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";
import { catalogPage } from "./views/catalog.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js"
import { registerPage } from "./views/register.js"
import { createPage } from "./views/create.js"
import { detailsPage } from "./views/details.js"
import { editPage  } from "./views/edit.js";
import {decorateCtx} from "./middlewares/render.js"
import { addSession } from "./middlewares/session.js";
import { logout } from "./api/user.js";
import { myBooksPage } from "./views/myBooks.js";
import { updateNavBar } from "./middlewares/navbar.js";

//document.getElementById('logoutBtn').addEventListener('click', () => {
  //  logout();
   // page.redirect('/')
//})

page(addSession);
page(updateNavBar);
page(decorateCtx);
page('/', homePage)
page('/home', homePage)
page('/catalog', catalogPage)
page('/details/:id', detailsPage)
page('/login', loginPage)
page('/register', registerPage)
page('/create', createPage)
page('/edit/:id', editPage)
page('/logout', onLogout)
page('/myBooks', myBooksPage)


page.start();

function onLogout(ctx) {
logout()
ctx.page.redirect('/home')
}