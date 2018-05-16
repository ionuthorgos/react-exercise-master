import React from 'react';
import UserItem from './logIn/userItem';

export default class UserDatail extends React.Component {

	constructor(props) {
		super(props)
        this.state = {
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
        };
	}


	onNavigateHome = () => {
        window.history.back();
    }


	render() {
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

