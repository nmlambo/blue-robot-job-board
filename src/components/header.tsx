"use client"

import { Button } from "@/components/ui/button"
import { Briefcase } from 'lucide-react'
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { useAppSelector, useAppDispatch } from '@/lib/redux/hooks'
import { logout } from '@/lib/redux/slices/authSlice'
import { useEffect } from "react"
import { checkAuth } from '@/lib/redux/slices/authSlice'

export default function Header() {
  const { isAuthenticated } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(checkAuth())
  }, [dispatch])

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <header className="border-b bg-background shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Briefcase className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold text-primary">SA Job Board</span>
        </Link>
        <nav className="flex items-center gap-4">
          <ThemeToggle />
          {isAuthenticated ? (
            <>
              <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                <Link href="/post">Post a Job</Link>
              </Button>
              <Button variant="outline" onClick={handleLogout} className="text-primary border-primary/30 hover:bg-primary/5">
                Logout
              </Button>
            </>
          ) : (
            <Button asChild className="bg-primary hover:bg-primary/90 text-white">
              <Link href="/login">Login</Link>
            </Button>
          )}
        </nav>
      </div>
    </header>
  )
}