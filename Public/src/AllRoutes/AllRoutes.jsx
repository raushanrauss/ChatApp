
import { Route, Routes } from 'react-router-dom'
import Register from '../pages/Register'
import Login from '../pages/Login'
import App from '../App'

const AllRoutes = () => {
  return (
    <div>
          <Routes>
             
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
        
              

          </Routes>
    </div>
  )
}

export default AllRoutes
