import React from 'react';
import Link from 'react-router-dom/es/Link';


import './user-styles.scss';

class UserItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: props
		};
	}

	render() {
    	const { user } = this.state;

    	// debugger;
    	return (
    	
    		<tr>
                <td> First Name: {user.userName.first} </td>
				<td> Last Name: {user.userName.last}</td>

    			<Link
					style={{textDecoration: 'none'}}
					  className="user-item"
					  to={`/users/${user.id}`}> Edit
    			</Link>

    		</tr>

    	);
	}
}


export default UserItem;
