function mount(vnode: any): Node {
  // handle text node
  if (typeof vnode === "string" || typeof vnode === "number") {
    return document.createTextNode(String(vnode));
  }

  // create element
  const el = document.createElement(vnode.type);

  const props = vnode.props || {};

  // set props
  for (const key in props) {
    if (key === "children") continue;
    el.setAttribute(key, props[key]);
  }

  // handle children
  const children = props.children || [];

  children.forEach((child: any) => {
    el.appendChild(mount(child)); // recursion
  });

  return el;
}

export function render(vnode: any, container: HTMLElement) {
  container.innerHTML = ""; // reset (temporary)
  container.appendChild(mount(vnode));
}
