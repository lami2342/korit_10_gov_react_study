import { Route, Routes } from 'react-router'
import SignUp from '../pages/SignUp/SignUp'
import AuthLayout from '../components/AuthLayout/AuthLayout';

function AuthRoutes() {

    return (
        <AuthLayout>
            <Routes>
                <Route path='signup' element={<SignUp />} />
                <Route path='login' element={<>로그인</>} />
            </Routes>
        </AuthLayout>
    )
}

export default AuthRoutes;