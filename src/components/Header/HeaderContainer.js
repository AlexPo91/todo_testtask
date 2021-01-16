import { connect } from 'react-redux';
import { logOut } from '../../redux/todoReducer';
import Header from './Header';

const mapStateToProps = (state) => ({
  todos: state.todo.todos,
});
const mapDispatchToProps = (dispatch) => ({
  logOut() {
    dispatch(logOut());
  },
});
const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
