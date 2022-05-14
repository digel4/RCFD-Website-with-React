import React,  {  useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchEvent } from '../../actions';
import { LinkedinShareButton, TwitterShareButton, FacebookShareButton } from "react-share";

const parse = require('html-react-parser');

const ShowEvent = (props) => {
    const { id } = useParams()
    const { fetchEvent, selectedEvent } = props
    const shareURL = `https://www.realcreativefutures.co.uk/events/${id}`
    const shareMessage = 'Check out this upcoming event by Real Creative Futures Digital';

    useEffect(() => {
        fetchEvent(id);
     },[fetchEvent, id]);

     if(!selectedEvent) {
         return "Loading"
     } 
    return (
        <div id="show-event">
            <div id="event-box">
                {/* <div className="event-box-title"> */}
                    <h1 className="h2-white">{ selectedEvent.name }</h1>
                    <a href={ selectedEvent.eventURL } target="_blank" className="btn btn-primary h3-white">Book Now</a>
                {/* </div> */}
                <h3 className="event-box-excerpt h3-white">{ selectedEvent.excerpt }</h3>
                {/* <a href={ selectedEvent.eventURL } className="btn btn-primary h3-white event-box-btn-lg">Book Now</a> */}
            </div>
            <div id="show-event-content">
                <div>
                    <p className="body-copy-orange">{ selectedEvent.longDateAsString }<br/>{ selectedEvent.startTime } - { selectedEvent.endTime } GMT</p>
                    <p className="body-copy-black">
                        { selectedEvent.businessName  } <br/>
                        { selectedEvent.streetNumber } <br/>
                        { selectedEvent.streetName } <br/>
                        { selectedEvent.city } <br/>
                        { selectedEvent.postcode }
                    </p>
                    <hr className="hr1"/>
                    <p className="body-copy-black">Got questions about this event?</p>
                    
                    <a href="mailto:rcf@nae.org.uk"><p className="body-copy-orange">Speak to RCF</p></a>
                    <hr className="hr1"/>
                    <p className="body-copy-black">share this event</p>
                    <span>
                        <LinkedinShareButton
                            url={shareURL}>
                            <img className="social-media-share-links" src="/images/linkedin.svg" alt="linkedin logo"/>
                        </LinkedinShareButton>
                        
                        <TwitterShareButton
                            url={shareURL}
                            title={shareMessage}>
                            <img className="social-media-share-links" src="/images/otwitter.svg" alt="twitter logo"/>
                        </TwitterShareButton>
                        <FacebookShareButton
                            url={shareURL}
                            quote={shareMessage}>
                            <img className="social-media-share-links" src="/images/ofacebook.svg" alt="facebook logo"/>
                        </FacebookShareButton>
                    </span>
                    <hr className="hr1"/>
                </div>
                <div>
                    <div id="description"> 
                        {
                        parse(selectedEvent.description) 
                        } 
                    </div>
                    <div id="event-box-extra-info" style={{ backgroundColor: "#2E8B57" }}>
                        <h1 className="h2-white"><strong>Attend This Event</strong></h1>
                        <div style={{ backgroundColor: "#426F7E"}}>
                            <h3 className="h3-white">New to the Big House?<br/>Sign up with us first...</h3>
                            <a href="https://bighouse.org.uk/#" target="_blank" className="h2-white btn btn-primary">Sign-up</a>
                        </div>
                        <div style={{ backgroundColor: "#426F7E"}}>
                            <h3 className="h3-white">Already signed up?<br/>Book your free place now</h3>
                            <a href={ selectedEvent.eventURL } target="_blank" className="h2-white btn btn-primary">Book Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

const mapStateToProps = state => {
    console.log("state in showEvent is: " + state.events.selectedEvent)
    return {
        selectedEvent: state.events.selectedEvent
    }
}

export default connect(
    mapStateToProps,
    { fetchEvent }
)(ShowEvent);

