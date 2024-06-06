import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/landing-page";
import AuthPage from "./pages/auth-page"
import UseRefPage from "./pages/use-ref-page"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LandingPage />} path="/auth-page/landing-page/:id" />
        <Route element={<AuthPage />} path="/auth-page" />
        <Route element={<UseRefPage />} path="/use-ref" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;