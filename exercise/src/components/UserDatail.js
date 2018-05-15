import React, { Component } from 'react';

export default class UserDatail extends Component {
	constructor(props) {
		super(props);

		// this.state = {

		// };
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

	render() {
		return (
			<div className="App">
				<p>the User Detail page</p>
				<button onClick="<userItem/>">Back</button>
			</div>
		);
	}
}

