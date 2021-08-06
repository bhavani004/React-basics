import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Sidenav from './Components/Sidenav';
import Footer from './Components/Footer';
import Dashboard from './Components/Dashboard';
import Products from './Components/Products';
import Home from './Components/Home';
import About from './Components/About';
import Login from './Components/Login';
import Contactus from './Components/Contactus';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Conditionalrendering from './Components/Conditionalrendering';
import Counter from './Components/Counter';
import Todolist from './Components/Todolist';
import Fetchdata from './Components/Fetchdata';
import Demo from './Components/Demo';
import Apitask from './Components/Apitask';
import Routes from './Routes/Routes'
import Api from './Components/Api';
import Routers from './Routes/Routers';


function App() {
  return (
    <div className="App">
      {/* <Todolist/> */}
      {/* <Conditionalrendering/> */}
      {/* <Counter/> */}

      {/* <Header /> */}
      {/* <Sidenav />
      <Footer /> */}

      {/* <Switch>
        <Route path="/Home">
          <Home />
        </RoRoutethis is products</h1>
      </Products> */}
      {/* <Footer/> */}
      {/* <Fetchdata/> */}
      {/* <Todolist1 /> */}
      {/* <Demo/> */}
      {/* <Apitask /> */}
      {/* <BrowserRouter>
      <Routes/>
      </BrowserRouter> */}
       <BrowserRouter>
      <Routers/>
      </BrowserRouter>
     
      </div>
  );
}

export default App;
  