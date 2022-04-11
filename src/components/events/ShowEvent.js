import React,  {  useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchEvent } from '../../actions';
const parse = require('html-react-parser');

const ShowEvent = (props) => {
    const { id } = useParams()
    const { fetchEvent, selectedEvent } = props

    useEffect(() => {
        fetchEvent(id);
     },[fetchEvent, id]);

     if(!selectedEvent) {
         return "Loading"
     } 
     console.log(selectedEvent)
    return (
        <div>
            <div className="container pt-4">
                <div id="event-box">
                    <div className="event-box-title">
                        <h1 className="h2w">{ selectedEvent.name }</h1>
                        <a href={ selectedEvent.eventURL } className="btn btn-primary h3w event-box-btn-lg">Book Now</a>
                    </div>
                    <div className="event-box-btn-sm"><a href={ selectedEvent.eventURL} className="btn btn-primary h3w">Book Now</a></div>
                    <div className="event-box-excerpt">
                        <h3 className="h3w">{ selectedEvent.excerpt }</h3>
                    </div>
 	            </div>
            </div>
            <div className="container">
	            <div className="d-flex flex-row my-4">
		            <div className="d-flex flex-column w-30 my-4">
			            <p className="bodycopyo">{ selectedEvent.longDateAsString }<br/>{ selectedEvent.startTime } - { selectedEvent.endTime } GMT</p>
                        <p className="bodycopyb">
                            { selectedEvent.businessName  } <br/>
                            { selectedEvent.streetNumber } <br/>
                            { selectedEvent.streetName } <br/>
                            { selectedEvent.city } <br/>
                            { selectedEvent.postcode }
                        </p>
			            <hr className="hr1"/>
                        <p className="bodycopyb mb-0">Got questions about this event?</p>
                        <p className="bodycopyo mt-0">Speak to RCF</p>
                        <hr className="hr1"/>
                        <p className="bodycopyb">share this event</p>
                        <span>
                            <img src="images/oInstagram.svg" alt="Instagram logo"/>
                            <img src="images/oTwitter.svg" alt="Twitter logo"/>
                            <img src="images/oFacebook.svg" alt="Facebook logo"/>
                        </span>
		            </div>
                    <div className="d-flex flex-column w-70 m-4 ">
                        <div id="description"> 
                            {parse(selectedEvent.description)} 
                        </div>
                            <div className="w-90 m-auto">
                                <div className="d-flex flex-column ">
                                    <div className="d-flex flex-row p-3 justify-content-center" style={{ backgroundColor: "#2E8B57" }}>
                                        <h1 className="h2w"><strong>Attend This Event</strong></h1>
                                    </div>
					                <div id="event-box">
                                        <div className="d-flex flex-row p-4 justify-content-between" style={{ backgroundColor: "#426F7E"}}>
                                            <div className="d-flex flex-column w-40 justify-content-between">
                                                <h3 className="h3w m-2 mb-4">New to the Big House?<br/>Sign up with us first...</h3>
                                                <h3 className="h3w m-2 mt-4">Already signed up?<br/>Book your free place now</h3>
                                            </div>
							                <div className="d-flex flex-column w-20 justify-content-between">
							                </div>
							                <div className="d-flex flex-column w-40 justify-content-between">
								                <button className="btn btn-primary h2w m-2">Sign-up</button>
								                <a href={ selectedEvent.eventURL } className="btn btn-secondary h2w m-2">Book Now</a>
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

