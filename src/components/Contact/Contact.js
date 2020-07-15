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
            <div className="container">
            <p className="paragraph">
            I'm really glad you decided to communicate with me through my portal. It's a pleasure to meet new people who have some common interests, sparks really interesting conversions leading to valuable knowledge sharing.
               <br/><br/>
               Please drop in your message below along with your details. Do share any social networking link so that we can stay in touch.

            </p>
            
            <form className="Form">
               
            
               <label id="lb">Contact Me</label>
            

            
               
               <label className="label">Hi there, Please enter your name</label>
               

               <div className="input_div">
               <i class="fa fa-user"></i>    
               <input className="input" type="text" onChange={this.handleChange}  name="Name" placeholder="Enter your name"  value={this.state.Name} required />
               </div>  

               
               <label className="label">Please Enter your Contact Number</label>
              
               <div className="input_div"> 
               <i class="fa fa-phone "></i>   
               <input className="input" type="text" onChange={this.handleChange}  name="Contact" placeholder="Enter your contact" required />     
               </div>

               <label className="label">Enter your Email</label>

               <div className="input_div">
               <i class="fa fa-envelope "></i>
               <input className="input" type="text" onChange={this.handleChange} name="Email" placeholder="Enter your Email" required />
               </div>

               <label className="label">Your message</label>

               <textarea className="textarea" rows="8" onChange={this.handleChange} name="Message"  placeholder="Your Message"></textarea>

               <button className="input_button" onClick={this.handleSubmit}>Submit</button>
               
              
            
            </form>
             
            </div>
        );
    }
}



export default Contact;