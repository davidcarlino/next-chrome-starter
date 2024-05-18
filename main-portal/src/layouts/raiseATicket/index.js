/**
=========================================================
* Argon Dashboard 2 MUI - v3.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";

// Argon Dashboard 2 MUI components


// raiseATicket page components
import BaseLayout from "layouts/raiseATicket/components/BaseLayout";


function raiseATicket() {
  return (
    <>
      <BaseLayout/>
      <div>
        
          <div className="title">OTP</div> 
          <div className="title">Verification Code</div> 
          <p className="message">We have sent a verification code to your mobile number</p> 
      
      </div>   
    </>
  );
}

export default raiseATicket;