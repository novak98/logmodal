import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../reducers/actions";
import { submitLogin } from "../reducers/actions";
import { Button } from "./Button";


const validUsers = ["novak","zoran","goran"]
const validPassword = ["novak","zoran","goran"]

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username:"",
      password:"",
      isUserValid: true,
      isPasswordValid: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    debugger;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      
    });
  }

  handleSubmit() {
    for(let i=0; i<validUsers.length; i++) {
      if(this.state.username==validUsers[i] && this.state.password==validPassword[i]) {
        this.props.submitLogin(this.state.username, this.state.password);
      }
    }
    {
      this.setState({isPasswordValid: false
        
      })
  }}

  render() {
    return (
      <div className="modal">
        <label>
          <input
            name="username"
            placeholder="Name"  
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <input
            name="password"
            placeholder="Password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </label>
        {
          !this.state.isPasswordValid && <span className="error-password">Username/password is not valid</span>
        }
        <Button title="Login" onClick={() => this.handleSubmit()} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
  submitLogin: (name, password) => dispatch(submitLogin(name, password)),
});

export default connect(null, mapDispatchToProps)(LoginModal);
