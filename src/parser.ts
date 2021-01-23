import { ChildToken, Token } from "./lexer";
import { isNotNull } from "./util";

type EventCallback = (e: Event, msg: string) => void;

function applyProp(
  el: HTMLElement,
  propName: string,
  propValue: string,
  eventCallback: EventCallback
) {
  if (propName.startsWith("on")) {
    const eventName = propName.slice(2).toLowerCase();
    el.addEventListener(eventName, e => eventCallback(e, propValue));
  } else {
    el.setAttribute(propName, propValue);
  }
}

function parseChild(token: ChildToken, eventCallback: EventCallback): HTMLElement | Text | null {
  if (token == null) return null;
  if (typeof token === "string" || typeof token === "number") {
    return document.createTextNode(token.toString());
  }
  return parseToken(token, eventCallback);
}

function parseChildren(tokens: ChildToken[], eventCallback: EventCallback) {
  return tokens.map(t => parseChild(t, eventCallback)).filter(isNotNull) as (HTMLElement | Text)[];
}

function parseToken(token: Token, eventCallback: EventCallback): HTMLElement {
  const el = document.createElement(token.type);

  if (token.props != null) {
    Object.entries(token.props).forEach(([name, value]) => applyProp(el, name, value, eventCallback));
  }
  
  const childEls = parseChildren(token.children, eventCallback);
  el.append(...childEls);
  
  return el;
}

export function parse(tokens: Token | Token[], eventCallback: EventCallback = () => {}): HTMLElement[] {
  if (!Array.isArray(tokens)) return parse([tokens], eventCallback);

  return tokens.map(t => parseToken(t, eventCallback));
}
