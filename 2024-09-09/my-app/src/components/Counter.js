import React, { useState } from "react"

const Counter = () => {
  const [counter, setCounter] = useState(0)
  // const [counter, setCounter] = React.useState(0);

  const modifyCounter = element =>
    setCounter(prevCounter => prevCounter + element)

  const elementMark = element => {
    if (element > 0) {
      element = "+" + element
    }
    return element
  }

  return (
    <>
      <h1>{counter}</h1>
      
      <div>
        {[+1, +5, +50, -1, -5, -50].map(element => (
          <button onClick={() => modifyCounter(element)}>
            sync {elementMark(element)}
          </button>
        ))}
      </div>

      <div>
        {[+1, +5, +50, -1, -5, -50].map(element => (
          <button onClick={() => setTimeout(() => modifyCounter(element), 2000)}>
            async  {elementMark(element)}
          </button>
        ))}
      </div>
    </>
  )
}

export default Counter
