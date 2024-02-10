import { PropsWithChildren } from "react";

// interface CourseGoalProps {
//     title:string,
//     children:ReactNode
// }

// Recordemos que en typeScript se pueden poner ";" al final de cada propiedad declarada dentro de un objeto 
type CourseGoalProps = PropsWithChildren<{
    id:number;
    title:string;
    onDelete:(id:number)=>void;
}>

// Ejemplo con functional component
const CourseGoal = ({id, title, onDelete, children}: CourseGoalProps) => {
    return ( 
        <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <button onClick={()=>{onDelete(id)}}>Delete</button>
        </article>
    );
}


// Ejemplo usando arrow function component
// De esta manera tenemos una manera alternativa declarando props ya que ahora podemos usar el tipo "FC" que viene de "Functional Component" que es un generic type que permite agregar entre <> el tipo de nuestros props
// const CourseGoal: FC<CourseGoalProps> = ({title, children}) => {
//     return ( 
//         <article>
//             <div>
//                 <h2>{title}</h2>
//                 {children}
//             </div>
//             <button>Delete</button>
//         </article>
//     );
// }
 
export default CourseGoal;