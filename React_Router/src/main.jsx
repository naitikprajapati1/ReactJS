import ReactDOM from 'react-dom/client'
import Layout from './layout.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Home from './components/home/Home.jsx';
import Users from './Users.jsx';
import Github, { githubInfoLoader } from './components/Github.jsx';
import { Error } from './Error.jsx';

// * method-1
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: '/about',
//         element: <About />,
//       },
//       {
//         path: '/contact',
//         element: <Contact />,
//       },
//     ]
//   },

// ])
// * method-2
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route loader={githubInfoLoader} path='/github' element={<Github />} />
      <Route path='/users/:id' element={<Users />} />
      <Route path='/*' element={<Error />}></Route>
    </Route>
  ))
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>,
)
