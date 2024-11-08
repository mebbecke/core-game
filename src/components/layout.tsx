import Footer from "./footer"
import Header from "./header"

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col h-screen w-full">
      <Header />
      <main className="flex flex-col items-center justify-center h-full flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
