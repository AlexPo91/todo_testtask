import React from 'react';
import PropTypes, { bool } from 'prop-types';
import {
  DeleteOutlined,
  EditOutlined,
  FileDoneOutlined,
} from '@ant-design/icons';
import './TodoItem.css';

const TodoItem = ({
  item,
  deleteTask,
  setActiveStatus,
  setEditableTask,
  editableTask,
}) => (
  <>
    <span
      className={`${'nameItem'} ${
        item.isActive ? 'completedNameItem' : ''
      }`}
    >
      {item.task}
    </span>
    {item.isActive && (
    <button
      className="controlBtn"
      type="button"
      onClick={() => deleteTask(item.id)}
      disabled={editableTask}
    >
      <DeleteOutlined style={{ color: '#FF6347', fontSize: '18px' }} />
    </button>
    )}
    {!item.isActive && (
    <span className="controlBtn">
      <button
        type="button"
        onClick={() => {
          setActiveStatus(item.id);
        }}
        disabled={editableTask}
      >
        <FileDoneOutlined style={{ color: '#3CB371', fontSize: '18px' }} />
      </button>
      <button
        type="button"
        onClick={() => setEditableTask(item.id)}
        disabled={editableTask}
      >
        <EditOutlined style={{ color: '#4682B4', fontSize: '18px' }} />
      </button>
      <button
        type="button"
        onClick={() => deleteTask(item.id)}
        disabled={editableTask}
      >
        <DeleteOutlined style={{ color: '#FF6347', fontSize: '18px' }} />
      </button>
    </span>
    )}
  </>
);
TodoItem.propTypes = {
  editableTask: PropTypes.string,
  item: PropTypes.shape({
    id: PropTypes.string,
    task: PropTypes.string,
    isActive: bool,
  }).isRequired,
  deleteTask: PropTypes.func.isRequired,
  setActiveStatus: PropTypes.func.isRequired,
  setEditableTask: PropTypes.func.isRequired,
};
TodoItem.defaultProps = {
  editableTask: null,
};
export default TodoItem;
