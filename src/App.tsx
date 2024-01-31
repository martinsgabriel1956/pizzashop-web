import '@/global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from './app/providers/theme-provider'
import { router } from './routes'
import { Toaster } from './view/components/ui/sonner'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizza.shop-theme" defaultTheme="dark">
        <Helmet titleTemplate="%s | pizza.shop" />
        <Toaster />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}
