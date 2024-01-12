import { useEffect, useState } from 'react'
import './App.css'

function App() {
  console.log('Re-Render App');
  let [counter, setCount] = useState(0)
  let [state, setState] = useState(true)

  // run only once when component mounted.
  // empty Dep Array means=> Whole Component
  // If dep has some values then they values update then it's rendered
  useEffect(() => {
    console.log('Counter mounted successfully');
    // run where component is unmounted
    return function () {
      console.log('Unmounted Component');
    }
  }, [])
  useEffect(() => {
    console.log('Counter Updated successfully', counter);
    return function () {
      console.log('Unmounted ', counter);
    }
  }, [counter])
  function increment() {
    counter = counter + 1;
    setCount(counter);
  }
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      <button onClick={() => setState(!state)}>Toggle</button>
      <br />
      {
        state ? <>

          <button onClick={increment}>+</button>
          <h1>{counter}</h1>
          <button onClick={() => setCount(counter--)}>-</button>
        </>
          : ""
      }
    </>
  )
}

export default App
