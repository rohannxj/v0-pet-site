"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  company: string
  accountType: "retail" | "wholesale"
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<boolean>
  register: (data: RegisterData) => Promise<boolean>
  logout: () => void
  isAuthenticated: boolean
}

interface RegisterData {
  email: string
  password: string
  firstName: string
  lastName: string
  company: string
  accountType: "retail" | "wholesale"
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for existing session
    const storedUser = localStorage.getItem("vital_pet_user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulated login - in production this would call an API
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    // Demo user for testing
    if (email && password) {
      const demoUser: User = {
        id: "1",
        email,
        firstName: "John",
        lastName: "Smith",
        company: "Pet Store Ltd",
        accountType: "wholesale",
      }
      setUser(demoUser)
      localStorage.setItem("vital_pet_user", JSON.stringify(demoUser))
      setIsLoading(false)
      return true
    }
    setIsLoading(false)
    return false
  }

  const register = async (data: RegisterData): Promise<boolean> => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    const newUser: User = {
      id: Date.now().toString(),
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      company: data.company,
      accountType: data.accountType,
    }
    setUser(newUser)
    localStorage.setItem("vital_pet_user", JSON.stringify(newUser))
    setIsLoading(false)
    return true
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("vital_pet_user")
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        register,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
