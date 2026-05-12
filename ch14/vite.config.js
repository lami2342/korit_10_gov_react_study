import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
  plugins: [react({
    jsxImportSource :'@emotion/react'
})]
=======
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
    })
  ],
>>>>>>> 19b6e89d972e27111eff49164a5644309456b183
})
