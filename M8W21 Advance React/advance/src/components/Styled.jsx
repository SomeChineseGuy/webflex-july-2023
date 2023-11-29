import React, { useEffect, useState } from "react";

const Styled = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })

  const mouseHandle = (event) => {
    
    setPosition({
      x: event.x,
      y: event.y
    })
  }


  useEffect(() => {
    document.addEventListener('mousemove', mouseHandle)
  }, [])

  document.removeEventListener('mousemove', mouseHandle)


  const style = {
    fontSize: `${position.y / 5}px`,
    textAlign: 'center',
    color: `rgb(0, ${position.x / 4}, ${position.y / 4})`,
    backgroundColor: `rgb(${position.x / 4}, ${position.y / 4}, 0)`,
    padding: '10px',
    border: `10px dotted rgb(${position.x / 4},0, ${position.y / 4}`
  }

  const message = position.y < 550 ? 'And Dr. Dre said...' : "Nothing you idiots! Dr. Dre is dead, he's locked in my basement! ";

  return (
    <div>
      <h1 style={style}>{message}</h1>

    </div>
  )
};

export default Styled;
