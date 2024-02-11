import { type FormEvent, useEffect, useRef } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Modal, { ModalHandle } from "../UI/Modal";
import { Session, useSessionContext } from "../../store/sessions-context";

type BookSessionProps = {
    session: Session;
    onDone:()=>void
}

const BookSession = ({session, onDone}:BookSessionProps) => {
    const modalRef = useRef<ModalHandle>(null);
    const sessionContext = useSessionContext();

    useEffect(()=>{
        if(modalRef.current){
            modalRef.current.open();
        }
    },[])

    function handleSubmit(event:FormEvent<HTMLFormElement>){
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);
        console.log(data); // would normally be sent to a server, together with session data

        sessionContext.bookSession(session);
        console.log(sessionContext.upcomingSessions);
        onDone();
    }

    return ( 
        <Modal ref={modalRef} onClose={onDone}>
            <h2>Book Session</h2>
            <form onSubmit={handleSubmit}>
                <Input id="name" label="Your name" type="text" name="name"/>
                <Input id="email" label="Your email" type="email" name="email"/>
                <p>
                    <Button as={'button'} textOnly={true} onClick={onDone}>Cancel</Button>
                    <Button as={'button'} textOnly={false}>Book a Session</Button>
                </p>
            </form>
        </Modal>
    );
}
 
export default BookSession;