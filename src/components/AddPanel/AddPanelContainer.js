// import React from "react"
import { connect } from 'react-redux';
import AddPanel from './AddPanel';
import { setNewTaskAC, addNewTaskAC } from '../../redux/todoReducer';

const mapStateToProps = (state) => ({
  task: state.todo.newTask,
  editableTask: state.todo.editableTask,
});
const mapDispatchToProps = (dispatch) => ({
  setNewTask(newMessage) {
    dispatch(setNewTaskAC(newMessage));
  },
  addNewTask() {
    dispatch(addNewTaskAC());
  },
});
const AddPanelContainer = connect(mapStateToProps, mapDispatchToProps)(AddPanel);
export default AddPanelContainer;
