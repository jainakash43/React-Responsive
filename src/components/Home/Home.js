import React, { Component } from 'react';
import "./Home.css";

class Home extends Component {
    

    

    render() {
        return (
            <div className="Home_Container">
               
               
               <div className="Home">
                
                <p>About This Website
                </p> <br/>

                 <div className='Home_1'>
                   
                             <div className='Home_1_1'>
                                
                                 <div></div>
                                 <p>Akash Jain</p>
                     
                              </div>
                  
                             <p>

                              Hi Guys!!  My name is <span>Akash Jain</span>. My currently working as a software engineer in TCS, Bangalore. Currently I am 
                              in front-end engineering. For that purpose , I have created my personal portfolio website.<br/>
                    
                              The technologies that i have used in creating this website is <span>HTML,CSS,JAVASCRIPT,REACTJS,SPRING-BOOT</span><br/>
                              This website is based on the concept of Single Page Application (SPA) , its whole front-end part has been made by using 
                              ReactJS, and its backend is in Spring Boot. <br/>
                              Guys Please have a look, and give me your valuable feedback. 
    
                             </p>

                 </div>
              
              
              </div>
            </div>
        );
    }
}



export default Home;