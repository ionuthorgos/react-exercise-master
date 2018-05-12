import React from 'react';
import PropTypes from 'prop-types';


class UserItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user
        };
    };
    createItem = (item) => {
        return ;
    };

    render() {
        const { user } = this.state;

        return (
            <div>
                <li key={user.id}>{user.text}</li>
                {/*<div>*/}
                {/*<button onClick={this.getUsers}>get Users</button>*/}
                {/*</div>*/}
            </div>


        )
    }
}

export default UserItem;