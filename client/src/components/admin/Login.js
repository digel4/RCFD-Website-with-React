import React from "react";
import { adminLogin, setAdminName, verifyUser, setPassword } from '../../actions';
import { connect } from 'react-redux';

import  { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const { adminLogin, adminStatus, setAdminName, setPassword } = props;
  const navigate = useNavigate();

  const formSubmitHandler = e => {
    e.preventDefault()
    adminLogin(adminStatus.adminName, adminStatus.adminPassword)
    navigate("/events", { replace: true });
  }

  const showState = () => {
    console.log("state is:")
    console.log(props.state)
  }
  
  return (
    <div id="login-page">
      <p>Login Credentials for Development Build</p>
      <p>username: admin </p>
      <p>password: DevelopmentTest</p>
      <form className="auth-form" onSubmit={formSubmitHandler}>
        <div class="form-group" FormGroup label="User" labelFor="userName">
          <input class="form-control"
            id="userName"
            name="userName"
            placeholder="User Name"
            type="text"
            value = { adminStatus.adminName }
            onChange={e => setAdminName(e.target.value)}
          />
        </div>
        <div class="form-group" label="Password" labelFor="password">
          <input class="form-control"
            id="password"
            placeholder="Password"
            type="password"
            name="password"
            value={adminStatus.adminPassword}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="buttons">
          <button className="btn btn-primary btn-block" type="submit" >Sign-in</button>
        </div>
      </form>

      {/* <button className="btn btn-primary btn-block" onClick={props.verifyUser}>verifyUser</button>
      <button className="btn btn-primary btn-block" onClick={showState}>show state</button> */}
      
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
  { adminLogin, setAdminName, setPassword, verifyUser }
)(Login);
