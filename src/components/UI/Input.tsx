import { ComponentPropsWithoutRef, forwardRef } from "react";

type InputProps = {
    label: string;
    id: string;
// Video 51: Al usar el símbolo & luego de la llave de cierre de un type significa que el type que estamos generando trabaja en conjunto como un Union Type junto al otro type que agregamos luego de la "&"
// El type ComponentPropsWithoutRef es un type proporcionado por react que nos permite obtener todos los atributos relativos al elemento HTML que le pasamos en medio de las <>. La diferencia con ComponentPropsWithRef es que este último nos permite pasarle como atributo el "ref"
} & ComponentPropsWithoutRef<'input'>

// El type lo agregamos dinámicamente gracias al ComponentPropsWithoutRef<'input'>

// ForwardRef es una función de react que nos permite pasar ref's de otros componentes a nuestro componente. Al usar typescript recibe 2 parámetros dentro del símbolo <>. 
// 1.- El tipo del elemento que queremos pasar por ref
// 2.- Los props del elemento
const Input = forwardRef<HTMLInputElement, InputProps>((
    {id, label, ...props}:InputProps, 
    ref) => {
    return ( 
        <p>
            <label htmlFor={id}>{label}</label>
            {/* <input id={id} type={type}/> */}
            <input id={id} name={id} {...props} ref={ref}/>
        </p>
    );
})
 
export default Input;