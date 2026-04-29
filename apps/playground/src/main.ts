import { createElement, render } from "nuqta";

const App = createElement(
  "div",
  { id: "app" },
  createElement("h1", null, "Nuqta is working"),
  createElement("p", null, "Rendered from monorepo"),
);
console.log(App);

render(App, document.getElementById("root")!);
