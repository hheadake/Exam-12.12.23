import { render }  from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";

//may need to change Root

export function decorateCtx(ctx, next) {
    const root = document.getElementById('main-element')
    ctx.render = (content) => render(content, root);
    next();
}