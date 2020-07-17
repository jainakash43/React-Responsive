import React ,{Component} from 'react';
import Headers from './components/Headers/Headers.js';
import Contact from './components/Contact/Contact.js';
import Footer from './components/Footer/Footer.js';
import Home from  './components/Home/Home.js';


class App extends Component {
 
 

  render() {
    return (
      <div>
            <Headers/>
            <Home/>
            <Footer/>
      </div>
    );
  }
}



export default App;