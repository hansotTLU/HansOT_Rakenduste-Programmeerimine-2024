import React, { useState } from "react"
import "./App.css"
import Name from "./components/Name"
import Counter from "./components/Counter"
import PropDrilling from "./components/PropDrilling"
import Show from "./components/Show"
import Context from "./components/Context"
import Me from "./components/Me"
import DisplayData from "./components/practice/DisplayData"

function App() {
  const [show, setShow] = useState(true)

  const toggleShow = () => setShow(prevShow => !prevShow)

  return (
    <>
      <Context />
      <Show
        show={show}
        toggleShow={toggleShow}
      />
      <PropDrilling />
      <Counter />
      <Name title="visitors!" />
      <Me name="Hans Oskar Trolla"/>
      <DisplayData />
    </>
  )
}

export default App