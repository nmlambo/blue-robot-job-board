"use client"

import { Moon, Sun } from 'lucide-react'
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // We're only rendering the toggle on the client to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = theme === "dark"

  return (
    <div className="flex items-center gap-2">
      <Sun className={`h-[1.2rem] w-[1.2rem] ${isDark ? "text-muted-foreground" : "text-amber-500"}`} />
      <motion.button
        className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50"
        onClick={() => setTheme(isDark ? "light" : "dark")}
        aria-label="Toggle theme"
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.1 }}
      >
        <motion.span
          className="inline-block h-4 w-4 rounded-full bg-white shadow-md"
          initial={false}
          animate={{
            x: isDark ? 24 : 4,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        />
      </motion.button>
      <Moon className={`h-[1.2rem] w-[1.2rem] ${isDark ? "text-slate-200" : "text-muted-foreground"}`} />
    </div>
  )
}