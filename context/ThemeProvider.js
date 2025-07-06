"use client"
import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("rag-on")
  const [isRagOn, setIsRagOn] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme") || "rag-on"
    setTheme(savedTheme)
    setIsRagOn(savedTheme === "rag-on")
  }, [])

  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute("data-theme", theme)
      localStorage.setItem("theme", theme)
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === "rag-on" ? "rag-off" : "rag-on"
      setIsRagOn(newTheme === "rag-on")
      return newTheme
    })
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isRagOn }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}