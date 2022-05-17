import EventForm from './EventForm';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEvent, editEvent } from '../../actions'
import { connect } from 'react-redux';
import  { useNavigate } from 'react-router-dom';

const EditEvent = (props) => {
    const  {eventInfo, editEvent, fetchEvent, selectedEvent, token } = props;

    const { id } = useParams()
    const navigate = useNavigate()
    const formSubmitHandler = e => {
        e.preventDefault()
        console.log("triggered form submit")
        const { businessName,
            city,
            date,
            description,
            endTime,
            eventURL,
            excerpt,
            image,
            name,
            postcode,
            startTime,
            streetNumber,
            streetName} = eventInfo;

        const formValues = {
            businessName,
            city,
            date,
            description,
            endTime,
            eventURL,
            excerpt,
            image,
            name,
            postcode,
            startTime,
            streetNumber,
            streetName
        }
        editEvent(id, formValues, token);
        navigate("/events", { replace:true })
      }




    useEffect( () => {
        fetchEvent(id)
     }, [fetchEvent, id]);

    if (selectedEvent) { 
        return (
            <EventForm formSubmitHandler={formSubmitHandler} selectedEvent={ selectedEvent } />
        )
    } else {
        return (
            <p>Loading</p>
        )
    }
}

const mapStateToProps = state => {
    return {
        eventInfo: {...state.admin},
        selectedEvent: state.events.selectedEvent,
        token: state.admin.token
    }
}

export default connect(
    mapStateToProps,
    { fetchEvent, editEvent }
    )(EditEvent);