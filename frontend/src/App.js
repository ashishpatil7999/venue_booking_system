import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./home/LandingPage";
import Home from "./home/Home";
import Login from "./home/Login";

import NavBar from "./navbar/NavBar";
import OwnerNavbar from "./navbar/OwnerNavbar";
import UserNavbar from "./navbar/UserNavbar";

import Footer from "./navbar/Footer";
import Registration from "./home/Registration";
import AboutUs from "./home/AboutUs";
import ForgotPass from "./home/ForgotPass";

import OwnerHome from "./owner/OwnerHome";
import UserHome from "./user/UserHome";

import AddGround from "./owner/AddGround";
import EditGround from "./owner/EditGround";

import ViewGround from "./user/ViewGrounds";
import AdminNavBar from "./navbar/AdminNavbar";
import AdminHome from "./admin/AdminHome";
import ViewUser from "./admin/ViewUser";
import ViewOwner from "./admin/ViewOwner";
import ViewGround_Owner from "./owner/ViewGround_Owner";

import BookGround from "./user/BookGround";
import ViewBooking_Owner from "./owner/ViwBookings_Owner";
import ViewBooking_User from "./user/ViwBookings_User";
import ViewBookings_Admin from "./admin/ViewBookings_Admin";
import ViewGrounds_Admin from "./admin/ViewGrounds_Admin";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact={true} path="/">
          <NavBar />
          <LandingPage />
          <Footer />
        </Route>

        <Route exact={true} path="/home">
          <NavBar />
          <Home />
          <Footer />
        </Route>
        <Route exact={true} path="/aboutus">
          <NavBar />
          <AboutUs />
          <Footer />
        </Route>

        <Route exact={true} path="/login">
          <NavBar />
          <Login />
          <Footer />
        </Route>

        <Route exact={true} path="/forgot_password">
          <NavBar />
          <ForgotPass />
          <Footer />
        </Route>

        <Route exact={true} path="/register">
          <NavBar />
          <Registration />
          <Footer />
        </Route>
        <Route exact={true} path="/ownerhome">
          <OwnerNavbar />
          <OwnerHome />
          <Footer />
        </Route>

        <Route exact={true} path="/viewbooking_owner">
          <OwnerNavbar />
          <ViewBooking_Owner />
          <Footer />
        </Route>

        <Route exact={true} path="/addground">
          <OwnerNavbar />
          <AddGround />
          <Footer />
        </Route>

        <Route exact={true} path="/editground">
          <OwnerNavbar />
          <EditGround />
          <Footer />
        </Route>

        <Route exact={true} path="/viewgroundowner">
          <OwnerNavbar />
          <ViewGround_Owner />
          <Footer />
        </Route>
        <Route exact={true} path="/userhome">
          <UserNavbar />
          <UserHome />
          <Footer />
        </Route>

        <Route exact={true} path="/vewground">
          <UserNavbar />
          <ViewGround />
          <Footer />
        </Route>

        <Route exact={true} path="/viewbookings_user">
          <UserNavbar />
          <ViewBooking_User />
          <Footer />
        </Route>

        <Route exact={true} path="/bookground">
          <UserNavbar />
          <BookGround />
          <Footer />
        </Route>

        <Route exact={true} path="/adminhome">
          <AdminNavBar />
          <AdminHome />
          <Footer />
        </Route>

        <Route exact={true} path="/viewuser">
          <AdminNavBar />
          <ViewUser />
          <Footer />
        </Route>

        <Route exact={true} path="/viewowner">
          <AdminNavBar />
          <ViewOwner />
          <Footer />
        </Route>
        <Route exact={true} path="/viewbooking_admin">
          <AdminNavBar />
          <ViewBookings_Admin />
          <Footer />
        </Route>
        <Route exact={true} path="/viewground_admin">
          <AdminNavBar />
          <ViewGrounds_Admin />
          <Footer />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
