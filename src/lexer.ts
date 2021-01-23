import htm from "htm";

type PropsType = {[name: string]: string} | null;
export type Token = { type: string, props: PropsType, children: ChildToken[] };
export type ChildToken = Token | undefined | string | number;

function h(type: string, props: PropsType, ...children: Token[]): Token {
  return { type, props, children };
}
export const tokenize = htm.bind(h);
