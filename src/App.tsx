
import './App.css'
import Greeting from './components/Greeting'

function App() {

  const name = "Rana";
  const age = 33


  return (
    <>
    <div className=' text-7xl'>hi ts</div>
    <Greeting name={name} age={age}></Greeting>
    </>
  )
}

export default App
