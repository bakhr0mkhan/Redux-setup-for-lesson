import React from 'react'
import { useSelector, useDispatch, } from 'react-redux';


function Child() {
  const dispatch = useDispatch()
  const { users, number} = useSelector((state) => ({
    users: state.users.all,
    number: state.counter.count
  }) )

  const addUser = () => {
    dispatch({ type: 'ADD_USER', payload: { name: 'John', id: 30 } })
  }
  return (
    <div className='child'>
      <div>{number}</div>
      {JSON.stringify(users, null, 2)}
      <button onClick={addUser}>Add user</button>
      <button onClick={() => dispatch({ type: "DELETE_USERS"})}>RESET USERS</button>
    </div>
  )
}

export default Child