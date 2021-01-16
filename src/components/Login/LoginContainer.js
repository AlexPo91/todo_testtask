import { connect } from 'react-redux';
import Login from './Login';

import {
  saveId,
} from '../../redux/todoReducer';

const mapStateToProps = (state) => ({
  id: state.todo.id,
});
const mapDispatchToProps = (dispatch) => ({
  
  saveId(id) {
    dispatch(saveId(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
