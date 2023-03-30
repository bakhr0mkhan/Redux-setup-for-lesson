import React from 'react'
import Parent from './Parent'
import { useSelector } from 'react-redux'

function App() {

  const number = useSelector(state => state.counter.count)
  console.log(number);

  return (
    <div className='app'>
      <Parent />
    </div>
  )
}

export default App