import { RouterProvider } from 'react-router-dom'
import { appRouter } from './routes/Routes'
import { DarkModeProvider } from './context/DarkModeContext'

const App = () => {
  return (
    <DarkModeProvider>
      <RouterProvider router={appRouter} />
    </DarkModeProvider>
  )
}
export default App
