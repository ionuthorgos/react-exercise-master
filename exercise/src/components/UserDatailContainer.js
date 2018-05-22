import { connect } from 'react-redux';
import UserActions from './logIn/userActions';
import UserDatail from './UserDatail';

const mapStateToProps = store => ({
	usersStore: store.userReducer
});

const mapDispatchToProps = dispatch => ({
	getUsersFromContainer : () => dispatch(UserActions.getUsers()),
		saveUser : () => dispatch(UserActions.getUsers()),
		update : () => dispatch(UserActions.editName())
});

const UserDatailContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(UserDatail);

export default UserDatailContainer;
