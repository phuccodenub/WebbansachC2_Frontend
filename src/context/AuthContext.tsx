import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import api from '../lib/api'

interface User {
  id: string
  name: string
  email: string
  phone?: string
  role: 'customer' | 'admin'
  avatar?: string
}

interface AuthContextType {
  user: User | null
  token: string | null
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
  isAuthenticated: boolean
  isAdmin: boolean
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem('user')
    return stored ? JSON.parse(stored) : null
  })
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('token'))

  useEffect(() => {
    if (token && !user) {
      api.get('/auth/me').then(res => {
        setUser(res.data.data)
        localStorage.setItem('user', JSON.stringify(res.data.data))
      }).catch(() => {
        setToken(null)
        localStorage.removeItem('token')
        localStorage.removeItem('user')
      })
    }
  }, [token, user])

  const login = async (email: string, password: string) => {
    const res = await api.post('/auth/login', { email, password })
    const { token: newToken, user: newUser } = res.data.data
    setToken(newToken)
    setUser(newUser)
    localStorage.setItem('token', newToken)
    localStorage.setItem('user', JSON.stringify(newUser))
  }

  const register = async (name: string, email: string, password: string) => {
    const res = await api.post('/auth/register', { name, email, password })
    const { token: newToken, user: newUser } = res.data.data
    setToken(newToken)
    setUser(newUser)
    localStorage.setItem('token', newToken)
    localStorage.setItem('user', JSON.stringify(newUser))
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{
      user, token, login, register, logout,
      isAuthenticated: !!token,
      isAdmin: user?.role === 'admin',
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}
