import { connect } from 'react-redux';
import  UserActions   from './logIn/userActions';
import TopBar from "./TopBar";

const mapStateToProps = store => ({
    usersStore: store.userReducer
});

const mapDispatchToProps = dispatch => ({
    login : (data) => dispatch(UserActions.userLoogedIn(data)),
    logout : () => dispatch(UserActions.userLogedOut())
});

const TopbarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TopBar);

export default TopbarContainer;
