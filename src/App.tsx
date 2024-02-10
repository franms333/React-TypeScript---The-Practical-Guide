import './App.css'
import { useState } from 'react';
import Header from './components/Header';
import goalsImage from './assets/goals.jpg';
import CourseGoalList from './components/CourseGoalList';
import NewGoal from './components/NewGoal';

// A razón de que typescript es javascript al final de todo, podemos exportar tipos tambien, así evitamos duplicar código a lo largo de nuestros componentes
// Recordemos que en typeScript se pueden poner ";" al final de cada propiedad declarada dentro de un objeto 
export type CourseGoal = {
  title: string;
  description: string;
  id: number;
}

function App() {
  // Video 36: Al trabajar con arrays usando useState debemos setear el tipo de valores que tendrá nuestro array, de lo contrario no podremos pushear ningun dato al array ya que en estos casos el array comienza con el tipo "[]never" 
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(goal:string, summary:string) {
    setGoals((prevGoals)=>{
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary
      } 
      return [...prevGoals,  newGoal]
    })
  }

  function handleDeleteGoal(id:number) {
    setGoals((prevGoals)=>(prevGoals.filter((goal) => goal.id !== id)))
  }

  return (
    <main>
      <Header image={{src: goalsImage, alt: 'A list of goals'}}>
        <h1>Your Course Goals</h1>
      </Header>
      {/* <button onClick={handleAddGoal}>Add Goal</button> */}
      <NewGoal 
      onAddGoal={handleAddGoal}/>
      <CourseGoalList 
      goals={goals}
      onDeleteGoal={handleDeleteGoal}
      />
    </main>
  )
}

export default App
