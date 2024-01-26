import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  // const handleAsciiClick = ()=>{
  //   // console.log("Uppercase was clicked" + text);
  //   let Ascii= chari.charCodeAt(0);
  //   setChar(Ascii);
  // }
  // const handleOnChange = (event)=>{
  //   console.log("On Change");
    
  //   setChar(event.target.value);
  // }
  // const [chari, setChar]=useState('');
  return (
   
      
    // <nav className="navbar navbar-expand-lg bg-body-tertiary dark-mode">
    <nav className={`navbar navbar-${props.mode} navbar-expand-lg bg-${props.mode} data-bs-theme="${props.mode} " `}>
    {/* // <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light"> */}
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
       
      </ul>
      {/* <textarea className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></textarea> */}
        {/* <textarea className="form-control area d-flex me-2" value={chari} onChange={handleOnChange} id="myBox" rows="1"></textarea>
        <button className="btn btn-primary mx-1" onClick={handleAsciiClick}>Ascii value</button> */}
        <div className={`form-check form-switch text-${props.mode==='light'? 'dark' : 'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault ">Enable Dark Mode</label>
</div>
    </div>
  </div>
</nav>



    
  )
}
Navbar.propTypes ={
    title: PropTypes.string.isRequired ,
    aboutText: PropTypes.string.isRequired
}//defines the type of data it will contain


Navbar.defaultProps={
  title:'set title',
  aboutText:'About '
};

