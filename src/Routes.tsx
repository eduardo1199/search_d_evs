import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Profile } from './pages/Profile'
import { UserProfileContextProvider } from './context/UserProfile'

export function RoutesApp() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/perfil/:username"
          element={
            <UserProfileContextProvider>
              <Profile />
            </UserProfileContextProvider>
          }
        />
      </Route>
    </Routes>
  )
}
