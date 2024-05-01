import { useState } from 'react'
import Header from './components/Header'
import Desc from './components/Desc'
import Footer from './components/Footer'
import Card from './components/Card'
import BackGlow from './components/BackGlow'
import Hero from './components/Hero'
import './App.css'

function App() {

  const [mealData, setMealData] = useState(null)
  const [clickedMeal, setClickedMeal] = useState(null)


  function getDataFromSearch(data) {
    setMealData(data)
  }

  function handleClickOnMeal(id) {
    setClickedMeal(() => {
      return mealData.find(meal => meal.idMeal === id)
    })
  }

  function wrapperClose() {
    setClickedMeal(null)
  }

  return (
    <>
      {/* Glowing background */}
      <BackGlow />

      <Header sendData={getDataFromSearch} />

      <main className='px-8 py-12 sm:px-14 overflow-hidden'>
        <Hero />
        {
          clickedMeal ? <Desc meal={clickedMeal} handleClose={wrapperClose} />
            :
            mealData &&
            <div className='mt-8'>
              <h1 className='text-3xl text-center'>
                Search results
              </h1>

              <div
                className='mt-8 py-6 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-14'>
                {mealData.map(meal => (
                  <Card
                    meal={meal}
                    key={meal.idMeal}
                    handleClick={() => { handleClickOnMeal(meal.idMeal) }}
                  />
                ))}
              </div>
            </div>
        }
      </main>
      
      <Footer />
    </>
  )
}

export default App