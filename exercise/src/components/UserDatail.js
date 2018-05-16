import React, { Component } from 'react';
import Link from 'react-router-dom/es/Link';
import UserItem from './logIn/userItem';
import * as Rx from 'rxjs/Rx';
//import { browserHistory } from 'react-router';

export default class UserDatail extends React.Component {

	constructor(props) {
		super(props)
        this.state = {
            componentDidMount() {
                debugger;
                // const { match: { params } } = this.props;
                const props = this.props;
                console.log(props);
                if (!this.props.match) {
                    return;
                }
                const {userId} = this.props.match.params;
                console.log(userId);
            }
        };
	}


	onNavigateHome = () => {
        window.history.back();
    }


	render() {
		debugger;
        const { user } = this.state;
		return (
			<div className="App">
				<p>the User Detail page</p>
                {user &&
                <ul>
                    {
                        user.map((item, index) => (
                            <UserItem
                                key={index}
                                id={item.id.value}
                            />
                        ))
                    }
                </ul>
                }
                <button onClick={this.onNavigateHome}>Back</button>
			</div>
		);
	}
}

