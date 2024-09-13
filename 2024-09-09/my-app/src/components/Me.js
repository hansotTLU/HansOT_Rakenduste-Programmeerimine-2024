import React, { useState } from "react"
import "../css/Me.css"

const Me = ({ name = "Keegi" }) => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = () => {}

  return (
    <div className="container">
      <h2>{name}</h2>

      <ul>
        {["Autod", "Tehnika", "PC mängud"].map(hobby => (
          <li>{hobby}</li>
        ))}
      </ul>

      <form
        onSubmit={handleSubmit}
        className="form"
      >
        <h3>Kontaktivorm:</h3>
        <div className="input">
          <label>E-mail: </label>
          <input
            type="email"
            id="email"
          />
        </div>

        <div className="input">
          <label>Message: </label>
          <input
            type="text"
            id="message"
          />
        </div>

        <button type="submit">Saada</button>
      </form>
    </div>
  )
}

export default Me
