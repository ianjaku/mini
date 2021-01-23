import { UpdateFunction } from "./runtime";
import { updateState } from "./state";

// export type 

export interface CommandParams<S, R> {
  run(): Promise<R>,
  update(state: S, runResult: R): Command<S, any>[]
}

export interface Command<S, R> {
  run(): Promise<R>,
  handlerName: string
}

// export function createCommand<S, R = any>({ run, update }: CommandParams<S, R>): Command<S, R> {
export function createCommand<S, R = any>(
  asyncFunc: () => any,
  handlerName: string
): Command<S, R> {
  return { run: asyncFunc, handlerName }
}
