import React,{useState} from "react";
import history from "./history";
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
  import magnifyIcon from "./assets/images/magnify-glass.png"
import {Link} from 'react-router-dom';

export default function Home(props){
    let [searchHandle, setSearchHandle] = useState("");
    return(
        <div
        className="p-5 text-center bg-image"
        style={{ height: 400 }}
      >
      <div className="mask" style={{ backgroundColor: "#b5cf51" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
                <div style={{display: 'flex', alignItems: 'center', background: "#f9f9f9", width: "700px", height:"100px", padding: "15px 10px", justifyContent: "space-around", borderRadius: "8px", boxShadow: "0 3px 6px #a3a3a5"}}>
                    <img src={magnifyIcon} alt="" />
                <input style={{ width: "70%", background: "inherit", margin: "0px 10px", border: "1px solid #a3a5a5", borderRadius: "4px", height: "35px", padding: "5px 10px"}}
                type="text" name="seach-handler" value={searchHandle} onChange={(e)=> setSearchHandle(e.target.value)} placeholder="search..."/>   
                <MDBBtn outline color='success' style={{ color: "#0000000", border: "2px solid #ffffff", boxShadow: "0px 0px 3px #a3a3a5"}} >
             <Link to={`/result`} style={{color: "#000000"}}>
             Search
             </Link> 
            </MDBBtn>   
                </div>
              
            </div>
          </div>
        </div>  
      </div>
    )
}