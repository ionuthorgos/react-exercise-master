import { connect } from 'react-redux';
import Users from '../login.component';
import  UserActions   from './userActions';

const mapStateToProps = state => ({
    ffffffffffff: 88,
    a: function () {
        return 'xxx'
    },
    users: state.user.users
});

const mapDispatchToProps = dispatch => ({
    getUsersFromContainer: () => dispatch(UserActions.getUsers())
});

const UsersContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);

export default UsersContainer;
