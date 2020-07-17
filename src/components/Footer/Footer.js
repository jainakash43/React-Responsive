import React, { Component } from 'react';
import "./Footer.css"

class Footer extends Component {
   
    constructor(props) {
        super(props);

    }

    

    render() {
        return (
            <div className="Footer">


                   <div className="parent-container">


                       <div className="pt_container">
                           <p>My Social Networking Links</p>
                       </div>

                       <div className="icon_container">
                          
                              <div className="icons">
                                  <a href="#" class="fa fa-facebook"></a>
                              </div>

                              <div className="icons">
                                 <a href="#" class="fa fa-twitter"></a>
                              </div>

                              <div className="icons">
                                 <a href="#" class="fa fa-instagram"></a>
                              </div>

                              <div className="icons">
                                 <a href="#" class="fa fa-quora"></a>
                              </div>

                              <div className="icons">
                                 <a href="#" class="fa fa-github"></a>
                              </div>
                       
                       </div>


                   </div>


















         
            

            </div>
        );
    }
}





export default Footer;