
const myComponent = mini.component({
  state: {
    count: 0
  },
  render(state) {
    return mini.html`
      <button onClick="add">increment</button>
      <div style="font-size: 20px">${state.count}</div>
      <button onClick="sub">decrement</button>
    `;
  },
  handlers: {
    add(state) {
      state.count += 1;
    },
    sub(state) {
      state.count -= 1;
    }
  }
});

mini.mount(myComponent, "#app");
