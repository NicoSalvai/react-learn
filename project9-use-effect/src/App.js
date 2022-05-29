import './App.css';
import React from 'react'

export default function App() {
  const [starWarsData, setStarWarsData] = React.useState({})
  const [count, setCount] = React.useState(0)
  
  // side effects
  React.useEffect(() => console.log("Effect ran"), [count])

  React.useEffect(() => {
      console.log("Star wars ran")
      fetch("https://swapi.dev/api/people/1")
           .then(res => res.json())
           .then(data => setStarWarsData(data))
  }, [count])


  return (
    <div className="App">
        
        <pre>{JSON.stringify(starWarsData, null, 2)}</pre>

        <h2>The count is {count}</h2>

        <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>

    </div>
  );
}
