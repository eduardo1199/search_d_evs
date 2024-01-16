import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { Profile } from './pages/Profile'
import { UserProfileContextProvider } from './context/UserProfile'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/profile/:username',
    element: (
      <UserProfileContextProvider>
        <Profile />
      </UserProfileContextProvider>
    ),
  },
])
