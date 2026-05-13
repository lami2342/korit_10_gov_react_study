import { Routes, Route, } from 'react-router';
import  RootRoutes from './routes/RootRoutes';
import Layout from './components/Layout/Layout';
function App() {

  return (
    <Layout>
      < RootRoutes />
    </Layout>
  )
}

export default App;