import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ todos, logOut }) => {
  const countActiveTask = todos.filter((el) => el.isActive).length;
  const countAllTask = todos.length;
  return (
    <div className="header">
      <div className="title">
        <span>My ToDo List</span>
        <button
          type="button"
          onClick={() => {
            localStorage.setItem('Todo_id', JSON.stringify(''));
            logOut();
          }}
        >
          logout

        </button>
      </div>
      <div className="subTitle">
        Total
        {' '}
        {countAllTask}
        {' '}
        tasks, completed
        {' '}
        {countActiveTask}
        {' '}
        tasks
      </div>
    </div>
  );
};
Header.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  logOut: PropTypes.func.isRequired,
};
export default Header;
