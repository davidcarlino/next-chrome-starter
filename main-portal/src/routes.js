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

/** 
  All of the routes for the Soft UI Dashboard React are added here,
  You can add a new route, customize the routes and delete the routes here.
  Once you add a new route on this file it will be visible automatically on
  the Sidenav.
  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Argon Dashboard 2 MUI layouts
import Dashboard from "layouts/dashboard";
import SupportIcon from "@mui/icons-material/Support";
import Tables from "layouts/tables";
import HandymanIcon from '@mui/icons-material/Handyman';
import Billing from "layouts/billing";
import Selfservice from "layouts/selfservice";
import Raiseaticket from "layouts/raiseaticket";
import DocumentLinks from "layouts/documentlinks";
import RTL from "layouts/rtl";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import SchoolIcon from '@mui/icons-material/School';

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";

const routes = [
  {
    type: "route",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <ArgonBox component="i" color="primary" fontSize="14px" className="ni ni-tv-2" />,
    component: <Dashboard />,
  },
  {
    type: "route",
    name: "Knowledge Base",
    key: "knowledgebase",
    route: "/knowledgebase",
    icon: <ArgonBox component="i" color="success" fontSize="14px" className="ni ni-atom" />,
    component: <Billing />,
  },
  {
    type: "route",
    name: "Document Links",
    key: "Documentlinks",
    route: "/documentlinks",
    icon: <ArgonBox component="i" color="success" fontSize="14px" className="ni ni-book-bookmark" />,
    component: <DocumentLinks />,
  },
  {
    type: "route",
    name: "Self-Service",
    key: "selfService",
    route: "/selfService",
    icon: <ArgonBox component="i" color="success" fontSize="14px" className="ni ni-settings" />,
    component: <Selfservice />,
  },

  {
    type: "route",
    name: "Raise A Ticket",
    key: "raiseaticket",
    route: "/raiseaticket",
    icon: <ArgonBox component="i" color="success" fontSize="14px" className="ni ni-support-16" />,
    component: <Raiseaticket />,
  },
  
];

export default routes;
