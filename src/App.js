import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import About from './Pages/Home/About/About';
import Destinations from './Pages/Home/Destinations/Destinations';
// import PopularDestination from './Pages/PopularDestination/PopularDestination';
import Blog from './Pages/Home/Blog/Blog';
import Nav from './Pages/Home/Nav/Nav';
import Footer from './Pages/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import Description from './Pages/Home/Description/Description';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import AuthProvider from './hooks/authProvider';
// import Description from './Pages/Home/Description/Description';


function App() {
  // const history = useHistory();
  return (
    <div className="App">

      <AuthProvider>
        <BrowserRouter>
          <Nav></Nav>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute exact path='/about'>
              <About></About>
            </PrivateRoute>
            <Route exact path='/destination'>
              <Destinations></Destinations>
            </Route>

            <Route exact path='/blog'>
              <Blog></Blog>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute exact path='/description/:destinationId'>
              <Description></Description>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
