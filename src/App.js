import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddPanelContainer from './components/AddPanel';
import HeaderContainer from './components/Header';
import Login from './components/Login/LoginContainer';
import TodoListContainer from './components/TodoList';
import { saveId } from './redux/todoReducer';

function App({ id, saveIdTodos }) {
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('Todo_id'))) {
      saveIdTodos(JSON.parse(localStorage.getItem('Todo_id')));
    }
  });
  return (
    <div className="App">
      {!id && !JSON.parse(localStorage.getItem('Todo_id')) && <Login />}
      {id
      && (
      <>
        <HeaderContainer />
        <div className="controlApp">
          <AddPanelContainer />
        </div>
        <TodoListContainer />
      </>
      )}
    </div>
  );
}
const mapStateToProps = (state) => ({
  id: state.todo.id,
});
const mapDispatchToProps = (dispatch) => ({
  saveIdTodos(id) {
    dispatch(saveId(id));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  id: PropTypes.string,
  saveIdTodos: PropTypes.func.isRequired,
};
App.defaultProps = {
  id: null,
};
