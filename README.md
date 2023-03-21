### using redux-toolkit

- In this Project We will learn about how to use redux toolkit to manage state

# Step 1.cartSlice.js->create a sclice for your data using the method createSlice()

- createSlice(name,initialState,reducers)

- 1.name:name of the slice
- 2.initialState:initialState of the slice(eg const initialState = [];)
- 3.reducers:it is a object like this

- reducers: {
  add: (state, action) => {
  state.push(action.payload);
  },
  remove: (state, action) => {
  return (state = state.filter((item) => item.id !== action.payload));
  },
  },

  - here "add" and "remove" are two different reducer method that we can use to change the state by dispatching it

- Finally export reducer as well as actions

# Step 2.store.js->create store using the method configureStore()

- configureStore()-> accepts a single configuration object parameter, with the following options:
  reducer,middleware,enhancers
- in our project we have used it only with reducer(cart) but we can add more reducer like user(to handle user action like login or logout) etc

# Step 3.index.js->wrap your application with provider

- Here we have just wrapped the application with Provider so that we can access it anywhere inside the application

# Step 4.Products.jsx(updating state)

- in this file we are changing the state or we are calling the action using the useDispatch hook which has method dispatch() or we can say that we are dispatching an action

# Step 5.Navbar.jsx(getting updated state)

- Here we are using useSelector() hook to get the updated state/data from the redux store
