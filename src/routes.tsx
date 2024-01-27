import { createBrowserRouter } from 'react-router-dom'

import { Dashboard, SignIn } from './pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
])
