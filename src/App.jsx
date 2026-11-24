import { useRef, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import ClearInput from './components/ClearInput.jsx'
import TextBox from './components/TextBox.jsx'
import Counter from './components/Counter.jsx'
import Timer from './components/Timer.jsx'
import TimerRef from './components/TimerRef.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const refValueInput = useRef(null);

  return (
    <>
      <ClearInput></ClearInput>
      <TextBox refValue={refValueInput} />
      <button onClick={() => {alert(refValueInput.current.value); }}> Show Value</button>

      <Counter></Counter> 
      <Timer></Timer>

      <TimerRef></TimerRef> 
    </>
  )
}

export default App
