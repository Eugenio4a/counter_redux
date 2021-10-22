import { createStore } from "redux";

function reduser(state = { counter: 0 }, action) {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };

    case "decrement":
      if (state.counter === 0) {
        return state;
      }
      return { counter: state.counter - 1 };
    case "refresh":
      return { counter: 0 };
    default:
      return state;
  }
}

const store = createStore(reduser);
export default store;
