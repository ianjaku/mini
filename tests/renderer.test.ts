import { tokenize } from "../src/lexer";
import { parse } from "../src/parser";

test("render single empty element", () => {
  const tokens = tokenize`<div></div>`;
  const els = parse(tokens);
  expect(els.length).toBe(1);
  expect(els[0].tagName.toLowerCase()).toBe("div");
  expect(els[0].children.length).toBe(0);
});

test("render single element with a class", () => {
  const className = "myClass";
  const tokens = tokenize`<div class="${className}"></div>`;
  const els = parse(tokens);
  expect(els.length).toBe(1);
  expect(els[0].classList.contains(className)).toBeTruthy();
});

test("render single element with text content", () => {
  const text = "some-text";
  const tokens = tokenize`<div>${text}</div>`;
  const els = parse(tokens);
  expect(els.length).toBe(1);
  expect(els[0].textContent).toEqual(text);
});

test("render single element with empty child", () => {
  const tokens = tokenize`<div><span></span></div>`;
  const els = parse(tokens);
  expect(els.length).toBe(1);
  expect(els[0].tagName.toLowerCase()).toEqual("div");
  expect(els[0].children.length).toBe(1);
  expect(els[0].children[0].tagName.toLowerCase()).toBe("span");
});

test("render single element with a child that has text content", () => {
  const text = "some-text";
  const tokens = tokenize`<div><span>${text}</span></div>`;
  const els = parse(tokens);
  expect(els.length).toBe(1);
  expect(els[0].children.length).toBe(1);
  expect(els[0].children[0].textContent).toBe(text);
});

test("render two empty elements", () => {
  const tokens = tokenize`<div></div><span></span>`;
  const els = parse(tokens);
  expect(els.length).toBe(2);
  expect(els[0].children.length).toBe(0);
  expect(els[0].tagName.toLowerCase()).toEqual("div");
  expect(els[1].children.length).toBe(0);
  expect(els[1].tagName.toLowerCase()).toEqual("span");
})


