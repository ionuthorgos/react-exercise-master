import React from 'react';
import PropTypes from 'prop-types';
import  UserActions   from 'Login/userActions';

class UserItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: props.user
        };
    }

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

// Users.propTypes = {
//     getUsersFromContainer: PropTypes.func.isRequired
// };

export default UserItem;