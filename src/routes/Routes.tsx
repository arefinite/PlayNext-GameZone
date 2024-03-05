import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../layouts/RootLayout'
import { Home, NotFound } from '../pages'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
])
