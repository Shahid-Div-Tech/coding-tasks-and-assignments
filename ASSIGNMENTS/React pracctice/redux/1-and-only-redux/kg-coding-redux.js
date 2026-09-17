const redux = require("redux");

const INITIALVALUE = {
  counter: 0,
};

const reducer = (store = INITIALVALUE, action) => {
  return { counter: store.counter + 1 };
};

const store = redux.createStore(reducer);

const subscriber = () => {
  const state = store.getState();
  console.log(state);
};

store.subscribe(subscriber);

store.dispatch({
  type: "INCREMENT",
});
