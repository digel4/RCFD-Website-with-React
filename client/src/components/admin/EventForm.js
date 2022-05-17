import SunEditor from 'suneditor-react'
import { useRef, useEffect } from 'react';
import {clearSelectedEvent, editEvent, createEvent, setBusinessName, setCity, setDate, setDescription, setEndTime, setEventURL, setExcerpt, setImage, setName, setPassword, setPostcode, setStartTime, setStreetNumber, setStreetName } from '../../actions'
import { connect, useDispatch  } from 'react-redux';
import 'suneditor/dist/css/suneditor.min.css'; 
const EventForm = (props) => {
    const { selectedEvent,
        eventInfo,
        formSubmitHandler,
        setBusinessName,
        setCity,
        setDate,
        setDescription,
        setEndTime,
        setEventURL,
        setExcerpt,
        setImage,
        setName,
        setPostcode,
        setStartTime,
        setStreetNumber,
        setStreetName } = props;

    const showState = () => {
        console.log("state is:")
        console.log(props.state)
    }
    const dispatch = useDispatch()

    useEffect( () => {
        if(selectedEvent) {
            setBusinessName(selectedEvent.businessName); 
            setCity(selectedEvent.city)
            setDate(selectedEvent.longDate)
            setDescription(selectedEvent.description)
            setEndTime(selectedEvent.endTime)
            setEventURL(selectedEvent.eventURL)
            setExcerpt(selectedEvent.excerpt)
            setImage(selectedEvent.image)
            setName(selectedEvent.name)
            setPostcode(selectedEvent.postcode)
            setStartTime(selectedEvent.startTime)
            setStreetNumber(selectedEvent.streetNumber)
            setStreetName(selectedEvent.streetName)
        }
        return () => dispatch(clearSelectedEvent())
     }, []);

    const editor = useRef();

    const getSunEditorInstance = (sunEditor) => {
        editor.current = sunEditor;
    };

    const formTitle = () => selectedEvent ? "Edit Event" : "Create New Event"
    
   

    return (
    <div id="event-form" style={{ width: "80%", margin: "auto" }}>
        <form id="form" action="/admin/new" onSubmit={formSubmitHandler}>
            <h1>	
                { formTitle() }
            </h1>
            <div className="form-group">
                <label>Name: </label>
                <input className="form-control" type="text" name="name" placeholder="name" value={eventInfo.name} onChange={e => setName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Date</label>
                <input className="form-control" type="date" name="date" placeholder="date" value={eventInfo.date} onChange={e => setDate(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Start Time:</label>
                <input className="form-control" type="time" name="startTime" placeholder="Start Time" value={eventInfo.startTime} onChange={e => setStartTime(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>End Time:</label>
                <input className="form-control" type="time" name="endTime" placeholder="End Time" value={eventInfo.endTime} onChange={e => setEndTime(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Eventbrite Link:</label>
                <input className="form-control" type="text" name="eventURL" placeholder="Event URL" value={eventInfo.eventURL} onChange={e => setEventURL(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Event Image URL</label>
                <input className="form-control" type="text" name="image" placeholder="image url" value={eventInfo.image} onChange={e => setImage(e.target.value)}/>
            </div>
            <h1>
                Address
            </h1>
            <div className="form-group">
                <label>Business Name:</label>
                <input className="form-control" type="text" name="businessName" placeholder="Business Name" value={eventInfo.businessName} onChange={e => setBusinessName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Street Number:</label>
                <input className="form-control" type="text" name="streetNumber" placeholder="Street Number"value={eventInfo.streetNumber} onChange={e => setStreetNumber(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Street Name:</label>
                <input className="form-control" type="text" name="streetName" placeholder="Street Name" value={eventInfo.streetName} onChange={e => setStreetName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>City:</label>
                <input className="form-control" type="text" name="city" placeholder="City" value={eventInfo.city} onChange={e => setCity(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Postcode:</label>
                <input className="form-control" type="text" name="postcode" placeholder="Postcode"value={eventInfo.postcode} onChange={e => setPostcode(e.target.value)}/>
            </div>

            <h1>
                Event Descriptions
            </h1>
            <div className="form-group">
                <label>Event Description</label>
                <SunEditor 
                    getSunEditorInstance={getSunEditorInstance}
                    name="description" 
                    onChange={  (content) => setDescription(content) }
                    setContents={ eventInfo.description}
                    setOptions={ {
                        rows:10,
                        cols:100
                } }/>
            </div>
            <div className="form-group">
                <label>Event Excerpt</label>
                <input className="form-control" type="text" maxLength="162" name="excerpt" placeholder="excerpt" value={eventInfo.excerpt} onChange={e => setExcerpt(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
                Submit!
            </button>
            
            <a href="/events">Back to Events</a>
        </form>
        <button className="btn btn-primary btn-block" onClick={showState}>show state</button>
    </div>

    )
}


const mapStateToProps = state => {
    return {
        eventInfo: {...state.admin},
        state
    }
}

export default connect(
    mapStateToProps,
    { editEvent, createEvent, setBusinessName, setCity, setDate, setDescription, setEndTime, setEventURL, setExcerpt, setImage, setName, setPassword, setPostcode, setStartTime, setStreetNumber, setStreetName, clearSelectedEvent }
    )(EventForm);

