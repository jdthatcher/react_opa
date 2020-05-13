import React, { Component } from 'react';
import './App.css';
import Header from './components/elements/Header/Header';
import Footer from './components/elements/Footer/Footer';
import Home from './components/pages/Home/Home';
import Faq from './components/pages/Faq/Faq';
import Resume from './components/pages/Resume/Resume';
import Contact from './components/pages/Contact/Contact';
import { Route } from 'react-router-dom';


class App extends Component {
render() {
    return ( 
    <div className = "App" >
        <Header />

     
        <Route exact= {true} path="/" component={Home} />
        <Route path="/faq" component={Faq} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
     
        {/* <Footer /> */}
    </div>
    );
}
}

export default App;