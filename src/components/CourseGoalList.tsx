// De esta manera importamos un type exportado en otro componente ↓↓↓ Usamos la palabra clave "as" para asignarle un alias y así evitar que haya un error por identidad de nombres entre el type y el componente CourseGoal
import { ReactNode } from "react";
import { CourseGoal as CGoal } from "../App";
import CourseGoal from "./CourseGoal"
import InfoBox from "./InfoBox";

// Recordemos que en typeScript se pueden poner ";" al final de cada propiedad declarada dentro de un objeto 
type CourseGoalListProps = {
    goals: CGoal[];
    // De esta manera podemos pasar por props una función 
    // ↓↓↓
    onDeleteGoal: (id:number) => void;
    // Se escribe "(<Parámetros de la función y sus types>) => <Tipo de retorno de la función>"
}

const CourseGoalList = ({goals, onDeleteGoal}:CourseGoalListProps) => {
    if(goals.length === 0){
        return (
        <InfoBox 
        mode="hint">
            You have no course yet. Start adding some!
        </InfoBox>
        )
    }

    let warningBox: ReactNode;

    if(goals.length >= 4) {
        warningBox = 
        <InfoBox 
        mode="warning"
        severity="medium">
            You're collecting a lot of goals. Don't put too much on your plate!
        </InfoBox>
    }

    return ( 
        <>
            {warningBox}
            <ul>
                {goals.map((goal)=>(
                <li key={goal.id}>

                    <CourseGoal
                    id={goal.id}
                    title={goal.title}
                    onDelete={onDeleteGoal}>
                    {goal.description}
                    </CourseGoal>

                </li>
                ))}
            </ul>
        </>
    );
}
 
export default CourseGoalList;