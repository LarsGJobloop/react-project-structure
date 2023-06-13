import './App.css'
import { Banner } from './componets/Banner/Banner'
import { Footer } from './componets/Footer/Footer'
import { Navbar } from './componets/Navbar/Navbar'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Banner />

      <main>
        <h1>Main section</h1>
      </main>

      <Footer />
    </div>
  )
}

export default App
