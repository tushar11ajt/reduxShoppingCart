import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EditUserData from './components/EditUserData'
import LoginForm from './components/LoginForm'
import UserData from './components/UserData'
import LandingPage from './LandingPage'

const App = () => {
    return (
        <>
            <Routes>
                <Route exact path='/' element={<LandingPage />} />
                <Route exact path='/loginform' element={<LoginForm />} />
                <Route exact path='/allUserDetails' element={<UserData />} />
                <Route exact path='/edituserdetails' element={<EditUserData />} />
            </Routes>

        </>
    )
}

export default App
