import React from "react";
import { setMailChimpEmail, setMailChimpfirstName, setMailChimpSecondName, sendDetailsToMailChimpAPI } from '../../actions';
import { connect } from 'react-redux';

const EmailSubscribe = (props) => {
    const { newsletterSubscritionDetails, setMailChimpEmail, setMailChimpfirstName, setMailChimpSecondName, sendDetailsToMailChimpAPI } = props;

    const formSubmitHandler = e => {
        e.preventDefault()
        sendDetailsToMailChimpAPI(newsletterSubscritionDetails)
      }


    return (
        <div className="container my-4" id="email-subscribe">
            <div className="d-flex flex-column p-4">
                <h1 className="h1w text-center mb-3">Stay in Touch!</h1>
                <h2 className="h2w text-center mb-4">Always be in the know about upcoming RCF events and workshops by subscribing to our newsletter!</h2>
                <form id="email-subscribe-form" onSubmit={formSubmitHandler}>
                    <div className="row mb-2">
                        <div className="col">
                            <input 
                                type="text" 
                                className="form-control" 
                                name="firstName" 
                                placeholder="First Name" 
                                value={newsletterSubscritionDetails.firstName}
                                onChange={e => {
                                    setMailChimpfirstName(e.target.value)
                                    console.log(newsletterSubscritionDetails.firstName)
                                }}
                            />
                        </div>
                        <div className="col">
                            <input 
                                type="text" 
                                className="form-control" 
                                name="secondName" 
                                placeholder="Second Name"
                                value={newsletterSubscritionDetails.secondName}
                                onChange={e => {
                                    setMailChimpSecondName(e.target.value)
                                    console.log(newsletterSubscritionDetails.secondName)
                                }}
                            />
                        </div>
                        <div className="col">
                            <input 
                                type="email" 
                                className="form-control" 
                                name="email" 
                                placeholder="Email"
                                value={newsletterSubscritionDetails.email}
                                onChange={e => {
                                    setMailChimpEmail(e.target.value);
                                    console.log(props.state)
                                }}
                            />
                        </div>
                        <div className="col flex-grow-0">
                            <button type="submit" id="submit" className="btn btn-primary">Subscribe</button>
                        </div>
                    </div>
                </form>
            </div>
    </div>
    )
}

const mapStateToProps = state => {
    return {
        newsletterSubscritionDetails : { ...state.mailChimpSubscriptionDetails },
        state
    }
  }
  
  export default connect(
    mapStateToProps,
    { setMailChimpEmail, setMailChimpfirstName, setMailChimpSecondName, sendDetailsToMailChimpAPI  }
  )(EmailSubscribe);
