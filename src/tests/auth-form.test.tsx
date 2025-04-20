import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom" // Import jest-dom matchers
import AuthForm from "@/components/auth-form"
import { useRouter } from "next/router"
import { useToast } from "@/hooks/use-toast"
import { useAppDispatch } from '@/lib/redux/hooks'
import { login } from '@/lib/redux/slices/authSlice'

// Mocks the hooks
jest.mock("next/router")
jest.mock("@/hooks/use-toast")
jest.mock('@/lib/redux/hooks')
jest.mock('@/lib/redux/slices/authSlice')

describe("AuthForm", () => {
  const mockDispatch = jest.fn()
  const mockPush = jest.fn()
  const mockToast = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()

    // Mocks the redux dispatch
    ;(useAppDispatch as jest.Mock).mockReturnValue(mockDispatch)

    // Mocks the router
    ;(useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    })

    // Mocks the toast
    ;(useToast as jest.Mock).mockReturnValue({
      toast: mockToast,
    })

    ;(login as unknown as jest.Mock).mockReturnValue({ type: 'auth/login', payload: 'testuser' })
    ;(login as unknown as jest.Mock).mockReturnValue({ type: 'auth/login', payload: 'testuser' })
  })

  it("renders the form correctly", () => {
    render(<AuthForm />)

    // Checks if the form elements are rendered
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument()
  })

  it("handles form submission with valid credentials", async () => {
    render(<AuthForm />)

    // Fills in the form
    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: "testuser" },
    })

    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "password123" },
    })

    // Submits the form
    fireEvent.click(screen.getByRole("button", { name: /login/i }))

    // Checks if the button shows loading state
    expect(screen.getByRole("button")).toHaveTextContent(/logging in/i)

    // Wait for the login process to complete
    await waitFor(() => {
      // Checks if login action was dispatched
      expect(mockDispatch).toHaveBeenCalledWith({ type: 'auth/login', payload: 'testuser' })

      // Checks if toast was called with success message
      expect(mockToast).toHaveBeenCalledWith(
        expect.objectContaining({
          title: "Login successful",
        }),
      )

      // Checks if router.push was called to redirect
      expect(mockPush).toHaveBeenCalledWith("/")
    })
  })

  it("shows error for empty credentials", async () => {
    render(<AuthForm />)

    // Submit the form without filling in credentials
    fireEvent.click(screen.getByRole("button", { name: /login/i }))

    // Wait for validation
    await waitFor(() => {
      // Check if toast was called with error message
      expect(mockToast).toHaveBeenCalledWith(
        expect.objectContaining({
          title: "Login failed",
          variant: "destructive",
        }),
      )

      // Check that login was not called
      expect(mockDispatch).not.toHaveBeenCalled()

      // Check that router.push was not called
      expect(mockPush).not.toHaveBeenCalled()
    })
  })
})