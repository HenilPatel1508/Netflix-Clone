import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Footer from "./components/footer";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authUser";
import { useEffect } from "react";
function App() {
  const { user, isCheckingAuth, authCheck } = useAuthStore();
  useEffect(() => {
		authCheck();
	}, [authCheck]);
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={!user ? <LoginPage/> : <Navigate to={"/"}/>}/>
        <Route path='/signup' element={!user ? <SignUpPage /> : <Navigate to={"/"}/>} />
      </Routes>
      <Footer/>
      <Toaster/>
    </>
  )
}

export default App;
