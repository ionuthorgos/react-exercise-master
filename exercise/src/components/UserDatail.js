import React from 'react';
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
			this.setState({userEdit: userForEdit});
		}
		this.editName = this.editName.bind(this);
		this.saveUser = this.saveUser.bind(this);
	}

	componentDidMount() {
		// const { match: { params } } = this.props;
		const props = this.props;
		console.log(props);
		if (!this.props.match) {
			return;
		}
		const {userId} = this.props.match.params;
		console.log(userId);
	}

	// notite
	// this.state = ... se face O SINGURA DATA in CONSTRUCTOR
	// modificare unui state se face cu this.setState(...state, ...)
	// componentDidMount e o functie din react care se apeleaza automat cand componenta
	// este creata;

	// acuma ai userul care trebuie editat
	// adauga un text unde editezi numele


	// ceva de genu asta

	onNavigateHome = () => {
		window.history.back();
	}
		userEdit = () => {
			this.props.userEdit(this.state.userEdit);
		};
		editName(e) {
			this.setState({
				...this.state,
				update: e.target.value
			});
		}
		saveUser() {
			// functia asta o apelezi la butonu de save - butonul nu il ai inca
			// save user e methoda din container care tre sa o faci
			// asta face update la userii din store
			// in userActions e nevoie de o functie de update({type:USER_UPDATED, user: user}) ...
			// apoi redirectare in home
			// incerci ?
			// da
			// ok .
			this.props.saveUser(this.state.userEdit);
		}
		render() {
			return (
				<div className="App">

					<form onSubmit={this.onSubmit}>
						<input type="text" value={this.state.update} onChange={this.state.editName} />
						<input type="submit" value="Update" onClick={this.saveUser} />
					</form>
						<button type="submit" onClick={this.onNavigateHome}>Back</button>
				</div>


			);
		}
}

