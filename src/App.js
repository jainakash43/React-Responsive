import React ,{Component} from 'react';
import Headers from './components/Headers/Headers.js';
import Contact from './components/Contact/Contact.js';
import Footer from './components/Footer/Footer.js';
import Home from  './components/Home/Home.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component {
 
 

  render() {
    return (
      <div>

            <Headers/>
               <Switch>
                   <Route path='/' component={Home} exact  />
                   <Route path='/contact' component={Contact} exact />
                   <Route path='/articles' component={Home} />
                   <Route path='/about' component={Home}  />
               </Switch>
            <Footer/>
      
      </div>
    );
  }
}



export default App;