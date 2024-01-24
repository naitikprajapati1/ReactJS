/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useRef, useState } from "react"

export default function App() {
  console.log('React App');

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*()_+{}:;<={}<>?:|,>?@";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);


  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  // useref is a refrence hook
  // get the refrence
  const passwordRef = useRef("");
  const copyPasswordToClipBoard = useCallback((e) => {
    console.log(passwordRef);
    passwordRef.current.select();
    // passwordRef.current.style.backgroundColor = "red";
    window.navigator.clipboard.writeText(password)
    // console.log(password);
  }, [password]);
  return (
    <div className="bg-slate-800 p-5 rounded-lg">
      <h1 className="text-2xl my-3 mx-auto text-center">Password Generator</h1>
      <div className="input-grp overflow-hidden  bg-white pl-2 p-0  m-0 flex justify-between rounded-md">
        <input type="text"
          value={password}
          readOnly
          ref={passwordRef}

          className="bg-white text-green-600 text-2xl outline-none " />
        <button className="bg-blue-900 overflow-hidden p-3 transition-colors active:bg-blue-950"
          onClick={copyPasswordToClipBoard}


        >Copy</button>
      </div>
      <div className="grp-2 text-green-600 mt-8 gap-5 flex ">
        <div className="flex items-center gap-2">
          <input type="range" onChange={(e) => setLength(e.target.value)} value={length} defaultValue={11} min={6} max={20} name="length" id="length" />
          <label htmlFor="length">Length ({length})</label>
        </div>
        <div className="space-x-1 flex items-center">
          <input type="checkbox" onChange={() => {
            setNumberAllowed((prev) => !prev)
          }}
            defaultChecked={numberAllowed}
            className="w-5" name="Numbers" id="Numbers" />
          <label htmlFor="Numbers" >Numbers</label>
        </div>
        <div className="space-x-1 flex items-center justify-center">
          <input type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
            className="w-5" name="Numbers" id="Characters" />
          <label htmlFor="Characters" >Characters</label>
        </div>
      </div>
    </div >
  )
}