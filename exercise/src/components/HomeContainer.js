import { connect } from 'react-redux';
import  UserActions   from './logIn/userActions';
import HomeContent from "./HomeContent";

const mapStateToProps = store => ({
   ffffffffffff: 88,
    a: function () {
        return 'xxx'
    },
    usersStore: store.userReducer
});

const mapDispatchToProps = dispatch => ({
    login : (data) => dispatch(UserActions.userLoogedIn(data)),
    logout : () => dispatch(UserActions.userLogedOut())
});

const HomeContainer  = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContent);

export default HomeContainer ;
