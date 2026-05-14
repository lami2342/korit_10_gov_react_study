import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { Global } from '@emotion/react'
import { global } from './styles/global.js'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient(); 
// 서버 전역 상태 관리:응답 받은 데이터를 전역 상태로 관리하는것

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>

    <BrowserRouter>
      <Global styles={global} />
      <App />
    </BrowserRouter>
  </QueryClientProvider>
)