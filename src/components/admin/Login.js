import React from "react";
import { adminLogin, adminLogout, setAdminName, verifyUser, setPassword } from '../../actions';
import { connect } from 'react-redux';

import  { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const { adminLogin, adminStatus, setAdminName, setPassword, verifyUser, adminLogout  } = props;
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
    <div>
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
        <button className="btn btn-primary btn-block" type="submit" >Sign In</button>
      </form>

      <button className="btn btn-primary btn-block" onClick={props.verifyUser}>verifyUser</button>
      <button className="btn btn-primary btn-block" onClick={showState}>show state</button>
      <button className="btn btn-primary btn-block" onClick={() => adminLogout(adminStatus.token)}>Log Out</button>
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
