import React from 'react';
import PropTypes from 'prop-types';
import  UserActions   from './logIn/userActions';
import UserItem from './logIn/userItem';
// import { Rx } from "rxjs";
import * as Rx from 'rxjs/Rx';

class Users extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Users: this.props.users,

        };
        this.getUsers = this.getUsers.bind(this);
        this.setUsers = this.setUsers.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.setState(
            {
                ...this.state,
                users: nextProps.users
            }
        );
    }

    state = {count: 0};

    setUsers(x) {
        this.setState(
            {
                ...this.state,
                users: [{id:1, text:'def'}]
            });
    }

   getUsers = () => {
        this.props.getUsersFromContainer();
    };

    getUsersPromise = () => {
        this.userActions.getTestUsers();
        UserActions.getUsersPromise()
            .then((response)=>{
                console.log(response);
                const data = response.data;
                data.push({id:1, text :'John'});
                this.setState({
                    ...this.state,
                    users: data
                });
            })
            .catch((err)=>{
                console.log("EEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
            });
    };

    getUsersObservable = () => {
        var result = Rx.Observable.fromPromise(UserActions.getUsersPromise());
        result.subscribe(
            x => {
                console.log(x);
                this.setUsers(x);
            } ,
            e => console.error(e));
    };


    createItem = (item) => {
        return <li key={item.id}>{item.name}</li>;
    };
    render() {
        debugger;
        const users = this.props.userlist;
        return (
            <div>
                <h2>Users</h2>
                <div>
                    <button onClick={this.props.getUsersFromContainer}>get Users</button>
                </div>
                {users &&
                <ul>
                    {
                        users.map((item, index) => (
                            <UserItem
                                key={index}
                                userName={item.name}
                            />
                        ))
                    }
                </ul>
                }
            </div>
        )
    }
}

// Users.propTypes = {
//     // getUsersFromContainer: PropTypes.func.isRequired,
//     userlist: PropTypes.Array.isRequired
// };

export default Users;