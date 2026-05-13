import { Routes, Route } from 'react-router';
import Layout from '../components/Layout/Layout';
import AuthRoutes from './AuthRoutes'

function RootRoutes() {

    return (
        <Routes>
            <Route path='/' element={<></>}>   
            </Route>
            <Route path='*' element={<AuthRoutes />} />
            <Route path='*' element={<>페이지를 찾을 수 업습니다</>} />
        </Routes>
    )
}

export default RootRoutes;