import { useState } from 'react'
import './App.css'
import Header from './components/Header'

function App() {

  const [mealData, setMealData] = useState(null)

  function getDataFromSearch(data) {
    setMealData(data)
  }

  console.log(mealData)


  return (
    <>
      <Header sendData={getDataFromSearch} />
    </>
  )
}

export default App