import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Common from './components/pages/main/Common';
import Dream from './components/pages/main/Dream';
import Previous from './components/pages/main/Previous';
import Footer from './components/pages/main/Footer';
import Dashboard from './components/pages/main/Dashboard';
import Login from './components/pages/main/Login';
import { LoginProvider } from './components/pages/main/LoginProvider';


function App() {
  return (
    <LoginProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/common' component={Common} />
          <Route path='/dream' component={Dream} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/previous' component={Previous} />
          <Route path='/login' component={Login} />
        </Switch>
        <Footer />
      </Router>
    </LoginProvider>

  );
}

export default App;

