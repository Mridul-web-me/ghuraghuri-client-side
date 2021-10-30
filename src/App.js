import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Banner from './Pages/Home/Banner/Banner';
import Home from './Pages/Home/Home';
import AddService from './Pages/AddService/AddService';


function App() {
  return (
    <div className="App">

      <Home></Home>
      <Banner></Banner>
      <AddService></AddService>
    </div>
  );
}

export default App;
