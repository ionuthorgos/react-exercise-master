import React from 'react';
import PropTypes from 'prop-types';
import UserDatail from "../UserDatail";
import Link from "react-router-dom/es/Link";


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
    clickEvent = () => {
        return <UserDatail/>;
    }
    render() {
        const { user } = this.state;
       // debugger;
        return (

            <div>
                <li key={user.userName.title}>First Name: <b>{user.userName.first}</b> <br />Last Name: <b>{user.userName.last}</b>
                    <Link to={`/users/${user.id}`}>go</Link>
                </li>

                {/*<div>*/}
                {/*<button onClick={this.getUsers}>get Users</button>*/}
                {/*</div>*/}
            </div>
        )
    }
}

export default UserItem;