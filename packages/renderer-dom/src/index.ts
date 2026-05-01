import type { NuqtaElement, NuqtaNode } from "nuqta";

function mount(node: NuqtaNode): Node {
  // ignore null/boolean/undefined
  if (node === null || node === undefined || typeof node === "boolean") {
    return document.createTextNode("");
  }

  // text node
  if (typeof node === "string" || typeof node === "number") {
    return document.createTextNode(String(node));
  }

  const el = document.createElement(node.type as string);

  const props = node.props || {};

  // set props
  for (const key in props) {
    if (key === "children") continue;
    if (key.startsWith("on") && typeof props[key] === "function") {
      const eventName = key.slice(2).toLowerCase();
      el.addEventListener(eventName, props[key]);
      continue;
    }
    el.setAttribute(key, String(props[key]));
  }

  // children
  const children = props.children ?? [];

  children.forEach((child) => {
    el.appendChild(mount(child)); // recursion
  });

  return el;
}

export function render(vnode: NuqtaElement, container: HTMLElement) {
  container.innerHTML = ""; // reset (temporary)
  container.appendChild(mount(vnode));
}
