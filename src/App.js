import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Notices from "./components/Notices";
import Concerts from "./components/Concerts";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./scss/style.scss";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Notices} />
          <Route path="/notices" component={Notices} />
          <Route path="/concerts" component={Concerts} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
