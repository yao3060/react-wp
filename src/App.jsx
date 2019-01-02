import React from 'react'
import { Route, Switch } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Blog from "./pages/Blog"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Error from "./pages/Error"
import Single from "./pages/Single"

import Login from "./pages/Login"
import Profile from "./pages/Profile"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/blog" component={Blog} />
            <Route path="/single/:postId" component={Single}/>
            <Route component={Error}/>
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

/** */