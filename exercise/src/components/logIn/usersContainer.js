import { connect } from 'react-redux';
import Users from '../users';
import  UserActions   from './userActions';

const mapStateToProps = store => ({
   ffffffffffff: 88,
    a: function () {
        return 'xxx'
    },
    usersStore: store.userReducer
});

const mapDispatchToProps = dispatch => ({

    getUsersFromContainer : () => dispatch(UserActions.getUsers())
});

const UsersContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);

export default UsersContainer;
