import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Page/Home/Home/Home';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Header from './Page/Shared/Header/Header';
import Footer from './Page/Shared/Footer/Footer';

function App() {
  return (
    <div className='body'>
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path = '/'>
            <Home></Home>
          </Route>
          <Route  path = '/home'>
            <Home></Home>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
