import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Button from './Button';

export default class TopBar extends Component {
  constructor(props)
  {
      // debugger;
      super(props);
      this.state = {
          loggedUser:  this.props.usersStore.loggedUser
      };
      this.login = this.login.bind(this);
      this.logout = this.logout.bind(this);
      this.signup = this.signup.bind(this);
  }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.setState(
            {
                loggedUser: nextProps.usersStore.loggedUser
            }
        );
    }
    signup = () => {
      debugger;
    };

    logout = () => {
        this.props.logout(null);
   };

    login = () => {
        this.props.login({name:'John'});
    };

  render() {
    return (
      <header style={{
        height:          48,
        width:           '100%',
        backgroundColor: 'rgb(102,63,180)',
        color:           'white',
        padding:         '6px 10px',
        display:         'flex',
        flexDirection:   'row',
        alignItems:      'center'
      }}
      >
        <div style={styles.logo}>
          <Link to="/">
            <img alt={'logo'} style={{ maxHeight: 40, flex: 1}} src="favicon-196x196.png"/>
          </Link>
        </div>
        <div>
          {'Modus Create'}
        </div>
        <div style={{float: 'left', color: 'white', flex: 1}} />
        <div style={{float: 'right', paddingRight: 20}}>
            {this.state.loggedUser &&
            <Button style={{backgroundColor: 'red', color: 'white'}} click={this.logout} >Logout</Button>
            }
            {!this.state.loggedUser &&
            <Button style={{backgroundColor: 'blue', color: 'white'}} click={this.login}>Login</Button>
            }
            {!this.state.loggedUser &&
            <Button style={{backgroundColor: 'red', color: 'white'}} click={this.signup}>Signup</Button>
            }
        </div>
      </header>
    );
  } 
}

const styles = {
  logo: {
    float:  'left',
    margin: 8
  }
};

