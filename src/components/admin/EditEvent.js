import EventForm from './EventForm';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEvent, editEvent } from '../../actions'
import { connect } from 'react-redux';

const EditEvent = (props) => {
    const { id } = useParams()

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
            streetName} = props.eventInfo
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
        props.editEvent(id, formValues)
      }




    useEffect( () => {
        props.fetchEvent(id)
     }, []);

    if (props.selectedEvent) { 
        return (
            <EventForm formSubmitHandler={formSubmitHandler} selectedEvent={ props.selectedEvent } />
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
        selectedEvent: state.events.selectedEvent
    }
}

export default connect(
    mapStateToProps,
    { fetchEvent, editEvent }
    )(EditEvent);