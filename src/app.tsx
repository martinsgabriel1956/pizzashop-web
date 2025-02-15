import '@/global.css'

import { QueryClientProvider } from '@tanstack/react-query'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { queryClient } from './app/lib/react-query'
import { ThemeProvider } from './app/providers/theme-provider'
import { router } from './routes'
import { Toaster } from './view/components/ui/sonner'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizza.shop-theme" defaultTheme="dark">
        <Helmet titleTemplate="%s | pizza.shop" />
        <Toaster richColors />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}
