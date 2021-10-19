import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Page/Home/Home/Home';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Header from './Page/Shared/Header/Header';
import Footer from './Page/Shared/Footer/Footer';
import ServiceDetails from './Page/Services/ServiceDetails/ServiceDetails';
import Login from './Page/Login/Login';
import About from './Page/About/About/About';
import Contact from './Page/Contact/Contact/Contact';
import AuthPovider from './Context/AuthPovider';
import PrivateRoute from './Page/PrivateRoute/PrivateRoute';
import NotFound from './Page/NotFound/NotFound';

function App() {
  return (
    <div className='body'>
      <AuthPovider>
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path = '/'>
            <Home></Home>
          </Route>
          <Route  path = '/home'>
            <Home></Home>
          </Route>
          <Route  path = '/login'>
            <Login></Login>
          </Route>
          <PrivateRoute  path = '/about'>
            <About></About>
          </PrivateRoute>
          <PrivateRoute  path = '/contact'>
            <Contact></Contact>
          </PrivateRoute>
          <PrivateRoute path = '/details/:serviceId'>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <Route  path = '*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthPovider>
    </div>
  );
}

export default App;
