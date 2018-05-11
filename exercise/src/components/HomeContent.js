import React, {Component} from 'react';
import Button from './Button';
import UsersContainer from "./LogIn/usersContainer";

export default class HomeContent extends Component {
    constructor(props) {
        // debugger;
        super(props);
        this.state = {
            test:'hi'
        };
        this.setVolumeValue = this.setVolumeValue.bind(this);
    }
    setVolumeValue(val) {
        debugger;
        console.log(val);
    }
  render() {
    return (
      <div>
        <Button>Login</Button>
          <UsersContainer/>
      </div>
    );
  }
}
