const { createStore } = Redux;

// Initialize the Redux store by passing it our reducer (defined globally in reducer.js)
const { subscribe, dispatch, getState } = createStore(reducer);

// Re-render the application every time the state changes
// Here we pass the Redux state to our render method (defined globally in render.js)
subscribe(() => render(getState()))

// Dispatch the "INCREMENT" action every time the +1 button is pressed
const incrementButton = document.getElementById('increment');
incrementButton.addEventListener('click', e => dispatch({ type: "INCREMENT" }));

// Dispatch the "DECREMENT" action every time the +1 button is pressed
const decrementButton = document.getElementById('decrement');
decrementButton.addEventListener('click', e => dispatch({ type: "DECREMENT" }));

// Dispatch the "QUINTUPLE" action every time the +1 button is pressed
const quintupleButton = document.getElementById('quintuple');
quintupleButton.addEventListener('click', e => dispatch({ type: "QUINTUPLE" }));

// Dispatch the "DEQUINTUPLE" action every time the +1 button is pressed
const dequintupleButton = document.getElementById('dequintuple');
dequintupleButton.addEventListener('click', e => dispatch({ type: "DEQUINTUPLE" }));

/* // Dispatch the "COLOR" action every time the +1 button is pressed
const colorOption = document.getElementById('color');
colorOption.addEventListener('click', e => dispatch({ type: "color" })); */