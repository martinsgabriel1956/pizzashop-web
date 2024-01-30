import '@/global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { router } from './routes'
import { Toaster } from './view/components/ui/sonner'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <Toaster />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
