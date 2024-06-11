import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Store from './components/Store';


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login';
import Footer from './components/Footer';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Hero />
          <Footer />
        </>
      )
    },
    {
      path: "/about",
      element: <> <Navbar /> <About /></>

    },
    {
      path: "/store",
      element: <> <Navbar /><Store /><Footer /></>

    },
    {
      path: "/login",
      element: <Login />,
    },


  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
