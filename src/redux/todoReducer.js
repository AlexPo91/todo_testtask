/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
import { v4 as uuidv4 } from 'uuid';
import api from '../api';

const GET_TODOS = 'GET_TODOS';
const SET_NEW_TASK = 'SET_NEW_TASK';
const ADD_NEW_TASK = 'ADD_NEW_TASK';
const SAVE_CHANGE_TASK = 'SAVE_CHANGE_TASK';
const DELETE_TASK = 'DELETE_TASK';
const SET_ACTIVE_STATUS = 'SET_ACTIVE_STATUS';
const SET_EDITABLE_TASK = 'SET_EDITABLE_TASK';
const CANCEL_EDITABLE_TASK = 'CANCEL_EDITABLE_TASK';
const SET_PORTABLE_ITEM = 'PORTABLE_ITEM';
const DRAGNDROP = 'DRAGNDROP';
const SAVE_ID = 'SAVE_ID';
const LOGOUT = 'LOGOUT';

const initialState = {
  id: null,
  newTask: '',
  searchTask: '',
  editableTask: null,
  portableItem: null,
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_ID:
      return {
        ...state,
        id: action.id,
      };
    case LOGOUT:
      return {
        ...state,
        todos: [],
        id: null,
      };
    case GET_TODOS:
      return {
        ...state, todos: action.todos,
      };
    case SET_NEW_TASK:
      return {
        ...state,
        newTask: action.newTask,
      };
    case ADD_NEW_TASK: {
      const newTask = {
        id: uuidv4(),
        task: state.newTask,
        isActive: false,
      };
      return {
        ...state,
        newTask: '',
        todos: [newTask, ...state.todos],
      };
    }
    case DELETE_TASK: {
      const newTodos = state.todos
        .filter((el) => el.id !== action.id);
      return {
        ...state,
        todos: newTodos,
      };
    }
    case SET_EDITABLE_TASK: {
      return {
        ...state,
        editableTask: action.id,
      };
    }
    case CANCEL_EDITABLE_TASK: {
      return {
        ...state,
        editableTask: null,
      };
    }
    case SAVE_CHANGE_TASK: {
      const index = state.todos.findIndex((el) => el.id === action.id);
      const oldTask = state.todos[index];
      const newTask = { ...oldTask, task: action.editedTask };
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, index),
          newTask,
          ...state.todos.slice(index + 1),
        ],
      };
    }
    case SET_ACTIVE_STATUS: {
      const index = state.todos.findIndex((el) => el.id === action.id);
      const oldTask = state.todos[index];
      const newTask = { ...oldTask, isActive: true };

      return {
        ...state,
        todos: [
          ...state.todos.slice(0, index),
          newTask,
          ...state.todos.slice(index + 1),
        ],
      };
    }
    case SET_PORTABLE_ITEM: {
      return {
        ...state, portableItem: action.item,
      };
    }
    case DRAGNDROP: {
      const newTodos = [...state.todos];
      const elem1 = state.todos.findIndex((el) => el.id === state.portableItem.id);
      const elem2 = state.todos.findIndex((el) => el.id === action.id);
      newTodos.splice(elem1, 1);
      newTodos.splice(elem2, 0, state.portableItem);
      return {
        ...state, todos: newTodos,
      };
    }

    default:
      return state;
  }
};

export const saveIdAC = (id) => ({
  type: SAVE_ID, id,
});
export const setNewTaskAC = (newTask) => ({
  type: SET_NEW_TASK,
  newTask,
});
export const addNewTaskAC = () => ({
  type: ADD_NEW_TASK,
});
export const deleteTaskAC = (id) => ({
  type: DELETE_TASK,
  id,
});
export const setActiveStatusAC = (id) => ({
  type: SET_ACTIVE_STATUS,
  id,
});
export const setEditableTaskAC = (id) => ({
  type: SET_EDITABLE_TASK,
  id,
});
export const cancelEditableTaskAC = () => ({
  type: CANCEL_EDITABLE_TASK,
});
export const saveChangeTaskAC = (id, editedTask) => ({
  type: SAVE_CHANGE_TASK,
  id,
  editedTask,
});
export const setPortableItemAC = (item) => ({
  type: SET_PORTABLE_ITEM,
  item,
});
export const dragNDropAC = (id) => ({
  type: DRAGNDROP,
  id,
});
export const logOut = () => ({
  type: LOGOUT,
});
export const getTodosAC = (todos) => ({ type: GET_TODOS, todos });

export const getTodos = (id) => (dispatch) => api.getTodos(id).then((response) => {
  response ? dispatch(getTodosAC(response)) : false;
});
export const saveId = (id) => (dispatch) => {
  localStorage.setItem('Todo_id', JSON.stringify(id));
  dispatch(saveIdAC(id));
};

export default todoReducer;
