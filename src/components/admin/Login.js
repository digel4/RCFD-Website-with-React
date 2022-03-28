import React, { useReducer } from "react";
import { Form, Field } from "react-final-form";
import { signIn } from '../../actions';
import { connect } from 'react-redux';

const Login = (props) => {

  const formSubmitHandler = e => {
    e.preventDefault()
    console.log("formSubmit triggered")
    console.log(props)
    props.signIn("userName", "password")
  }

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
            //value={userName}
            // onChange={e => setUserName(e.target.value)}
          >
          </input>
        </div>
        <div class="form-group" label="Password" labelFor="password">
          <input class="form-control"
            id="password"
            placeholder="Password"
            type="password"
            name="password"
            value="password"
            // onChange={e => setPassword(e.target.value)}
          >
          </input>
        </div>
        <button className="btn btn-primary btn-block" type="submit" >Sign In</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
      adminStatus: state.adminStatus
      // pastEvents: state.events.pastEvents
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
  { 
      signIn, 
  }
)(Login);

// export default Login