import React from 'react';
import PropTypes from 'prop-types';
import  UserActions   from 'LogIn/userActions';
import UserItem from 'LogIn/userItem';
// import { Rx } from "rxjs";
import * as Rx from 'rxjs/Rx';

class Users extends React.Component {

    constructor(props) {
        super(props);
        // debugger;
        // this.getUsers = this.getUsers.bind(this);
        // this.setUsers = this.setUsers.bind(this);

        // this.getUsersObservable = this.getUsersObservable.bind(this);


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

    state = {count: 0}

    setUsers(x) {
        this.setState(
            {
                ...this.state,
                users: [{id:1, text:'def'}]
            });
    }

    getUsers = () => {
        // this.userActions.getTestUsers();
        // UserActions.getTestUsers();
        this.props.getUsersFromContainer();
    }

    getUsersPromise = () => {
        // this.userActions.getTestUsers();
        // UserActions.getTestUsers();
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
    }

    getUsersObservable = () => {
        var result = Rx.Observable.fromPromise(UserActions.getUsersPromise());
        result.subscribe(
            x => {
                console.log(x);
                this.setUsers(x);
            } ,
            e => console.error(e));


        // result.subscribe = (x) =>(
        //     x => {
        //         console.log(x);
        //         this.setUsers(x);
        //     } ,
        //         e => console.error(e));


    }


    createItem = (item) => {
        return <li key={item.id}>{item.text}</li>;
    };

    render() {
        const list = this.state.users;
        return (
            <div>
                <h2>Users</h2>
                <div>
                    <button onClick={this.getUsers}>get Users</button>
                </div>

                {list &&
                <ul>
                    {

                        list.map((item, index) => (
                            <UserItem
                                key={index}
                                user={item}
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
//     getUsersFromContainer: PropTypes.func.isRequired
// };

export default Users;