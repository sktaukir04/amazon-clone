import './App.css';
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"; //
import Header from "./Header";
import Home from "./Home"
import Checkout from "./Checkout"
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import Footer from './footer'

function App() {
  // const [{user }, dispatch] = useStateValue();
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        // user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    });
    return () => {
      // any clean up operations go here
      unsubscribe();
    }
  }, []);
  console.log("USER IS : ", user);



  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Router path="/login">
            <Login />
          </Router>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;

