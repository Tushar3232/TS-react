
import { useState } from 'react';
import './App.css'
import Greeting from './components/Greeting'
import UseState from './components/UseState';
import Forms from './components/Forms';
import LoginForm from './components/LoginForm';
import ToggleButton from './components/ToggleButton';
import useToggle from './hooks/useToggle';
import Modal from './components/Modal';

function App() {

  const name = "Rana";
  const age = 33

  const [count, setCount] = useState<number>(0) // use Generic tipe
// togole hooks
  const [value, toggle] = useToggle()
  console.log(value)

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

        {/* hooks / custom hooks */}
        <div className=' content-center text-center border'>
          <h3>Custome Hooks</h3>
          <div className=' border bg-amber-200 m-3.5'>
            <button className=' btn' onClick={toggle}>Open Modal</button>
          </div>

          <Modal
            isOpen={value}
            onClose={toggle}
            title="Simple Modal"
          >
            <div >
              <p>This is Modal content</p>
              <div>
                <button className=' btn' onClick={toggle}>Cancle</button>
                <button onClick={toggle} className='btn bg-blue-500 text-white'>Ok</button>
              </div>

            </div>
          </Modal>
        </div>
      </div>
    </>
  )
}

export default App
