import SunEditor from 'suneditor-react'
import { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEvent, editEvent, createEvent, setBusinessName, setCity, setDate, setDescription, setEndTime, setEventURL, setExcerpt, setImage, setName, setPassword, setPostcode, setStartTime, setStreetNumber, setStreetName } from '../../actions'
import { connect } from 'react-redux';
import 'suneditor/dist/css/suneditor.min.css'; 
const EventForm = (props) => {
    // const editor = SUNEDITOR.create((document.getElementById('editor')),{
    //     // All of the plugins are loaded in the "window.SUNEDITOR" object in dist/suneditor.min.js file
    //     // Insert options
    //     // Language global object (default: en)
    //     lang: SUNEDITOR_LANG['en']
    //     });
    //console.log(props)
    const showState = () => {
        console.log("state is:")
        console.log(props.state)
    }

    useEffect( () => {
        if(props.selectedEvent) {
            props.setBusinessName(props.selectedEvent.businessName); 
            props.setCity(props.selectedEvent.city)
            props.setDate(props.selectedEvent.longDate)
            props.setDescription(props.selectedEvent.description)
            props.setEndTime(props.selectedEvent.endTime)
            props.setEventURL(props.selectedEvent.eventURL)
            props.setExcerpt(props.selectedEvent.excerpt)
            props.setImage(props.selectedEvent.image)
            props.setName(props.selectedEvent.name)
            props.setPostcode(props.selectedEvent.postcode)
            props.setStartTime(props.selectedEvent.startTime)
            props.setStreetNumber(props.selectedEvent.streetNumber)
            props.setStreetName(props.selectedEvent.streetName)
        }
     }, []);

    // document.getElementById("form").addEventListener("submit", function() {
    //     editor.save()
    // });

    const editor = useRef();

    const getSunEditorInstance = (sunEditor) => {
        editor.current = sunEditor;
    };
    // const formSubmitHandler = e => {
    //     e.preventDefault()
    //     console.log("triggered form submit")
    //     const { businessName,
    //         city,
    //         date,
    //         desc,
    //         endTime,
    //         eventURL,
    //         excerpt,
    //         image,
    //         name,
    //         postcode,
    //         startTime,
    //         streetNumber,
    //         streetName} = props.eventInfo
    //     // setBusinessName(props.eventInfo.businessName)
    //     // setCity(props.eventInfo.city)
    //     // setDate(props.eventInfo.date)
    //     // setDescription(props.eventInfo.description)
    //     // setEndTime(props.eventInfo.endTime)
    //     // setEventURL(props.eventInfo.eventURL)
    //     // setExcerpt(props.eventInfo.excerpt)
    //     // setImage(props.eventInfo.image)
    //     // setName(props.eventInfo.name)
    //     // setPostcode(props.eventInfo.postcode)
    //     // setStartTime(props.eventInfo.startTime)
    //     // setStreetNumber(props.eventInfo.streetNumber)
    //     // setStreetName(props.eventInfo.streetName)
    //     const formValues = {
    //         businessName,
    //         city,
    //         date,
    //         desc,
    //         endTime,
    //         eventURL,
    //         excerpt,
    //         image,
    //         name,
    //         postcode,
    //         startTime,
    //         streetNumber,
    //         streetName
    //     }
    //     // props.createEvent(props.eventInfo.businessName,
    //     //     props.eventInfo.city,
    //     //     props.eventInfo.date,
    //     //     props.eventInfo.description,
    //     //     props.eventInfo.endTime,
    //     //     props.eventInfo.eventURL,
    //     //     props.eventInfo.excerpt,
    //     //     props.eventInfo.image,
    //     //     props.eventInfo.name,
    //     //     props.eventInfo.postcode,
    //     //     props.eventInfo.startTime,
    //     //     props.eventInfo.streetNumber,
    //     //     props.eventInfo.streetName)
    //     props.createEvent(formValues)
    //   }


    return (
        // <p></p>
    <div className="container row" style={{ width: "80%", margin: "auto" }}>
        <form id="form" action="/admin/new" onSubmit={props.formSubmitHandler}>
            <h1>	
                Create a new event
            </h1>
            <div className="form-group">
                <label>Name: </label>
                <input className="form-control" type="text" name="name" placeholder="name" value={props.eventInfo.name} onChange={e => props.setName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Date</label>
                <input className="form-control" type="date" name="date" placeholder="date" value={props.eventInfo.date} onChange={e => props.setDate(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Start Time:</label>
                <input className="form-control" type="time" name="startTime" placeholder="Start Time" value={props.eventInfo.startTime} onChange={e => props.setStartTime(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>End Time:</label>
                <input className="form-control" type="time" name="endTime" placeholder="End Time" value={props.eventInfo.endTime} onChange={e => props.setEndTime(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Eventbrite Link:</label>
                <input className="form-control" type="text" name="eventURL" placeholder="Event URL" value={props.eventInfo.eventURL} onChange={e => props.setEventURL(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Event Image URL</label>
                <input className="form-control" type="text" name="image" placeholder="image url" value={props.eventInfo.image} onChange={e => props.setImage(e.target.value)}/>
            </div>
            <h1>
                address
            </h1>
            <div className="form-group">
                <label>Business Name:</label>
                <input className="form-control" type="text" name="businessName" placeholder="Business Name" value={props.eventInfo.businessName} onChange={e => props.setBusinessName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Street Number:</label>
                <input className="form-control" type="text" name="streetNumber" placeholder="Street Number"value={props.eventInfo.streetNumber} onChange={e => props.setStreetNumber(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Street Name:</label>
                <input className="form-control" type="text" name="streetName" placeholder="Street Name" value={props.eventInfo.streetName} onChange={e => props.setStreetName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>City:</label>
                <input className="form-control" type="text" name="city" placeholder="City" value={props.eventInfo.city} onChange={e => props.setCity(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Postcode:</label>
                <input className="form-control" type="text" name="postcode" placeholder="Postcode"value={props.eventInfo.postcode} onChange={e => props.setPostcode(e.target.value)}/>
            </div>

            <h1>
                Event Descriptions
            </h1>
            <div className="form-group">
                <label>Event Description</label>
                <SunEditor 
                    getSunEditorInstance={getSunEditorInstance}
                    name="description" 
                    // value = {props.eventInfo.description} 
                    //onChange={e => props.setDescription(e.target.value)} 
                    onChange={  (content) => props.setDescription(content) }
                    //props.selectedEvent.description || 
                    setContents={ props.eventInfo.description}
                    onClick={(e) => {console.log("click")}}
                    setOptions={ {
                        rows:10,
                        cols:100
                } }/>
            </div>
            <div className="form-group">
                <label>Event Excerpt</label>
                <input className="form-control" type="text" maxLength="162" name="excerpt" placeholder="excerpt" value={props.eventInfo.excerpt} onChange={e => props.setExcerpt(e.target.value)}/>
            </div>
            <button type="submit" class="btn btn-primary btn-block">
                Submit!
            </button>
            
            <a href="/events">Back to Events</a>
        </form>
        <button className="btn btn-primary btn-block" onClick={showState}>show state</button>
    </div>

    )
}

// export default NewEvent;



// description

// excerpt

// postcode
// city
// streetNumber
// streetName
// businessName

// image
// eventURL

// endTime
// startTime
// date

// name


{/* <p>hello from login</p>
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
    </div> */}

const mapStateToProps = state => {
    return {
        eventInfo: {...state.admin},
        // selectedEvent: state.events.selectedEvent,
        state
    }
}

export default connect(
    mapStateToProps,
    { editEvent, createEvent, setBusinessName, setCity, setDate, setDescription, setEndTime, setEventURL, setExcerpt, setImage, setName, setPassword, setPostcode, setStartTime, setStreetNumber, setStreetName }
    )(EventForm);

