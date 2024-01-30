import { createBrowserRouter } from 'react-router-dom'

import { AppLayout, AuthLayout } from '@/view/layouts'
import { Dashboard, SignIn, SignUp } from '@/view/pages'

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [{ path: '/', element: <Dashboard /> }],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
    ],
  },
])
