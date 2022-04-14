import EventCardButtons from './EventCardButtons';

const EventCard = (props) => {
    const { image, shortDate, id, name, excerpt, token } = props;
    return (
        <div>
            <div className="card">
                <img src={image} className="card-img-top " alt="..."></img>
                <div class="d-flex card-date card-img-overlay w-25">
                    <p className="bodycopyb text-center card-text">
                        {shortDate}
                    </p>
                </div>
                <div className="d-flex flex-column card-body mx-auto card-img-overlay">
                    <h3 className="h3o card-text text-center mx-auto">
                        {name}
                    </h3>
                    <p className="bodycopyb card-text text-center">
                        {excerpt}
                    </p>
                    <EventCardButtons id={id} token={token}/>
                </div>
            </div>
        </div>
    )
}


export default EventCard
