import EventForm from './EventForm';
import { connect } from 'react-redux';
import { createEvent } from '../../actions';
import  { useNavigate } from 'react-router-dom';

const CreateEvent = (props) => {
    const navigate = useNavigate()
    const formSubmitHandler = e => {
        e.preventDefault()
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
        props.createEvent(formValues);
        navigate("/events", { replace:true })
        
      }


    return (
        <EventForm formSubmitHandler={formSubmitHandler}/>
    )
}


const mapStateToProps = state => {
    return {
        eventInfo: {...state.admin},
    }
}

export default connect(
    mapStateToProps,
    { createEvent }
    )(CreateEvent);