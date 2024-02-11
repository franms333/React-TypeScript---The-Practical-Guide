import { useEffect, useRef } from "react";
import Modal, { ModalHandle } from "../UI/Modal";
import { useSessionContext } from "../../store/sessions-context";
import Button from "../UI/Button";
import UpcomingSession from "./UpcomingSession";

type UpcomingSessionsProps = {
    onClose: () => void;
}

const UpcomingSessions = ({onClose}:UpcomingSessionsProps) => {
    const modalRef = useRef<ModalHandle>(null);
    const sessionsContext = useSessionContext();

    console.log(sessionsContext);

    // useEffect is used to open the Modal via its exposed `open` method when the component is mounted
    useEffect(() => {
        if (modalRef.current) {
            modalRef.current.open();
        }
    }, []);

    function handleCancelSession(sessionId: string) {
        sessionsContext.cancelSession(sessionId);
    }
    
    const hasSessions = sessionsContext.upcomingSessions.length > 0;

    return ( 
        <Modal ref={modalRef} onClose={onClose}>
            <h2>Upcoming Sessions</h2>
            {hasSessions && (
                <ul>
                {sessionsContext.upcomingSessions.map((session) => (
                    <li key={session.id}>
                    <UpcomingSession
                        session={session}
                        onCancel={() => handleCancelSession(session.id)}
                    />
                    </li>
                ))}
                </ul>
            )}
            {!hasSessions && <p>No upcoming sessions.</p>}
            <p className="actions">
                <Button as={'button'} textOnly={false} onClick={onClose}>Close</Button>
            </p>
        </Modal>
    );
}
 
export default UpcomingSessions;