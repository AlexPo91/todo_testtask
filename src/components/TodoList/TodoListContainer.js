/* eslint-disable import/no-mutable-exports */
import { connect } from 'react-redux';
import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import TodoList from './TodoList';
import {
  deleteTaskAC,
  setActiveStatusAC,
  setEditableTaskAC,
  cancelEditableTaskAC,
  saveChangeTaskAC,
  setPortableItemAC,
  dragNDropAC,
  getTodos,
} from '../../redux/todoReducer';

let TodoListContainer = (
  {
    editableTask,
    todos,
    deleteTask,
    setActiveStatus,
    setEditableTask,
    cancelEditableTask,
    saveChangeTask,
    setPortableItem,
    dragNDrop,
    id,
    getTodosAPI,
  },
  // props,
) => {
  useEffect(() => {
    getTodosAPI(id);
  }, []);
  return (
    <TodoList
      editableTask={editableTask}
      todos={todos}
      deleteTask={deleteTask}
      setActiveStatus={setActiveStatus}
      setEditableTask={setEditableTask}
      cancelEditableTask={cancelEditableTask}
      saveChangeTask={saveChangeTask}
      setPortableItem={setPortableItem}
      dragNDrop={dragNDrop}
    />
  );
};
const mapStateToProps = (state) => ({
  id: state.todo.id,
  editableTask: state.todo.editableTask,
  todos: state.todo.todos,
  searchTask: state.todo.searchTask,
});
const mapDispatchToProps = (dispatch) => ({
  deleteTask(id) {
    dispatch(deleteTaskAC(id));
  },
  setActiveStatus(id) {
    dispatch(setActiveStatusAC(id));
  },
  setEditableTask(id) {
    dispatch(setEditableTaskAC(id));
  },
  cancelEditableTask() {
    dispatch(cancelEditableTaskAC());
  },
  saveChangeTask(id, editedTask) {
    dispatch(saveChangeTaskAC(id, editedTask));
  },
  setPortableItem(item) {
    dispatch(setPortableItemAC(item));
  },
  dragNDrop(id) {
    dispatch(dragNDropAC(id));
  },
  getTodosAPI(id) {
    dispatch(getTodos(id));
  },
});
TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
export default TodoListContainer;

TodoListContainer.propTypes = {
  editableTask: PropTypes.string,
  todos: PropTypes.oneOf([]),
  deleteTask: PropTypes.func,
  setActiveStatus: PropTypes.func,
  setEditableTask: PropTypes.func,
  cancelEditableTask: PropTypes.func,
  saveChangeTask: PropTypes.func,
  setPortableItem: PropTypes.func,
  dragNDrop: PropTypes.func,
  id: PropTypes.string,
  getTodosAPI: PropTypes.func,
};
TodoListContainer.defaultProps = {
  editableTask: null,
  todos: null,
  deleteTask: null,
  setActiveStatus: null,
  setEditableTask: null,
  cancelEditableTask: null,
  saveChangeTask: null,
  setPortableItem: null,
  dragNDrop: null,
  id: PropTypes.null,
  getTodosAPI: PropTypes.null,
};
