
import { useState } from 'react';
import './App.css'
import Greeting from './components/Greeting'
import UseState from './components/UseState';
import Forms from './components/Forms';
import LoginForm from './components/LoginForm';
import ToggleButton from './components/ToggleButton';

function App() {

  const name = "Rana";
  const age = 33

  const [count, setCount] = useState<number>(0) // use Generic tipe

  return (
    <>
      <div className=' h-screen dark:bg-black dark:text-white'>
        <ToggleButton></ToggleButton>
        <div className=' text-7xl'>hi ts</div>
      <Greeting name={name} age={age}></Greeting>
      <div>
        count : {count}
      </div>
      <div>

        <button className=' border' onClick={() => setCount(count + 1)}>Click</button>
      </div>

      <UseState></UseState>
      <Forms></Forms>
      <LoginForm></LoginForm>
      </div>
    </>
  )
}

export default App
