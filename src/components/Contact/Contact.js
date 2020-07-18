import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state={Name:"",Contact:"",Email:"",Message:""}
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
     handleChange(event){

        this.setState({[event.target.name]:event.target.value})
    
    }
    
    handleSubmit(event){
       console.log("hi");
    }
    
    render() {
        
        return (
            <div className="Contact_Container">
                  
                   <div className="centerdiv">
                   </div>


                  <form className="Contact">

                        <p>Contact Me</p>
                        
                        <label>Your Good Name</label>
                        
                        <div className="inputContainer">
                           <i className="fa fa-user " id="icon" > </i>
                           <input type="text" placeholder="Name"/>
                        </div>

                        <label>Your Email Address</label>

                        <div className="inputContainer">
                           <i className="fa fa-envelope " id="icon"> </i>
                           <input type="text" placeholder="Your email address"/>
                        </div>

                        <label>Your Website or other online presence</label>  

                        <div className="inputContainer">
                           <i className="fa fa-home " id="icon"> </i>
                           <input type="text" placeholder="Your Website or blog"/>
                        </div> 

                        <label>Message</label> 

                        
                       <textarea placeholder="Message"  id="Message" rows="4" ></textarea>

                       <button >Submit</button>
                        
                                      
                   </form>                 

                 

     
            </div>
        );
    }
}



export default Contact;