import React from "react"
import boxes from "./data/boxes"
import Box from "./components/box/Box"
import './App.css'

export default function App() {
  const [squares, setSquares] = React.useState(boxes)
  
  function toggle(id) {
      setSquares(prevSquares => prevSquares.map(element => (element.id === id) ? ({...element, on:!element.on}) : element))   
  }
  
  const squareElements = squares.map(square => (
      <Box 
          key={square.id} 
          on={square.on} 
          toggle={() => toggle(square.id)}
      />
  ))

    return (
        <div className="App">
            {squareElements}
        </div>
    )
}