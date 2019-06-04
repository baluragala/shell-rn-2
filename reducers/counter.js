export default function counterReducer(state = { counter: 0 }, action) {
  //console.log(action, state);
  switch (action.type) {
    case "+":
      return { counter: state.counter + 5 };
    case "-":
      return { counter: state.counter - 5 };
    default:
      return state;
  }
}
