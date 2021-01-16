import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunkMiddleWare from 'redux-thunk';
import api from '../api';
import todoReducer from './todoReducer';

const reducers = combineReducers({ todo: todoReducer });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleWare)),
);

let currentValue;
function handleChange() {
  const previousValue = currentValue;
  currentValue = store.getState().todo;
  if (previousValue && localStorage.getItem('Todo_id') && currentValue.id) {
    api.updateTodos(store.getState().todo.id, store.getState().todo.todos);
  }
}

store.subscribe(handleChange);

window.store = store;
export default store;
