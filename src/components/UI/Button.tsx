import { type ComponentPropsWithoutRef, type ElementType, type ReactNode } from "react";

type ButtonProps<T extends ElementType> = {
    as?: T;
    children: ReactNode;
    textOnly:boolean;
} & ComponentPropsWithoutRef<T>

const Button = <C extends ElementType>({as, children, textOnly, ...props}:ButtonProps<C>) => {
    const Component = as || 'div';
    return ( 
        <>
            <Component className={`button ${textOnly ? 'button--text-only' : ''}`} {...props}>{children}</Component>
        </>
    );
}
 
export default Button;