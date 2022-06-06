import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import AddNewProduct from "./Pages/Dashboard/AddNewProduct/AddNewProduct/AddNewProduct";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin/MakeAdmin";
import ManageAllOrders from "./Pages/Dashboard/ManageAllOrders/ManageAllOrders/ManageAllOrders";
import ManageProducts from "./Pages/Dashboard/ManageProducts/ManageProducts/ManageProducts";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders/MyOrders";
import Payment from "./Pages/Dashboard/Payment/Payment/Payment";
import Review from "./Pages/Dashboard/Review/Review/Review";
import ExploreProducts from "./Pages/Explore/EsploreProducts/ExploreProducts";
import Home from "./Pages/Home/Home/Home";
import AdminRoute from "./Pages/Login/AdminRoute/AdminRoute";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";
import NotFound from "./Pages/NotFound/NotFound";
import Purchase from "./Pages/Purchase/Purchase/Purchase";
// import Footer from "./Pages/Shared/Footer/Footer";
import Navbar from "./Pages/Shared/Navbar/Navbar";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/explore" element={<ExploreProducts />}></Route>
            <Route path={`/purchase/:productId`} element={<PrivateRoute><Purchase /></PrivateRoute>}></Route>
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
              <Route path={`dashboardHome`} element={<DashboardHome />}></Route>
              <Route path={`myOrders`} element={<MyOrders />}></Route>
              <Route path={`payment`} element={<Payment />}></Route>
              <Route path={`review`} element={<Review />}></Route>
              <Route path={`makeAdmin`} element={<AdminRoute><MakeAdmin /></AdminRoute>}></Route>
              <Route path={`addNewProduct`} element={<AdminRoute><AddNewProduct /></AdminRoute>}></Route>
              <Route path={`manageAllOrders`} element={<AdminRoute><ManageAllOrders /></AdminRoute>}></Route>
              <Route path={`manageProducts`} element={<AdminRoute><ManageProducts /></AdminRoute>}></Route>
            </Route>

            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
