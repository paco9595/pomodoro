import { useState } from 'react';
import { ToDoList, Timer } from './components';
import Settings from './components/settings';
import { Context } from './context';
import { defaultValues } from './defaultValues';
import './internationalization'; 

function App() {
  const [settings, setSettings] = useState(defaultValues);
  
  return (
    <>
      <Context.Provider
        value={{ settings, setSettings }}
      >
        <Settings />
        <main className="max-w-4xl m-auto">
          <Timer />
          <ToDoList />
        </main>
      </Context.Provider>

    </>
  )
}


export default App