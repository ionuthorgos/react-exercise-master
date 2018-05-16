import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/es/Link';
//import { bootstrap, interfaces } from "redux-bootstrap";
import {
    ListGroup,
    ListGroupItem,
} from 'react-bootstrap';
//import 'item-colors.scss';

import './user-styles.scss';

class UserItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: props
		};
	}
    createItem = (item) => {
        
    };
    render() {
    	const { user } = this.state;

    	// debugger;
    	return (

    		<div className='user-item'>
                {/*<ListGroup>*/}
					{/*<ListGroupItem style={{backgroundColor: '#00FFFF'}}>*/}
						{/*<Link style = {{color: 'black',textDecoration: 'none'*/}
                        {/*}} to={`/users/${user.id}`} >*/}
							{/*<li  key={user.userName.title}>First Name: <b>{user.userName.first} </b>Last Name: <b>{user.userName.last}</b>*/}
								{/*</li>*/}
						{/*</Link>*/}
					{/*</ListGroupItem>*/}
				{/*</ListGroup>*/}
				First Name: <b>{user.userName.first} </b>
                Last Name: <b>{user.userName.last}</b>

                <Link style={{textDecoration: 'none'}}
					class={'user-edit'}
					to={`/users/${user.id}`} > Edit</Link>

    		</div>
    	);
    }
}



export default UserItem;
