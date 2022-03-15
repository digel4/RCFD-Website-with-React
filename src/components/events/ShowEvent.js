
import React,  {  useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchEvent } from '../../actions';
import ShowEventDesc from './ShowEventDesc';
const parse = require('html-react-parser');
// {props.selectedEvent.description}

const ShowEvent = (props) => {
    const { id } = useParams()
    useEffect( () => {
        props.fetchEvent(id);
        console.log(props)

     }, []);

     if(!props.selectedEvent) {
         return "Loading"
     } 
    return (
        <div>
            <div className="container pt-4">
                <div id="event-box">
                    <div className="event-box-title">
                        <h1 className="h2w">{ props.selectedEvent.name }</h1>
                        <a href={ props.selectedEvent.eventURL } class="btn btn-primary h3w event-box-btn-lg">Book Now</a>
                    </div>
                    <div className="event-box-btn-sm"><a href={ props.selectedEvent.eventURL} className="btn btn-primary h3w">Book Now</a></div>
                    <div className="event-box-excerpt">
                        <h3 className="h3w">{ props.selectedEvent.excerpt }</h3>
                    </div>
 	            </div>
            </div>
            <div className="container">
	            <div className="d-flex flex-row my-4">
		            <div className="d-flex flex-column w-30 my-4">
			            <p className="bodycopyo">{ props.selectedEvent.longDate }<br/>{ props.selectedEvent.startTime } - { props.selectedEvent.endTime } GMT</p>
                        <p className="bodycopyb">
                            { props.selectedEvent.businessName  } <br/>
                            { props.selectedEvent.streetNumber } <br/>
                            { props.selectedEvent.streetName } <br/>
                            { props.selectedEvent.city } <br/>
                            { props.selectedEvent.postcode }
                        </p>
			            <hr className="hr1"/>
                        <p className="bodycopyb mb-0">Got questions about this event?</p>
                        <p className="bodycopyo mt-0">Speak to RCF</p>
                        <hr className="hr1"/>
                        <p className="bodycopyb">share this event</p>
                        <span>
                            <img src="images/oInstagram.svg"/>
                            <img src="images/oTwitter.svg"/>
                            <img src="images/oFacebook.svg"/>
                        </span>
		            </div>
                    <div className="d-flex flex-column w-70 m-4 ">
                        <div id="description"> {parse(props.selectedEvent.description)} </div>
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
								                <a href={ props.selectedEvent.eventURL } className="btn btn-secondary h2w m-2">Book Now</a>
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

// const mapStateToProps = (state, ownProps) => {
//     return {
//         selectedEvent: state.selectedEvent[ownProps.match.params.id]
//     }
// }

// export default connect(
//     mapStateToProps,
//     { fetchEvent }
// )(ShowEvent);

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


// <!-- title box -->

// <div class="container pt-4">
// 	<div id="event-box">
// 		<div class="event-box-title">
// 			<h1 class="h2w">{= props.selectedEvent.name }</h1>
// 			<a href="{= props.selectedEvent.eventURL }" class="btn btn-primary h3w event-box-btn-lg">Book Now</a>
// 		</div>
// 		<div class="event-box-btn-sm"><a href="{= props.selectedEvent.eventURL}" class="btn btn-primary h3w">Book Now</a></div>
// 		<div class="event-box-excerpt">
// 			<h3 class="h3w">{= props.selectedEvent.excerpt }</h3>
// 		</div>
// 	</div>
// </div>








// <div class="container">
// 	<div class="d-flex flex-row my-4">
// 		<div class="d-flex flex-column w-30 my-4">
// 			<p class="bodycopyo">{ longDate }<br>{ props.selectedEvent.startTime } - { props.selectedEvent.endTime } GMT</p>
// 			<p class="bodycopyb">
// 				{ props.selectedEvent.businessName  } <br>
// 				{ props.selectedEvent.streetNumber } <br>
// 				{ props.selectedEvent.streetName } <br>
// 				{ props.selectedEvent.city } <br>
// 				{ props.selectedEvent.postcode }
// 			</p>
// 			<hr class="hr1">
// 			<p class="bodycopyb mb-0">Got questions about this event?</p>
// 			<p class="bodycopyo mt-0">Speak to RCF</p>
// 			<hr class="hr1">
// 			<p class="bodycopyb">share this event</p>
// 			<span>
// 				<img src="images/oInstagram.svg">
// 				<img src="images/oTwitter.svg">
// 				<img src="images/oFacebook.svg">
// 			</span>
// 		</div>
// 		<div class="d-flex flex-column w-70 m-4 ">
// 			 <div id="description" class="sun-editor-editable"> { props.selectedEvent.description } </div>

// 			<div class="w-90 m-auto">
// 				<div class="d-flex flex-column ">
// 					<div class="d-flex flex-row p-3 justify-content-center" style="background-color: #2E8B57">
// 						<h1 class="h2w"><strong>Attend This Event</strong></h1>
// 					</div>
// 					<div id="event-box">
// 						<div class="d-flex flex-row p-4 justify-content-between" style="background-color: #426F7E">
// 							<div class="d-flex flex-column w-40 justify-content-between">
// 								<h3 class="h3w m-2 mb-4">New to the Big House?<br>Sign up with us first...</h3>
// 								<h3 class="h3w m-2 mt-4">Already signed up?<br>Book your free place now</h3>
// 							</div>
// 							<div class="d-flex flex-column w-20 justify-content-between">
// 							</div>
// 							<div class="d-flex flex-column w-40 justify-content-between">
// 								<button class="btn btn-primary h2w m-2">Sign-up</button>
// 								<a href="{= event.eventURL }" class="btn btn-secondary h2w m-2">Book Now</a>
// 							</div>
// 						</div>
// 					</div>
// 				</div> 
// 			</div>
// 		</div>
// 	</div>
// </div>

