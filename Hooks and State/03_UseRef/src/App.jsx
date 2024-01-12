// import { useEffect } from "react";
import { useEffect } from "react";
import { useLayoutEffect } from "react";
import { useState } from "react";
import { useRef } from "react"

const App = () => {
  console.log('React App');
  let [number, setNumber] = useState(0);

  // function random() {
  //   number = Math.random() * 100;
  //   setNumber(number);
  // }
  // let [count, setCount] = useState(0);
  // useEffect(() => {
  //   setCount(count++);
  // })
  const num = useRef();
  function changeBorder() {
    num.current.focus();
    num.current.style.background = 'red';
  }
  useLayoutEffect(() => {
    // console.log("🚀 ~ use ~ use:", use)

    // setTimeout(() => {
    // if (num === 0) {

    number = Math.floor(Math.random() * 100);
    setNumber(number);
    // }
    // }, 3000)
  }, [])
  // console.log(num);
  return (
    <div>
      {/* <h1>{num.current}</h1> */}

      {/* <h1>{num.current.style}</h1> */}
      <input ref={num} type="text" />
      <button onClick={changeBorder}>Submit</button>
      <h1>Hello :- {number}</h1>
      {/* <button onClick={random}>Submit</button> */}
    </div>
  )
}

export default App