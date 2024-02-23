
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Landing from './pages/LandingModule/Landing.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>,
  },
]);


function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
