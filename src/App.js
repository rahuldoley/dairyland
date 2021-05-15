import './App.css';
import Navbar from './Navbar';
import CarouselContainer from './CarouselContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Items from './Items';
import Checkout from './Checkout';
import Geolocation from './Geolocation';
import SignIn from './SignIn';
import Payment from './Payment';
import Orders from './Orders';
import ProductNav from './ProductNav';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const promise = loadStripe(
  "pk_test_51H0O9NKm7P5pwQb1ipsgPqfD4eN0C16cQKODH9tkuS8BxHDnkdOpn2y5U6VPE3oR6BiFWEoqZYChemIIZ5JKpsmD003iA7B6ev"
)

function App() {


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/signin'>
            <SignIn />
          </Route>
          <Route path='/orders'>
            <Navbar />
            <Orders />
          </Route>
          <Route path="/payment">
            <Navbar />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/checkout">
            <Navbar />
            <Checkout />
          </Route>
          <Route path="/product">
            <Navbar />
            <ProductNav />
            <Items />
            <Footer />
          </Route>
          <Route path='/'>
            <Navbar />
            <Geolocation />
            <CarouselContainer />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

{/* <Navbar />
            <CarouselContainer />
            <Footer /> */}
