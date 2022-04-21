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
            <div className="pt-4">
                <div id="event-box">
                    <div className="event-box-title">
                        <h1 className="h2-white">{ selectedEvent.name }</h1>
                        <a href={ selectedEvent.eventURL } className="btn btn-primary h3-white event-box-btn-lg">Book Now</a>
                    </div>
                    <div className="event-box-btn-sm"><a href={ selectedEvent.eventURL} className="btn btn-primary h3-white">Book Now</a></div>
                    <div className="event-box-excerpt">
                        <h3 className="h3-white">{ selectedEvent.excerpt }</h3>
                    </div>
 	            </div>
            </div>
            <div>
	            <div className="d-flex flex-row my-4">
		            <div className="d-flex flex-column w-30 my-4">
			            <p className="body-copy-orange">{ selectedEvent.longDateAsString }<br/>{ selectedEvent.startTime } - { selectedEvent.endTime } GMT</p>
                        <p className="body-copy-black">
                            { selectedEvent.businessName  } <br/>
                            { selectedEvent.streetNumber } <br/>
                            { selectedEvent.streetName } <br/>
                            { selectedEvent.city } <br/>
                            { selectedEvent.postcode }
                        </p>
			            <hr className="hr1"/>
                        <p className="body-copy-black mb-0">Got questions about this event?</p>
                        
                        <a href="mailto:rcf@nae.org.uk"><p className="body-copy-orange mt-0 mb-0">Speak to RCF</p></a>
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
		            </div>
                    <div className="d-flex flex-column w-70 m-4 ">
                        <div id="description"> 
                            {parse(selectedEvent.description)} 
                        </div>
                        <div className="w-90 m-auto">
                            <div className="d-flex flex-column ">
                                <div className="d-flex flex-row p-3 justify-content-center" style={{ backgroundColor: "#2E8B57" }}>
                                    <h1 className="h2-white"><strong>Attend This Event</strong></h1>
                                </div>
                                <div id="event-box">
                                    <div className="d-flex flex-row p-4 justify-content-between" style={{ backgroundColor: "#426F7E"}}>
                                        <div className="d-flex flex-column w-40 justify-content-between">
                                            <h3 className="h3-white m-2 mb-4">New to the Big House?<br/>Sign up with us first...</h3>
                                            <h3 className="h3-white m-2 mt-4">Already signed up?<br/>Book your free place now</h3>
                                        </div>
                                        <div className="d-flex flex-column w-20 justify-content-between">
                                        </div>
                                        <div className="d-flex flex-column w-40 justify-content-between">
                                            <a href="https://bighouse.org.uk/#" className="btn btn-primary h2-white m-2">Sign-up</a>
                                            <a href={ selectedEvent.eventURL } className="btn btn-secondary h2-white m-2">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div> 
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

