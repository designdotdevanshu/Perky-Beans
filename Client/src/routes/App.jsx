import {useState, createContext} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import OrdersPage from "./pages/OrdersPage";
import ContactPage from "./pages/ContactPage";
import ReserveSeatPage from "./pages/ReserveSeatPage";
import Login from "../components/Signin_Register/Login";
import Register from "../components/Signin_Register/Register";
import Preloader from "../components/Common/Preloader";
import PageNotFound from "../components/PageNotFound/PageNotFound";
import ForgotPassword from "../components/Signin_Register/ForgotPassword";
import About_us from "../components/About Us/About_us";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";

const Loading = createContext();
const UserData = createContext();
const Notification = createContext();

const App = () => {
  const [loadingScreen, setloadingScreen] = useState(false);
  const [userData, setUserData] = useState(null);
  const checkUserAlreadyLogin = async () => {
    await axios
      .get("/api/home")
      .then((result) => {
        setUserData(result.data);
      })
      .catch(()=>{});
  };

  useEffect(() => {
    checkUserAlreadyLogin();
  }, []);

  const notification = (notiText) => {
    toast.success(notiText, {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setloadingScreen(false);
  //   },2000)
  // },[])

  return (
    <Loading.Provider value={setloadingScreen}>
      <Notification.Provider value={{notification: notification, checkUserAlreadyLogin}}>
        <UserData.Provider value={{userData, setUserData}}>
          <ToastContainer />
          <Router>
            {loadingScreen && <Preloader />}
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/Products" element={<ProductsPage />} />
              <Route exact path="/AboutUs" element={<About_us />} />
              <Route exact path="/Products/:categoryID" element={<ProductsPage />} />
              <Route exact path="/Products/:categoryID/:productID" element={<ProductDetailsPage />} />
              <Route exact path="/Orders/:orders" element={<OrdersPage />} />
              <Route exact path="/ReserveSeat" element={<ReserveSeatPage />} />
              <Route exact path="/Contact" element={<ContactPage />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/Register" element={<Register />} />
              <Route exact path="/login/forgetpassword" element={<ForgotPassword />} />
              <Route exact path="*" element={<PageNotFound />} />
            </Routes>
          </Router>
        </UserData.Provider>
      </Notification.Provider>
    </Loading.Provider>
  );
};
export default App;
export {Loading, UserData, Notification};
