import { InitFunction, UpdateFunction, RenderFunction } from "./runtime";

export type ComponentParams<S> = {
  // init: InitFunction<S>,
  initialState: S,
  render: RenderFunction<S>,
  handlers: Record<string, UpdateFunction<S>>
  // updaters: {[name: string]: UpdateFunction<S>},
}

export type Component<S> = {
  // init: InitFunction<S>,
  initialState: S,
  render: RenderFunction<S>,
  updaters: Record<string, UpdateFunction<S>>,
  // updaters: {[name: string]: UpdateFunction<S>},
}

export function createComponent<S>(
  { initialState, render, handlers }: ComponentParams<S>
): Component<S> {
  return { initialState, render, updaters: handlers };
}

