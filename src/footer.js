import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBBtn,MDBInput } from 'mdb-react-ui-kit';
import Img1 from "./assets/images/img1.jpeg";
import Img2 from "./assets/images/img2.jpeg";
import Img3 from "./assets/images/img3.jpeg";
import Img4 from "./assets/images/img4.jpeg";

export default function Footer() {
  return (
    <MDBFooter backgroundColor='light' className='text-center text-lg-left'>
      
      <MDBContainer className='p-4' style={{padding:"35px 0px", backgroundColor: '#b5cf51', width:"100%" }}>
         <h2>Our Partners</h2> 
        <MDBRow style={{display: 'flex', flexWrap: "wrap", justifyContent: "center"}}>
            <img style={{height: "80px", width: "130px"}} src={Img1} alt="" />
            <img style={{height: "80px", width: "130px"}} src={Img2} alt="" />
            <img style={{height: "80px", width: "130px"}} src={Img3} alt="" />
            <img style={{height: "80px", width: "130px"}} src={Img4} alt="" />
        </MDBRow>
        </MDBContainer>
      <div className='text-center p-3' style={{ backgroundColor: '#b5cf51' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://mdbootstrap.com/'>
          MedCompare 2021
        </a>
      </div>
    </MDBFooter>
  );
}