import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Notfound from './components/Notfound/Notfound';
import AddServices from './components/Pages/AddServices/AddServices';
import Booking from './components/Pages/Booking/Booking';
import Header from './components/Pages/Header/Header';
import Home from './components/Pages/HomePage/Home/Home';
import Services from './components/Pages/HomePage/Services/Services';
import Login from './components/Pages/Login/Login/Login';
import PrivateRoute from './components/Pages/Login/PrivateRoute/PrivateRoute';
import ManageOrders from './components/Pages/ManageOrders/ManageOrders';
import MyOrders from './components/Pages/MyOrders/MyOrders';
import OrderPlaced from './components/Pages/OrderPlaced/OrderPlaced';
import AuthProvider from './Contexts/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute exact path="/addservices">
              <AddServices></AddServices>
            </PrivateRoute>
            <PrivateRoute exact path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/manageorders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute exact path="/orderplaced">
              <OrderPlaced></OrderPlaced>
            </PrivateRoute>

            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
