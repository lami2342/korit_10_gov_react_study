import { Global } from '@emotion/react'
import { useState } from 'react'
import { reset } from '../../cgcg/src/styles/reset'
import MainLayout from '../../cgcg/src/components/MainLayout/MainLayout'
import MainRoutes from '../../cgcg/src/routes/MainRoutes'

function App() {

  return (
    <>
      <Global styles={reset} />
      <MainLayout>
        <MainRoutes />
      </MainLayout>
    </>
  )
}

export default App
