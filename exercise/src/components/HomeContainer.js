import { connect } from 'react-redux';
import UserActions from './logIn/userActions';
import HomeContent from './HomeContent';

const mapStateToProps = store => ({
    usersStore: store.userReducer
});

const mapDispatchToProps = dispatch => ({
    login : (data) => dispatch(UserActions.userLoogedIn(data)),
    logout : () => dispatch(UserActions.userLogedOut()),
    getUsersFromContainer : () => dispatch(UserActions.getUsers())
});

const HomeContainer  = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContent);

export default HomeContainer;
