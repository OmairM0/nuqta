import { ElementType, NuqtaElement, NuqtaNode, PropsOf } from "./index.types";

export function createElement<T extends ElementType>(
  type: T,
  props: PropsOf<T> | null,
  ...children: NuqtaNode[]
): NuqtaElement {
  return {
    type,
    props: {
      ...props,
      children,
    },
  };
}

export * from "./index.types";
