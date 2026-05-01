export type ElementType = string | ((props: any) => any);
export type PropsOf<T> = T extends (props: infer P) => any
  ? P
  : T extends string
    ? Record<string, any>
    : never;

export type NuqtaNode = NuqtaElement | string | number | boolean | null;

export type NuqtaElement = {
  type: ElementType;
  props: {
    children?: NuqtaNode[];
    [key: string]: any;
  };
};
