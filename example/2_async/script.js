
function fetchTodo(id) {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
}

const myComponent = mini.component({
  initialState: {
    id: 1,
    todo: null
  },
  render(state) {
    return mini.html`
      <h1>${state.todo == null ? "" : state.todo.title}</h1>
      <div>${state.id}</div>
      <button onClick="fetch">Fetch</button>
    `;
      // <h1>${state.todo == null ? "" : JSON.stringify(state.todo)}</h1>
      // ${state.todo == null ? mini.html`<h1>${state}</h1>` : ""}
  },
  handlers: {
    fetch(state) {
      return [
        // mini.command(() => fetchTodo(state.id), "setTodo")
        mini.command(
          () => fetch(`https://jsonplaceholder.typicode.com/todos/1`).then(r => r.json()),
          "setTodo"
        )
      ]
    },
    setTodo(state, todo) {
      state.todo = todo
      return []
    }
  }
});

mini.mount(myComponent, "#app");
