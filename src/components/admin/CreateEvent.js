import EventForm from './EventForm';
import { connect } from 'react-redux';
import { createEvent } from '../../actions';

const CreateEvent = (props) => {

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
        // setBusinessName(props.eventInfo.businessName)
        // setCity(props.eventInfo.city)
        // setDate(props.eventInfo.date)
        // setDescription(props.eventInfo.description)
        // setEndTime(props.eventInfo.endTime)
        // setEventURL(props.eventInfo.eventURL)
        // setExcerpt(props.eventInfo.excerpt)
        // setImage(props.eventInfo.image)
        // setName(props.eventInfo.name)
        // setPostcode(props.eventInfo.postcode)
        // setStartTime(props.eventInfo.startTime)
        // setStreetNumber(props.eventInfo.streetNumber)
        // setStreetName(props.eventInfo.streetName)
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
        // props.createEvent(props.eventInfo.businessName,
        //     props.eventInfo.city,
        //     props.eventInfo.date,
        //     props.eventInfo.description,
        //     props.eventInfo.endTime,
        //     props.eventInfo.eventURL,
        //     props.eventInfo.excerpt,
        //     props.eventInfo.image,
        //     props.eventInfo.name,
        //     props.eventInfo.postcode,
        //     props.eventInfo.startTime,
        //     props.eventInfo.streetNumber,
        //     props.eventInfo.streetName)
        props.createEvent(formValues)
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