import React, { useReducer, useEffect } from "react";
import { Form, Field } from "react-final-form";
import { signIn, setAdminName, verifyUser, password,signOut, setPassword, error, submitting, setSubmitting } from '../../actions';
import { connect } from 'react-redux';
import axios from "axios";
import events from "../../APIS/events";

const Login = (props) => {

  const formSubmitHandler = e => {
    e.preventDefault()
    console.log("formSubmit triggered")
    console.log(props)
    console.log(props.adminStatus.adminName)
    props.signIn(props.adminStatus.adminName, props.adminStatus.adminPassword)
    console.log("state is: ")
    console.log(props.state)
  }

  const showState = () => {
    console.log("state is:")
    console.log(props.state)
  }
  // const verifyUser = useCallback(() => {
  //   API.post("/refreshToken")
  //   .then(async response => {
  //     if (response.ok) {
  //       const data = await response.data
  //       setUserContext(oldValues => {
  //         return { ...oldValues, token: data.token }
  //       })
  //     } else {
  //       setUserContext(oldValues => {
  //         return { ...oldValues, token: null }
  //       })
  //     }
  //     // call refreshToken every 5 minutes to renew the authentication token.
  //     setTimeout(verifyUser, 5 * 60 * 1000)
  //   })
  // }, [setUserContext])
  
  // useEffect(() => {
  //   verifyUser()
  // }, [verifyUser])

  // const verifyUser = () => {
  //   console.log("hit verify user")
  //   events.post("/refreshToken", {}, { withCredentials: true })
  //   .then(async response => {
  //     if (response.ok) {
  //       const data = await response.data
  //       console.log("data is:")
  //       console.log(data)
  //     } else {
  //       console.log("something went wrong!")
  //       // setUserContext(oldValues => {
  //       //   return { ...oldValues, token: null }
  //       //})
  //     }
  //     // call refreshToken every 5 minutes to renew the authentication token.
  //     setTimeout(verifyUser, 5 * 60 * 1000)
  //   })
  // }
  // , [setUserContext])
  // }

  // return (
  //   <div>
  //     <form onSubmit={formSubmitHandler}>
  //       <div className="form-group">
  //         <input
  //           id="userName"
  //           placeholder="user name"
  //           type="text"
  //           value="email"
  //         >
            
  //         </input>
  //       </div>
  //       <div className="form-group">
  //         <input
  //           id="password"
  //           placeholder="password"
  //           type="password"
  //           value="password"
  //         >
  //         </input>
          
  //       </div>

  //     </form>
  //   </div>
  // )
  // const renderError = ({ error, touched }) => {
  //   if (touched && error) {
  //     return (
  //       <div>error</div>
  //     )
  //   }
  // }

  // const renderInput = ({ input, label, meta }) => {
  //   const className = `field ${meta.error && meta.touched ? "error" : ""}`;
  //   return (
  //     <div className={className}>
  //       <label>{label}</label>
  //       <input {...input} autoComplete="off" />
  //       {renderError(meta)}
  //     </div>
  //   );
  // };

  // // const onSubmit = (formValues) => {
  // //   props.onSubmit(formValues);
  // // };

  //   return (
  //   <Form 
  //     initialValues={props.initialValues}
  //     // onSubmit={onSubmit}
  //     onSubmit = {signIn}
  //     validate={(formValues) => {
  //       const errors = {};

  //       if (!formValues.userName) {
  //         errors.userName = "You must enter a userName";
  //       }

  //       if (!formValues.password) {
  //         errors.password = "You must enter a valid password";
  //       }

  //       return errors;
  //     }}
  //     render={({ handleSubmit }) => (
  //       <form onSubmit={signIn} className="ui form error">
  //         <Field name="userName" component={renderInput} label="Enter User Name" />
  //         <Field
  //           name="password"
  //           component={renderInput}
  //           label="Enter password"
  //         />
  //         <button className="ui button primary">Submit</button>
  //       </form>
  //     )}
    
  //   />
  //   )

  // return (
  //   <Form 
  //     initialValues={props.initialValues}
  //     onSubmit={onSubmit}
  //     validate={(formValues) => {
  //       const errors = {};

  //       if (!formValues.userName) {
  //         errors.userName = "You must enter a userName";
  //       }

  //       if (!formValues.password) {
  //         errors.password = "You must enter a valid password";
  //       }

  //       return errors;
  //     }}
  //     render={({ handleSubmit }) => (
  //       <form onSubmit={handleSubmit} className="ui form error">
  //         <Field name="userName" component={renderInput} label="Enter User Name" />
  //         <Field
  //           name="passwrod"
  //           component={renderInput}
  //           label="Enter password"
  //         />
  //         <button className="ui button primary">Submit</button>
  //       </form>
  //     )}
    
  //   />
  //   )
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
      <button className="btn btn-primary btn-block" onClick={() => props.signOut(props.adminStatus.token)}>Log Out</button>
    </div>
  )
}




const mapStateToProps = state => {
  return {
      // adminStatus: { adminName: state.admin.adminName, adminPassword: state.admin.adminPassword, token: state.admin.token },
      adminStatus: { ...state.admin },
      state
  }
}

// export default connect(
//   mapStateToProps,
//   { 
//       fetchCurrEvents, 
//       fetchPastEvents 
//   }
// )(Events);

export default connect(
  mapStateToProps,
  { signIn, signOut, setAdminName, setPassword, verifyUser }
)(Login);

// export default Login