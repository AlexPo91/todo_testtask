/* eslint-disable jsx-a11y/no-autofocus */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import './TodoItem.css';
import '../../../assets/animation.css';

const EditItem = ({
  id, task, cancelEditableTask, saveChangeTask,
}) => {
  const [changeTask, setChangeTask] = useState(task);
  const onChangeTask = (e) => {
    setChangeTask(e.target.value);
  };
  const onSaveChangeTask = () => {
    saveChangeTask(id, changeTask);
    cancelEditableTask();
  };
  return (
    <form className={`${'editItem'} ${'fadeIn'}`}>
      <input type="text" value={changeTask} onChange={onChangeTask} autoFocus />
      <div>
        <button type="submit" onClick={onSaveChangeTask} disabled={!changeTask}>
          <CheckOutlined style={{ color: '#3CB371', fontSize: '18px' }} />
        </button>
        <button
          type="button"
          onClick={() => {
            cancelEditableTask();
          }}
        >
          <CloseOutlined style={{ color: '#FF6347', fontSize: '18px' }} />
        </button>
      </div>
    </form>
  );
};
EditItem.propTypes = {
  id: PropTypes.string.isRequired,
  task: PropTypes.string.isRequired,
  cancelEditableTask: PropTypes.func.isRequired,
  saveChangeTask: PropTypes.func.isRequired,
};
export default EditItem;
