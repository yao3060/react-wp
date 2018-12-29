import React from 'react'
import { Route, Switch } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Error from "./pages/Error"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route component={Error}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;