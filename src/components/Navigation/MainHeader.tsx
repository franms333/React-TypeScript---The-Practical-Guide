import { Link } from "react-router-dom";
import Button from "../UI/Button";
import { useState } from "react";
import UpcomingSessions from "../Sessions/UpcomingSessions";

const MainHeader = () => {
    const [upcomingSessionsVisible, setUpcomingSessionsVisible] = useState(false);

    function showUpcomingSessions() {
        setUpcomingSessionsVisible(true);
    }

    function hideUpcomingSessions() {
        setUpcomingSessionsVisible(false);
    }

    return ( 
        <>
        {upcomingSessionsVisible && (
            <UpcomingSessions onClose={hideUpcomingSessions} />
        )}
        <div id="main-header">
            <h1>React Mentoring</h1>
            <nav>
                <ul>
                    <li>
                        <Button 
                        as={Link}
                        textOnly
                        to={'/'}>
                            Our Mission
                        </Button>
                    </li>
                    <li>
                        <Button 
                        as={Link} 
                        textOnly
                        to={'sessions'}>
                            Browse Sessions
                        </Button>
                    </li>
                    <Button 
                    as={'button'}
                    textOnly={false}
                    onClick={showUpcomingSessions}>
                        Upcoming Sessions
                    </Button>
                </ul>
            </nav>
        </div>
        </>
    );
}
 
export default MainHeader;