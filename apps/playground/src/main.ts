import { createElement, render } from "nuqta";

const App = createElement(
  "div",
  { id: "app" },
  createElement(
    "h1",
    null,
    "Nuqta is working",
    createElement("span", { style: "color: red" }, "!"),
  ),
  createElement(
    "div",
    null,
    "This is a div created using Nuqta's createElement function.",
    createElement("span", { style: "color: red" }, "!"),
  ),
  createElement("p", null, "Rendered from monorepo"),
);

console.log(App);

render(App, document.getElementById("root")!);
