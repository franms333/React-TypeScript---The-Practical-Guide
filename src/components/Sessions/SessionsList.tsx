import SessionItem from "./SessionItem";

export type Session = {
    id:string;
    title:string;
    summary:string;
    image:string;
}

type SessionListProps = {
    sessions: Session[]
}

const SessionsList = ({sessions}:SessionListProps) => {
    return ( 
        <ul id="sessions-list">
            {sessions.map(session => 
                <li key={session.id}>
                    <SessionItem {...session}/>
                </li>
            )}
        </ul>
    );
}
 
export default SessionsList;