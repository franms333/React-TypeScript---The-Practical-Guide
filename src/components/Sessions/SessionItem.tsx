import { Link } from "react-router-dom";
import Button from "../UI/Button";
import { Session } from "./SessionsList";

const SessionItem = ({id, image, summary, title}:Session) => {
    return ( 
        <article key={id} className="session-item">
            <img src={image} alt={title} />
            <div className="session-data">
                <div>
                    <h3>{title}</h3>
                    <p>{summary}</p>
                </div>
                <p className="actions">
                    <Button as={Link} to={id} className="button" textOnly={false}>Learn More</Button>
                </p>
            </div>
        </article>
    );
}
 
export default SessionItem;