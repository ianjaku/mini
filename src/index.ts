import { createCommand } from "./commands";
import { createComponent } from "./component";
import { tokenize } from "./lexer";
import { mountComponent } from "./runtime";

export const component = createComponent;
export const html = tokenize;
export const mount = mountComponent;
export const command = createCommand;

export default {
  component: createComponent,
  html: tokenize,
  mount: mountComponent,
  command: createCommand
}
