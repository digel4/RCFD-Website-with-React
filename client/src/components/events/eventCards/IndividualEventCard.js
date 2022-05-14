import EventCardButtons from './EventCardButtons';

const EventCard = (props) => {
    const { image, shortDate, id, name, excerpt, token } = props;
    return (
        <div className="card">
            <img src={image} alt="..."></img>
            <p className="body-copy-black">{shortDate}</p>
            <h3 className="h3-orange">{name}</h3>
            <p className="body-copy-black">{excerpt}</p>
            <EventCardButtons id={id} token={token}/>
        </div>
    )
}

export default EventCard
