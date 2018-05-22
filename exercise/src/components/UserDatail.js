import React from 'react';
/*	//import UserItem from './logIn/userItem';	*/
/*	//import { Redirect } from 'react-router-dom';	*/
/*	import { push } from 'react-router-redux';	*/

export default class UserDatail extends React.Component {
	constructor(props) {
		super(props);
		debugger;
			//this.state.userEdit = props.editName

		if (this.props.match) {
			const {userId} = this.props.match.params;
			const userForEdit = props.usersStore.users.find(el => el.id.value === userId);

			this.setState({userEdit: userForEdit});
		}
		this.editName = this.editName.bind(this);
		this.saveUser = this.saveUser.bind(this);
	}

	onNavigateHome = () => {
		window.history.back();
	};
		userEdit = () => {
			this.props.userEdit(this.state.userEdit);
		};
    editName(e) {
        debugger;
        var userEdit = {...this.state.userEdit}
        userEdit.email = e.target.value;
        this.setState({userEdit})
    }
		saveUser() {
			this.props.saveUser(this.state.userEdit);
		};
		render() {
			return (
				<div className="App">

					<form onSubmit={this.onSubmit}>
						<input type="text" value={this.props.userForEdit} onChange={this.update} />
						<input type="submit" value="Update" onClick={this.saveUser} />
					</form>
						<button type="submit" onClick={this.onNavigateHome}>Back</button>
				</div>


			);
		}
}

