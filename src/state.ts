import produce from "immer";

export type StateUpdateFunc = (state: any) => any;

// console.log("Result:", produce(0, (s: any) => {
//   s = 2;
// }));

// const baseState = {
//   title: "one"
// }

// const nextState = produce(baseState, (draftState: any) => {
//   draftState["text"] = "test";
//   draftState.title = "lOLOL";
//     // draftState.push({todo: "Tweet about it"})
//     // draftState[1].done = true
// })
// console.log(nextState);


export function createState(state: any) {
  return Object.freeze(state);
}

export function updateState<S>(state: S, updateFunc: StateUpdateFunc): S {
  return produce(state, updateFunc);
}
