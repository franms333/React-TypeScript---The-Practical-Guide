// Video 54: Polymorphic Component

import { ComponentPropsWithoutRef, type ElementType, type ReactNode } from "react";

// ElementType es distinto a ReactNode, basicamente ElementType hace alusión al NOMBRE de un componente o elemento en sí. ReactNode hace alusión a un código JSX que tiene que ser renderizado
type ContainerProps<T extends ElementType> = {
    as?: T;
    children: ReactNode;
} & ComponentPropsWithoutRef<T>

// Acá encerramos el prop "as" en una constante ya que así podemos usar una variable que comience con mayúscula, requisito necesario para usar componentes custom
const Container = <C extends ElementType>({as, children, ...props}:ContainerProps<C>) => {
    const Component = as || 'div';
    return (
        <Component {...props}>{children}</Component>
    );
}
 
export default Container;