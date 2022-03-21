import { Routes, Route, BrowserRouter } from "react-router-dom";

import { DashboardRutes } from "./DashboardRutes";

import {Navbar} from '../components/ui/Navbar';

export const AppRouter = () => {
  return (
    <BrowserRouter>
        
        <Routes>
        <Route path="login" element={<LoginScreen/>} />
        <Route path="/*" element={<DashboardRutes/>} />
        </Routes>    
    </BrowserRouter>
  )
}