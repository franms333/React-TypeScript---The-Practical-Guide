import { useEffect, useRef } from "react";
import { Card } from "./PolyM-Components-Examples/Card";
import { IconButton } from "./PolyM-Components-Examples/IconButton";
import { List } from "./PolyM-Components-Examples/List";
import Button from "./components/UI/Button";
import Container from "./components/UI/Container";
import Input from "./components/UI/Input";
import Form, { type FormHandle } from "./components/UI/Form";
import Header from "./components/Header";
import AddTimer from "./components/AddTimer";
import Timers from "./components/Timers";
import TimersContextProvider from "./store/timers-context";

function App() {
  // const customForm = useRef<FormHandle>(null)

  // Al hacer esto podemos asegurarnos que lo que se pasa por ref es obligatoriamente un elemento input 
  // const inputRef = useRef<HTMLInputElement>(null);

  // Dynamic Button with Icon ↓↓↓
  // function HeartIcon() {
  //   return <span>❤️</span>;
  // }

  // Dynamic List ↓↓↓
  // const users = [
  //   { id: 'u1', name: 'Max' },
  //   { id: 'u2', name: 'Manuel' },
  // ];

  // const hobbies = ['Sports', 'Reading', 'Cooking'];

  // Button for Form Submitting using ref coming from child component "Form"
  // function handleSave(data: unknown) {
    // Al usar "as" le decimos a TypeScript cómo deberia ser el type de un dato del cual no tenemos el type en el momento
  //   const extractedData = data as {
  //     name:string;
  //     age:string;
  //   };

  //   console.log(extractedData);
  //   customForm.current?.clear();
  // }

  return (  
    // <main>
      
      // Polymorphic Components Examples ↓↓↓↓↓↓↓↓↓↓↓↓ 
      //  Dynamic List ↓↓↓ 
      //  <section>
      //   <h2>Users</h2>
      //   <List
      //     items={users}
      //     renderItem={(user) => <li key={user.id}>{user.name}</li>}
      //   />
      // </section>
      // <section>
      //   <h2>Hobbies</h2>
      //   <List
      //     items={hobbies}
      //     renderItem={(hobby) => <li key={hobby}>{hobby}</li>}
      //   />
      // </section> 


      // Dynamic Button with Icon ↓↓↓
      //  <IconButton icon={HeartIcon} onClick={() => console.log('Button clicked!')}>
      // Like
      // </IconButton> 


      // Dynamic Card with slots ↓↓↓
      //  <Card
      //   title="My Card"
      //   actions={
      //     <button onClick={() => console.log('Button clicked!')}>
      //       Click Me!
      //     </button>
      //   }
      // >
      //   <p>Some content</p>
      // </Card> 
      //  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ 


      //  <Container as={Button}>Click me!</Container> 
      // <p>
      //   <Button>A button</Button>
      // </p>
      // <p>
      //   <Button href="https://www.google.com">A Link</Button>
      // </p>

      // Video 57: Ejemplo pasando ref's de un componente a otro 
      // <Input id="test" label="Test" ref={inputRef}/>

      // Video 58: Ejemplo Form 
      // <Form onSave={handleSave} ref={customForm}>
      //   <Input type="text" label="Name" id="name"/>
      //   <Input type="number" label="Age" id="age"/>
      //   <Button>Save</Button>
      // </Form>

      

    // </main>
    
    // Sección 5, Video 64
      // Adding the timer
      <TimersContextProvider>
        <Header />
        <main>
          <AddTimer />
          <Timers />
        </main>
      </TimersContextProvider>
  )
}

export default App;
