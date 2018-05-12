import React, {Component} from 'react';
import Button from './Button';
import UsersContainer from "./logIn/usersContainer";

export default class HomeContent extends Component {
    constructor(props)
    {
        debugger;
        super(props);
        this.state = {
            loggedUser:  this.props.usersStore.loggedUser
        };
        this.login = this.login.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.setState(
            {
                loggedUser: nextProps.usersStore.loggedUser
            }
        );
    }
    logout = () => {
        this.props.logout(null);
    }
    login = () => {
        this.props.login({name:'John'});
    }
  render() {
    return (
      <div>
          {this.state.loggedUser &&
          <span  onClick={this.logout} >Logout</span>
          }

          {!this.state.loggedUser &&
          <span onClick={this.login}>Login</span>
          }
          <UsersContainer/>
      </div>
    );
  }
}
