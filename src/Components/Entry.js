import MapPing from "../Images/map-ping.jpg"

const Entry = (props) => {
    console.log(props)
    return(
        <div className="Entry">
            <div className="Entry-Image">
                <img src={props.img} className="image"/>
            </div>
            <div className="Entry-Text">
                <div className="Entry-Maps">
                    <img src={MapPing} className="Ping" />
                    <p className="Entry-location">{props.location}</p>
                    <a href={props.googleMaps} className="Entry-hyperlink" target="_blank">View on Google Maps</a>
                </div>
                <h1 className="Entry-title">{props.title}</h1>
                <div>
                    <h3 className="Entry-dates">{props.startDate} - {props.endDate}</h3>
                </div>
                <p className="Entry-Description">{props.description}</p>
                <p></p>
            </div>
        </div>
    )
}

export default Entry;