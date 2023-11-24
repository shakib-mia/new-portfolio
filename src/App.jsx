import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Layout from './components/Layout/Layout';
import Error from './pages/Error/Error';

function App() {
  const routes = [{
    path: '/',
    element: <Layout>
      <Home />
    </Layout>
  }, {
    path: "/about",
    element: <Layout>
      <About />
    </Layout>
  }, {
    path: "*",
    element: <Layout>
      <Error />
    </Layout>
  }]
  const router = createBrowserRouter(routes);

  document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('#mouse');

    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
  });

  return (
    <>
      <div id="mouse" className='bg-error-light rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50 transition'></div>
      <RouterProvider router={router} />
    </>
  )
}

export default App
