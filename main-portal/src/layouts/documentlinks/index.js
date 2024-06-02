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
import Card from "@mui/material/Card";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";

// Argon Dashboard 2 MUI components


// Billing page components
import BaseLayout from "layouts/billing/components/BaseLayout";
import DetailedStatisticsCard from "examples/Cards/StatisticsCards/DetailedStatisticsCard";
import React from "react";
import CategoriesList from "examples/Lists/CategoriesList";
import Footer from "examples/Footer";
import PropTypes from "prop-types";




import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Argon Dashboard 2 MUI components

import ArgonTypography from "components/ArgonTypography";

// Argon Dashboard 2 MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";
// Overview page components
import Header from "layouts/profile/components/documentlinksheader";
import PlatformSettings from "layouts/profile/components/PlatformSettings";
import SliderMenu from "layouts/documentlinks/SliderMenu";





// Data
import profilesListData from "layouts/profile/data/profilesListData";

import itservicedeskcover from "assets/images/itsd-cover.gif";
import ipscover from "assets/images/ips-cover.gif";
import ipsecover from "assets/images/ipse-cover.gif";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import topcover from "assets/images/topcover.jpg";
import { Public } from "@mui/icons-material";


const bgImage =
topcover;



function DocumentLinks () {
  return (
    <center>
<DashboardLayout
      alignItems="center" sx={{
        backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.info.main, 0.6),
            rgba(gradients.info.state, 0.6)
          )}, url(${bgImage})`,
        backgroundPositionY: "40%",
        backgroundSize: "cover",
      }}
    >
<Header />

<SliderMenu />

<center>
  
      
      </center>

      
    </DashboardLayout>  </center>




    
  );
}

export default DocumentLinks;
