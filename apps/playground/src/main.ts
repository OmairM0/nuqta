import { createElement, render } from "nuqta";

const secondApp = () =>
  createElement(
    "div",
    null,
    createElement(
      "h1",
      null,
      "This is the second app",
      createElement("span", { style: "color: red" }, "!"),
    ),
    createElement(
      "div",
      null,
      "This is another div created using Nuqta's createElement function.",
      createElement("span", { style: "color: red" }, "!"),
    ),
    createElement("p", null, "Also rendered from monorepo"),
  );

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
  createElement(secondApp, null),
  createElement(
    "button",
    { onClick: () => alert("Button clicked!") },
    "Click me",
  ),
);

console.log(App);

const root = document.getElementById("root")!;
// render(App, document.getElementById("root")!);

function Wrapper(props: any) {
  console.log(props);
  return createElement("div", null, props.children);
}

render(createElement(Wrapper, null, "Hello"), root);
