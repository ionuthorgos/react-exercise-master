import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Button from './Button';

export default class TopBar extends Component {
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
                <span style={{backgroundColor: 'blue', color: 'white'}} onClick={this.logout} >Logout</span>
            }

            {!this.state.loggedUser &&
            <span style={{backgroundColor: 'blue', color: 'white'}} onClick={this.login}>Login</span>
            }

            <button style={{backgroundColor: 'red', color: 'white'}}>Signup</button>
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

