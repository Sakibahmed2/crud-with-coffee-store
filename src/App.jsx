
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard'
import { useState } from 'react'

function App() {

  const loadedCoffees = useLoaderData([])
  const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <div className="m-20">
      <h2 className='text-4xl font-semibold text-center text-orange-950 '>Hot cold coffee</h2>
      <div className='grid md:grid-cols-2 gap-6 mt-6'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
