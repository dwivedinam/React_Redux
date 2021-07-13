import logo from './logo.svg';
import './App.css';
import Header from './containers/Header';
import {BrowserRouter as Router ,Route , Switch} from 'react-router-dom';
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';
import {ProductComponent}from './containers/ProductComponent';

function App() {
  return (
    <div className="App">
 
     <Router>
     <Header />
     <Switch>
    <Route exact path="/" component={ProductListing}></Route>
    <Route exact path="/product/:productId" component={ProductDetails}></Route>
    <Route>404 page nnot found!!!</Route>
    </Switch>
     </Router>
 
    </div>
  );
}

export default App;
