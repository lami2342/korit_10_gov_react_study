import { Route, Routes } from 'react-router'
import SignUp from '../pages/SignUp/SignUp'
import AuthLayout from '../components/AuthLayout/AuthLayout';
import SignIn from '../pages/SignIn/SignIn'

function AuthRoutes() {

    return (
        <AuthLayout>
            <Routes>
                <Route path='/signup' element={<SignUp />} />
                <Route path='/signin' element={<SignIn/>} />
            </Routes>
        </AuthLayout>
    )
}

export default AuthRoutes;