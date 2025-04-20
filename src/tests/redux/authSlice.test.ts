import authReducer, { login, logout, checkAuth } from '@/lib/redux/slices/authSlice'

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {}
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString()
    },
    removeItem: (key: string) => {
      delete store[key]
    },
    clear: () => {
      store = {}
    },
  }
})()

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
})

describe('auth reducer', () => {
  const initialState = {
    isAuthenticated: false,
    user: null,
  }

  beforeEach(() => {
    localStorage.clear()
  })

  it('should handle initial state', () => {
    expect(authReducer(undefined, { type: 'unknown' })).toEqual(initialState)
  })

  it('should handle login', () => {
    const username = 'testuser'
    const actual = authReducer(initialState, login(username))
    expect(actual.isAuthenticated).toEqual(true)
    expect(actual.user).toEqual(username)
    expect(localStorage.getItem('user')).toEqual(username)
  })

  it('should handle logout', () => {
    const loggedInState = {
      isAuthenticated: true,
      user: 'testuser',
    }
    localStorage.setItem('user', 'testuser')
    
    const actual = authReducer(loggedInState, logout())
    expect(actual.isAuthenticated).toEqual(false)
    expect(actual.user).toEqual(null)
    expect(localStorage.getItem('user')).toEqual(null)
  })

  it('should handle checkAuth with existing user', () => {
    localStorage.setItem('user', 'testuser')
    
    const actual = authReducer(initialState, checkAuth())
    expect(actual.isAuthenticated).toEqual(true)
    expect(actual.user).toEqual('testuser')
  })

  it('should handle checkAuth with no user', () => {
    const actual = authReducer(initialState, checkAuth())
    expect(actual.isAuthenticated).toEqual(false)
    expect(actual.user).toEqual(null)
  })
})