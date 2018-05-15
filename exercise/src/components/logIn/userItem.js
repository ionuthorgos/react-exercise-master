import React from 'react';
import PropTypes from 'prop-types';

const buttonColor={
    buttonStyle:{
        background: 'hsl(0, 0%, 86%)',

    }
}

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
                    <button style={{...buttonColor.buttonStyle, ...this.props.style}}

                        type="button" className="btn btn-primary">Details Users</button>
                </li>

                {/*<div>*/}
                {/*<button onClick={this.getUsers}>get Users</button>*/}
                {/*</div>*/}
            </div>
        )
    }
}

export default UserItem;