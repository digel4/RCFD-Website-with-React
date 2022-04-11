import React from "react";
import { adminLogin, adminLogout, setAdminName, verifyUser, setPassword } from '../../actions';
import { connect } from 'react-redux';

const Login = (props) => {

  const formSubmitHandler = e => {
    e.preventDefault()
    props.adminLogin(props.adminStatus.adminName, props.adminStatus.adminPassword)
  }

  const showState = () => {
    console.log("state is:")
    console.log(props.state)
  }
  
  return (
    <div>
      <p>hello from login</p>
      <form className="auth-form" onSubmit={formSubmitHandler}>
        <div class="form-group" FormGroup label="User" labelFor="userName">
          <input class="form-control"
            id="userName"
            name="userName"
            placeholder="User Name"
            type="text"
            value = { props.adminStatus.adminName }
            onChange={e => props.setAdminName(e.target.value)}
          >
          </input>
        </div>
        <div class="form-group" label="Password" labelFor="password">
          <input class="form-control"
            id="password"
            placeholder="Password"
            type="password"
            name="password"
            value={props.adminStatus.adminPassword}
            onChange={e => props.setPassword(e.target.value)}
          >
          </input>
        </div>
        <button className="btn btn-primary btn-block" type="submit" >Sign In</button>
      </form>

      <button className="btn btn-primary btn-block" onClick={props.verifyUser}>verifyUser</button>
      <button className="btn btn-primary btn-block" onClick={showState}>show state</button>
      <button className="btn btn-primary btn-block" onClick={() => props.adminLogout(props.adminStatus.token)}>Log Out</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
      adminStatus: { ...state.admin }
  }
}

export default connect(
  mapStateToProps,
  { adminLogin, adminLogout, setAdminName, setPassword, verifyUser }
)(Login);
