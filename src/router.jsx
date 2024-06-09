import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import LoginPage from './pages/LoginPage'

export function Router() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout/>}>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<LoginPage />} />
      </Route>
    )
  )
  return router;
}