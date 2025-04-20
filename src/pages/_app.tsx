import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '@/lib/redux/store'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/header'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="flex min-h-screen flex-col bg-background">
          <Header />
          <main className="flex-1 container mx-auto py-6 px-4">
            <Component {...pageProps} />
          </main>
          <footer className="border-t py-4 bg-background">
            <div className="container mx-auto text-center text-xs text-muted-foreground">
              © {new Date().getFullYear()} SA Job Board. All rights reserved. Serving the South African job market.
            </div>
          </footer>
        </div>
      </ThemeProvider>
    </Provider>
  )
}