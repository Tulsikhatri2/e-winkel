import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userDisplay } from './Redux/Users/userSlice'

const PracticeData = () => {

  const dispatch = useDispatch()
  const {userToken} = useSelector(state=>state.user)
  console.log(userToken,"from practice")
  return (
    <div>
      <button onClick={()=>{
        dispatch(userDisplay(userToken))
      }}>User Data</button>
      {/* <table>
        <thead>
          <th>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
          </th>
        </thead>
        <tbody>
          {

          }
        </tbody>
      </table> */}

    </div>
  )
}

export default PracticeData