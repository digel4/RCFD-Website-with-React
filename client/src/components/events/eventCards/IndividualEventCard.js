import EventCardButtons from './EventCardButtons';

const EventCard = (props) => {
    const { image, shortDate, id, name, excerpt, token } = props;
    return (
        // <div className="card">
        //     <img src={image} alt="..."></img>
        //     <p className="body-copy-black">{shortDate}</p>
        //     <h3 className="h3-orange">{name}</h3>
        //     <p className="body-copy-black">{excerpt}</p>
        //     <EventCardButtons id={id} token={token}/>
        // </div>

        <div className="custom-card">
            <div className="custom-card-image" style={ { backgroundImage: `url(${image})` }} />
                <div className="custom-card-content-initial">
                    <h5>{name}</h5>
                    <p>{shortDate}</p>
                </div>
                <div className="custom-card-content-hidden">
                    <p>{excerpt}</p>
                    <EventCardButtons id={id} token={token}/>
                </div>
            
            
            {/* <img src={image} alt="..."></img> */}
            
            
            
            
        </div>
    )
}

export default EventCard
