import React, { useRef, useState } from "react";

const Ref = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    
  }

  console.log('fire');
  return (
    <div>
      <h1>Welcome to the Ref!</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setValue(e.target.value)} />
        <input type="text" ref={inputRef} />
        <button>Submit</button>
      </form>
    </div>
  )
};

export default Ref;
