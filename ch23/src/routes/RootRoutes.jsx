import { Routes, Route, useLocation, useNavigate, replace } from 'react-router';
import Layout from '../components/Layout/Layout';
import AuthRoutes from './AuthRoutes'
import { useAuthentication } from '../hooks/queries/useAuthentication';
import { useQueryClient } from '@tanstack/react-query';

function RootRoutes() {

    const { pathname } = useLocation

    const navigate = useNavigate
    const authenticationQuery = useAuthentication(localStorage.getItem("accessToken"))

    if (!authenticationQuery.isLoading) {
        const status = authenticationQuery.status;
        if (status !== 200 && !pathname.startWith("/auth")) {
            navigate("/auth/signin", {
                replace: true,
            })
        }
        if(status === 200 && pathname.startWith("/auth")){
            navigate("/",{
                replace:true,
            })
        }
    }

    const queryClient = useQueryClient();

    console.log(queryClient.getQueryCache());
    console.log(authenticationQuery.isLoading)
    console.log(authenticationQuery.data)
    return (
        <Routes>
            <Route path='/' element={<></>} />
            <Route path='/auth/*' element={<AuthRoutes />} />
            <Route path='*' element={<>페이지를 찾을 수 업습니다</>} />
        </Routes>
    )
}

export default RootRoutes;