import { type ComponentPropsWithoutRef } from "react";

type InputProps = {
    label:string;
    id:string;
} & ComponentPropsWithoutRef<'input'>

const Input = ({id, label, ...props}:InputProps) => {
    return ( 
        <div className="control">
            <label htmlFor={id}>{label}</label>
            <input id={id} name={id} {...props}/>
        </div>
    );
}
 
export default Input;