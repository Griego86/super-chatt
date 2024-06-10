import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage';

export function Router() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout/>}>
        <Route path="/" element={<HomePage />}/>
        <Route path="/superchatt/users/login" element={<LoginPage />} />
        <Route path="/superchatt/users/signup" element={<SignUpPage />} />
      </Route>
    )
  )
  return router;
}