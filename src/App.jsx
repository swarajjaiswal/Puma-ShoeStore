import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Store from './components/Store';
import Login from './components/Login';
import Footer from './components/Footer';
import Cart from './components/Cart';

import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter basename="/Puma">
        <Routes>
          <Route path="/" element={<>
            <Navbar />
            <Hero />
            <Footer />
          </>} />
          <Route path='/about' element={<>
            <Navbar />
            <About />
          </>} />
          <Route path='/store' element={<>
            <Navbar />
            <Store />
            <Footer />
          </>} />
          <Route path='/cart' element={<>
            <Navbar />
            <Cart />

          </>} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
