import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import EditUsers from "../../routes/EditUsers";



class UserItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props
        };
    };
    createItem = (item) => {
        return ;
    };

    render() {
        const { user } = this.state;
       // debugger;
        return (

            <div>
                <li key={user.userName.title}>{user.userName.first} {user.userName.last}
                    <Link to="../EditUsers">
                        <EditUsers/>
                    </Link>

                </li>

                {/*<div>*/}
                {/*<button onClick={this.getUsers}>get Users</button>*/}
                {/*</div>*/}
            </div>
        )
    }
}

export default UserItem;