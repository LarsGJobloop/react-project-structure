import { Banner } from './componets/Banner/Banner'
import { Footer } from './componets/Footer/Footer'
import { Navbar } from './componets/Navbar/Navbar'

import './styles/normalize.css'
import './styles/palettes.css'
import './index.css'
import './App.css'

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
