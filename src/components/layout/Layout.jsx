import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen transition-colors duration-300 relative">
      <div className="relative z-10">
        <Navbar />
        <main className="w-full">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout

