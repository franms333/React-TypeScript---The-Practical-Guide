import { ComponentPropsWithoutRef, FormEvent, forwardRef, useImperativeHandle, useRef } from "react";

type FormProps = ComponentPropsWithoutRef<'form'> & {
    onSave: (value: unknown) => void;
};

export type FormHandle = {
    clear: () => void;
}

const Form = forwardRef<FormHandle, FormProps>(({onSave, children, ...otherProps}: FormProps, ref) => {
    const form = useRef<HTMLFormElement>(null);

    useImperativeHandle(ref, () => {
        return {
            clear() {
                console.log('Clearing');
                form.current?.reset();
            }
        }
    });

    function handleSubmit(event:FormEvent<HTMLFormElement>){
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);
        onSave(data);
        form.current?.reset();
    }

    return ( 
        <form onSubmit={handleSubmit} {...otherProps} ref={form}>
            {children}
        </form>
    );
})
 
export default Form;