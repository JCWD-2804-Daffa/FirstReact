import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "../context/ThemeContext";
import Home from "../pages/home";
import Setting from "../pages/setting";
import Auth from "../auth";
import { Provider } from "react-redux";
import { store } from "../store/store"
import Counter from "../pages/counter";
import Users from "../pages/users";
import Register from "../components/RegisterForm";

const PageRouters = () => {
  return (
    <Provider store={store}>
    <ThemeProvider>
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Auth />} path="/auth" />
                <Route element={<Setting />} path="/setting" />
                <Route element={<Counter />} path="/counter" />
                <Route element={<Users />} path="/users" />
                <Route element={<Register />} path="/register" />

            </Routes>
        </BrowserRouter>
    </ThemeProvider>
    </Provider>


  )
}

export default PageRouters;