import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Login = (props) => {
  const [id, setId] = useState('');
  const onChangeLogin = (e) => {
    setId(e.target.value);
  };
  const saveId = (e) => {
    e.preventDefault();
    props.saveId(id);
    setId('');
  };
  return (
    <div className="login">
      <form onSubmit={saveId}>
        <input type="text" placeholder="Inter your Name" value={id} onChange={onChangeLogin} />
        <button type="button" onClick={saveId} disabled={!id}>Save</button>
      </form>
    </div>
  );
};
Login.propTypes = {
  saveId: PropTypes.func.isRequired,
};
export default Login;
