import { Route, Routes } from "react-router";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

function AuthRoutes() {

    return (
        <>
            <Routes>
                <Route path='/auth/login' element={<Login />} />
                <Route path='/auth/signup' element={<SignUp />} />
                <Route path='*' element={<>404</>}/>

            </Routes>
        </>
    )
}

export default AuthRoutes;