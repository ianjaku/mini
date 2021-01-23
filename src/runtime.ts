import { command } from ".";
import { Command } from "./commands";
import { Component } from "./component";
import { getValueForEvent } from "./dom";
import { Token } from "./lexer";
import { log } from "./logger";
import { parse } from "./parser";
import { updateState } from "./state";
import { addToQueue, createQueue, Queue, setFinally, setHandler } from "./updateQueue";

export type TargetType = HTMLElement | HTMLElement | string;
export type InitFunction<S> = () => S;
export type UpdateFunction<S> = (state: S, value: string) => Command<S, any>[] | void;
export type RenderFunction<S> = (state: S) => Token | Token[];

export type MountState<S> = { component: Component<S>, el: HTMLElement };
export type EventHandlerResponse<S> = { newState: S, commands: Command<S, any>[] }
export type EventHandler<S> = (state: S) => EventHandlerResponse<S>;

function resolveTarget(target: TargetType): HTMLElement[] {
  if (Array.isArray(target)) return target;
  if (typeof target === "string") {
    return Array.from(document.querySelectorAll(target));
  }
  return [target];
}

function handleEvent<S>(e: Event, name: string, mountState: MountState<S>, state: S): EventHandlerResponse<S> {
  const handler = findHandler(mountState, name);
  if (handler == null) return { newState: state, commands: [] };
  const value = getValueForEvent(e);
  return runStateUpdate(state, s => handler(s, value) || []);
}

function findHandler<S>(mountState: MountState<S>, name: string) {
  const updateFunc = mountState.component.updaters[name];
  if (updateFunc == null) {
    log(`Update function with name "${name}" not found in your component`, { mountState });
    return null;
  }
  return updateFunc;
}

function runStateUpdate<S>(state: S, updateStateFunc: (state: S) => Command<S, any>[]): EventHandlerResponse<S> {
  let commands: Command<S, any>[] | undefined = [];
  const newState = updateState(state, draftState => {
    commands = updateStateFunc(draftState);
  })
  return { newState, commands };
}

function renderState<S>(mountState: MountState<S>, state: S, eventHandler: (e: Event, val: any) => void) {
  const tokens = mountState.component.render(state);
  const children = parse(tokens, eventHandler);
  mountState.el.innerHTML = "";
  mountState.el.append(...children);
}

function mountSingle<S>(component: Component<S>, el: HTMLElement) {
  let state = component.initialState;
  const mountState = { component, el };
  const queue = createQueue<EventHandler<S>>()
  
  const eventHandler = (e: Event, val: any) => {
    const handler = (state: S) => handleEvent<S>(e, val, mountState, state);
    addToQueue<EventHandler<S>>(queue, handler);
  }
  
  setHandler(queue, eventHandler => {
    const { newState, commands } = eventHandler(state)
    state = newState;
    commands.forEach(command => {
      // if (command.run)
      command.run().then(commandResult => {
        // Add the update method for the command to the queue
        const handler = findHandler(mountState, command.handlerName);
        if (handler == null) return;
        addToQueue(queue, (s1) => runStateUpdate(s1, s2 => handler(s2, commandResult) || []));
        // addToQueue(queue, (s: S) => runStateUpdate(s, (s2: S) => command.update(s2, commandResult)));
      })
    })
  });

  setFinally(queue, () => {
    renderState(mountState, state, eventHandler);
  })
  renderState(mountState, state, eventHandler);
}

export function mountComponent<S>(component: Component<S>, target: TargetType) {
  const els = resolveTarget(target);
  els.forEach(el => mountSingle(component, el));
}

export default {
  mountComponent
}
