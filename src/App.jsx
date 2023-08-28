import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import BuyCryptoMain from './components/BuyCrypto/BuyCryptoMain'
import ImportantNotes from './components/BuyCrypto/ImportantNotes'
import BuyPaymentDetails from './components/BuyCrypto/BuyPaymentDetails'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/buycrypto' element={<BuyCryptoMain />}/>
        <Route path='/buycrypto/importantNotes' element={<ImportantNotes />}/>
        <Route path='/buycrypto/buyPaymentDetails' element={<BuyPaymentDetails />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
