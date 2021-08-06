import React,{useState} from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBBtn,MDBInput } from 'mdb-react-ui-kit';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';

export default function Results(){
    return(
        <MDBContainer className='p-1' style={{padding:"35px 0px", backgroundColor: '#b5cf51', width:"100%" }}>
         <h2 style={{marginTop: "15px"}}>Search Results : </h2> 
         <h3 style={{marginTop: "15px", color: "#f9f9f9"}}>Medicine Name </h3>
        <MDBRow style={{display: 'flex', flexWrap: "wrap", justifyContent: "center", flexDirection: "column", padding: "40px"}}>
           {[1,2,3,4,5].map(item=> (  <MDBCard style={{ maxWidth: '100%', margin: "30px 0px" }}>
      <MDBCardBody>
        <MDBCardTitle>Card {item}</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn outline color='success' style={{ color: "#0000000", border: "2px solid #ffffff", boxShadow: "0px 0px 3px #a3a3a5"}} >Go to Website</MDBBtn>
      </MDBCardBody>
    </MDBCard>))}
        </MDBRow>
        </MDBContainer>
    )
}