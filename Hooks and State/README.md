# What is hooks ?

**simple Defination:-**
🚀 React hook are nothing it's just a function that we are aspect to they perform some tasks 📝
 
![Test Image 4](https://imgs.search.brave.com/qm24SatSbNBGi1IT-kV3SgmU7QiqHyt9Hrzl5MZdVYI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZWNvZGVjYW1w/Lm9yZy9uZXdzL2Nv/bnRlbnQvaW1hZ2Vz/L3NpemUvdzIwMDAv/MjAyMC8wNi9iZWdp/bm5lcnMtZ3VpZGUt/dG8taG9va3MucG5n)


🚀 **Hooks** in React are *functions* that allow you to perform additional tasks in 📝 functional components. There are two types of hooks:    

 1)built-in hooks provided by React

 2)custom hooks created by developers.

🚀 One example of a built-in hook is the useState hook, which is used to manage state in a functional component. When the state variable changes, the component will re-render.

🚀 React hooks are work like a functions there are a Many inbuilt hooks to manage the state


**There are two types of hooks**

### 1.**🪝Basic Built-in Hooks :**

1. Returns a stateful value and a function to update it — ***useState***
2. Lets you perform side effects in function components — ***useEffect***
3. Accepts a context object (the value returned from `React.createContext`) and returns the current context value, as given by the nearest context provider for the given context — ***useContext***


### 1.  **Custom Hooks :**

### **✅  Rules of Hooks ✅**

Hooks are JavaScript functions, but they impose two additional rules:

1. Don’t call Hooks inside loops, conditions, or nested functions — *Only call Hooks*  ***at the top level**.*

2. Don’t call Hooks from regular JavaScript functions — Only call Hooks **from React function components**.