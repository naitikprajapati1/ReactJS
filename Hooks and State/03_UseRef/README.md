# Use Ref

✅ it create a mutable variable which will not re-render the components

✅ used to access the Dom Element directly

### Use case: focusing on an input
You would need to access DOM elements, for example, to focus on the input field when the component mounts.

To make it work you'll need to create a reference to the input, assign the reference to ref attribute of the tag, and after mounting call the special method element.focus() on the element.

Here's a possible implementation of the <InputFocus> component:
 ```
 import { useRef, useEffect } from 'react';

function InputFocus() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <input 
      ref={inputRef} 
      type="text" 
    />
  );
}
 ```

 const inputRef = useRef() creates a reference to hold the input element.

inputRef is then assigned to ref attribute of the input field: ```<input ref={inputRef} type="text" />.```

React then, after mounting, sets inputRef.current to be the input element. Inside the callback of useEffect() you can set the focus to the input programmatically: inputRef.current.focus().

Tip: if you want to learn more about useEffect(), I highly recommend checking my post A Simple Explanation of React.useEffect().

Ref is null on initial rendering


