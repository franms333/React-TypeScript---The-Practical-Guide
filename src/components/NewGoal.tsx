import { FormEvent, useRef } from "react";

type NewGoalProps = {
    onAddGoal: (goal: string, summary: string) => void
}

const NewGoal = ({onAddGoal}:NewGoalProps) => {
    // UseRef explanation: Video 42
    // 1.-Iniciamos los ref con "null" porque de lo contrario nos pasa algo similar al caso de los array con useState, no podemos pasarselos al atributo "ref" de los inputs por no estar definido en un principio
    // 2.-Ahora bien, nos corresponde agregar un tipo de dato al generic type de useRef(), podemos hacer eso usando los símbolos <> y en el medio colocar el tipo de dato a través del cual usaremos useRef, en este caso es "HTMLInputElement" ya que usaremos useRef en dos elementos de input
    const goalRef = useRef<HTMLInputElement>(null);
    const summaryRef = useRef<HTMLInputElement>(null);
    // "FormEvent" es un type que nos da react para identificar las cosas como un evento que se dispara por un submit en un form
    // En este caso, si fueramos a usar el acercamiento de "new FormData" para obtener el valor de los inputs, necesitamos agregar un type al generic type "FormEvent", en este caso usaremos "HTMLFormElement". Siempre hay que agregar el tipo del elemento HTML del cual sacaremos los datos
    function handleSubmit(event:FormEvent<HTMLFormElement>){
        // el símbolo de "?" es una expresión introducida a javascript con ES11 en la que ordenamos a typescript que la variable es opcional, puede como puede no estar declarada
        event?.preventDefault();

        // Usar new FormData(event.currentTarget) nos dejaría ver el valor de cada input del form que tenga el atributo "name" definido, pero eligiremos usar el approach con useRef
        // new FormData(event.currentTarget);

        // El signo de "!" es una orden que le damos a typeScript para asegurarle que el valor que le pasamos NO es null o undefined
        // Ahora solo queda verificar que el valor del ref que pasamos tenga un tipo determinado que permita tener "value", eso ya lo hicimos en la explicación 2 de los useRef
        const enteredGoal = goalRef.current!.value;
        const enteredSummary = summaryRef.current!.value;

        event.currentTarget.reset();
        onAddGoal(enteredGoal, enteredSummary);
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <p>
                <label >Your Goal</label>
                <input 
                type="text" 
                id="goal"
                ref={goalRef}
                // name="goal"
                />
            </p>
            <p>
                <label >Short Summary</label>
                <input 
                type="text" 
                id="summary"
                ref={summaryRef}
                // name="summary" 
                />
            </p>
            <p>
                <button 
                type="submit">Add Goal</button>
            </p>
        </form>
    );
}
 
export default NewGoal;