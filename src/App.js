import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Notices from './components/Notices';
import Concerts from './components/Concerts';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      state2: '',
    }
  }

  componentDidMount() {
    window.onscroll = () => this.handleAnimation();
  }

  handleAnimation = () => {
    if(document.documentElement.scrollTop > 1){
      this.setState({
        state2: 'true',
      });
    } else {
      if(document.documentElement.scrollTop === 0){
        this.setState({
          state2: 'false',
        });
      }
    }
    
  };

  render() {
    return (
      <div>
      <Router>
        <Header classState={this.state.state2}/>
            <Switch>
            <Route path="/" exact component={Notices} />
            <Route path="/concerts" component={Concerts} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/contact" component={Contact} />
            </Switch>
        <Footer />
      </Router>
    </div>
    );
  }
}

export default App;
