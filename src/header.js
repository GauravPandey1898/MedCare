import React, { useState } from "react";

import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import logo from "./assets/images/logo.GIF";
import history from "./history";

function Header(props) {
  
  return (
    <header>
      <MDBNavbar expand="lg" light bgColor="white">
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <MDBIcon fas icon="bars" />
          </MDBNavbarToggler>
          <div className="collapse navbar-collapse" id="navbarExample01">
            <MDBNavbarNav right className="mb-2 mb-lg-0 "  >
              <img src={logo} alt="hello" style={{ height: "40px" }} onClick={()=> history.push("/")} />
              <div style={{width: "100%", height: "100%",display: "flex",alignItems: "center", padding: "5px ", flexDirection: "row-reverse"}}>
             
              <MDBBtn outline color='success' style={{marginLeft: "50px", color: "#b5cf51", border: "2px solid #ffffff", boxShadow: "0px 0px 3px #a3a3a5"}}>
                About
              </MDBBtn>
              <MDBBtn outline color='success' style={{marginLeft: "50px", color: "#b5cf51", border: "2px solid #ffffff", boxShadow: "0px 0px 3px #a3a3a5"}}>
                Offer
              </MDBBtn>    
              </div>
             
            </MDBNavbarNav>
          </div>
          <div>
          <MDBBtn outline color='success' style={{marginLeft: "50px", color: "#b5cf51", border: "2px solid #ffffff", boxShadow: "0px 0px 3px #a3a3a5"}}>
              Sign Up
            </MDBBtn>
          </div>
        </MDBContainer>
      </MDBNavbar>

      <div
        className="p-5 text-center bg-image header-image"
        style={{ height: 300, }}
      >
        <div className="mask" ></div>
      </div>
    </header>
  );
}

export default Header