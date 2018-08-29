import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';

/*	//import UserItem from './logIn/userItem';	*/
/*	//import { Redirect } from 'react-router-dom';	*/
/*	import { push } from 'react-router-redux';	*/

export default class UserDatail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editName:  null
        };
        if (this.props.match) {
            const {userId} = this.props.match.params;


            const userForEdit = props.usersStore.users.find(el => el.id.value === userId);
            this.state.userEdit = userForEdit;
        }

        this.editEmail = this.editEmail.bind(this);
        // this.saveUser = this.saveUser.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

	onNavigateHome = () => {
		window.history.back();
	};
		userEdit = () => {
			this.props.userEdit(this.state.userEdit);
		};

    editEmail(e) {
        var userEdit = {...this.state.userEdit};
        userEdit.email = e.target.value;
        this.setState({userEdit})
    }
		/*saveUser() {
		 	this.props.saveUser(this.state.userEdit);
             this.props.history.push('/home');
    };*/

    updateUser = () => {
        this.props.saveUser(this.state.userEdit);

        //this.props.history.push('/home');
	};
		render() {
			return (
				<div className="App">
                    {this.state.userEdit &&
						<form onSubmit={this.updateUser}>
							<input type="text" value={this.state.userEdit.email} onChange={this.editEmail}/>
							<input type="submit" value="Update"/>
						</form>
                    }
						<button type="submit" onClick={this.onNavigateHome}>Back</button>
				</div>
			);
		}
}

