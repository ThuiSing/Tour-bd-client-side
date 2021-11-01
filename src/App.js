import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./utilities/context/AuthProvider";
import AddPackage from "./utilities/pages/AddPackage/AddPackage";
import Home from "./utilities/pages/Home/Home/Home";
import Login from "./utilities/pages/Login/Login";
import ManageAllBookedPackages from "./utilities/pages/ManageAllBookedPackages/ManageAllBookedPackages";
import MyServices from "./utilities/pages/MyServices/MyServices";
import PrivateRoute from "./utilities/pages/PrivateRoute/PrivateRoute";
import RegisterBooking from "./utilities/pages/RegisterBooking/RegisterBooking";
import Footer from "./utilities/pages/shared/Footer/Footer";
import Header from "./utilities/pages/shared/Header/Header";
import Services from "./utilities/pages/shared/Services/Services";
import UpdateBookedManagItem from "./utilities/pages/UpdateBookedManagItem/UpdateBookedManagItem";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/register-booking/:id">
              <RegisterBooking />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/myPackages">
              <MyServices />
            </PrivateRoute>
            <PrivateRoute path="/addPackage">
              <AddPackage />
            </PrivateRoute>
            <Route path="/services">
              <Services showAll={true} />
            </Route>
            <PrivateRoute exact path="/all-booked-packages">
              <ManageAllBookedPackages />
            </PrivateRoute>
            <PrivateRoute
              exact
              path="/all-booked-packages/update-booked-item/:id"
            >
              <UpdateBookedManagItem />
            </PrivateRoute>
          </Switch>

          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
