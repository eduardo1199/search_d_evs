import { BrowserRouter } from 'react-router-dom'
import { Toaster } from './components/ui/toaster'
import { RoutesApp } from './Routes'

export function App() {
  return (
    <BrowserRouter>
      <RoutesApp />
      <Toaster />
    </BrowserRouter>
  )
}
