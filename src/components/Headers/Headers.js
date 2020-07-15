import React, { useState, useEffect } from "react";
import './Header.css';
export default function Headers()
{   
   const [isNavVisible, setIsNavVisible]=useState(true);

   const [isSmallScreen, setIsSmallScreen]=useState(false);

   useEffect( () =>{
       
       const mediaQuery=window.matchMedia("(max-width:700px)");
       mediaQuery.addListener(handleMediaQueryChange);
       handleMediaQueryChange(mediaQuery);

       return ()=>{
           mediaQuery.removeListener(handleMediaQueryChange); 
       };


   },[]);

   const handleMediaQueryChange=(mediaQuery)=>{
            if(mediaQuery.matches)
            {
               setIsSmallScreen(true);
               setIsNavVisible(false);
            }
            else
            {
               setIsSmallScreen(false);
            }
   };

   const toggleNav=()=>{
      setIsNavVisible(!isNavVisible);
   }
       return (
          <header className="Header">
           { (!isSmallScreen || isNavVisible) &&
               (  
               <nav className="Nav">
                <a href="/">Home</a>
                <a href="/">Articles</a>
                <a href="/">About</a>
                <button>Logout</button> 
               </nav>
               )
            }
            
            <a  href="#" className="icon" onClick={toggleNav}>
               <i className="fa fa-bars"></i>
            </a>
          </header>
     );

}