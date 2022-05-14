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
        <div className="container" id="email-subscribe">
            <h1 className="h1-white">Stay in Touch!</h1>
            <h2 className="h2-white">Always be in the know about upcoming RCF events and workshops by subscribing to our newsletter!</h2>
            <form id="email-subscribe-form" onSubmit={formSubmitHandler}>
                <input 
                    type="text" 
                    className="" 
                    name="firstName" 
                    placeholder="First Name" 
                    value={newsletterSubscritionDetails.firstName}
                    onChange={e => {
                        setMailChimpfirstName(e.target.value)
                        console.log(newsletterSubscritionDetails.firstName)
                    }}
                />
                <input 
                    type="text" 
                    className="" 
                    name="secondName" 
                    placeholder="Second Name"
                    value={newsletterSubscritionDetails.secondName}
                    onChange={e => {
                        setMailChimpSecondName(e.target.value)
                        console.log(newsletterSubscritionDetails.secondName)
                    }}
                />
                <input 
                    type="email" 
                    className="" 
                    name="email" 
                    placeholder="Email"
                    value={newsletterSubscritionDetails.email}
                    onChange={e => {
                        setMailChimpEmail(e.target.value);
                        console.log(props.state)
                    }}
                />
                <button type="submit" id="submit" className="btn btn-primary">Subscribe</button>
            </form>
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
