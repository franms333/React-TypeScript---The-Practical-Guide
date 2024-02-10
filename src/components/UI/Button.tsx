import { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    href?: never;
}

type AnchorProps = ComponentPropsWithoutRef<'a'> & {
    href?: string;
}

// Explicación video 53
// De esta manera podemos hacer que los props tengan propiedades dinámicas dependiendo de si es un botón o un link
// Primero definimos dos types, uno para el botón que tenga la propiedad "href" como never ya que los botones no tienen href y otra para el link que tenga la propiedad href del tipo string.
// Luego hacemos una función que nos devuelva el tipo de prop que queremos recibir dependiendo de si es de un tipo u otro. Para esto haremos una expresión booleana que trabaje en conjunto con el type de retorno de la función "props is AnchorProps" si la validación "return 'href' in props" es true, nos devolverá los props de un link, de lo contrario nos devolverá los props de un botón 
function isAnchorProps(props: ButtonProps|AnchorProps): props is AnchorProps{
    return 'href' in props
}

// Props puede recibir ya sea propiedades de botón o de link
const Button = (props: ButtonProps|AnchorProps) => {
    // Al llamar la función isAnchorProps acá, aislamos el caso en el que el elemento en el que lo usamos es un link
    if(isAnchorProps(props)){
        return (
            <a className="button" {...props}></a>
        );
    }

    // Aquí props solo tiene propiedades de botón
    return (
        <button className="button" {...props}></button>
    );
}
 
export default Button;