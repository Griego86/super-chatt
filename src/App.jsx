import './App.css'
import {Router} from './router';
import { RouterProvider } from 'react-router-dom';


const App = () => {
  const router = Router();

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
