import { createBrowserRouter } from 'react-router-dom'

import { AppLayout, AuthLayout } from '@/view/layouts'
import { Dashboard, NotFound, Orders, SignIn, SignUp } from '@/view/pages'

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/orders', element: <Orders /> },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
    ],
  },
])
