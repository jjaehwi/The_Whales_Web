/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Dashboard 2 React are added here,
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

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Drone from "layouts/drone";
// import Billing from "layouts/billing";
// import RTL from "layouts/rtl";
// import Notifications from "layouts/notifications";
// import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
// import SignUp from "layouts/authentication/sign-up";

// @mui icons
import Icon from "@mui/material/Icon";
import Weather from "layouts/weather";
// import Controller from "layouts/control";
import Simulation from "layouts/simulation";
import Log from "layouts/synthesis";
import GPS from "layouts/drone/gps";

import Gallery from "layouts/drone/gallery";
import Env from "layouts/drone/env";
import Remote from "layouts/drone/remote";
// import Back from "layouts/back";

const routes = [
  {
    type: "collapse",
    name: "메인",
    key: "dashboard",
    icon: <Icon fontSize="medium">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "수상드론",
    key: "Drone",
    icon: <Icon fontSize="medium">sailing</Icon>,
    route: "/Drone",
    component: <Drone />,
  },
  // {
  //   type: "collapse",
  //   name: "컨트롤러",
  //   key: "Con",
  //   icon: <Icon fontSize="medium">gamepad</Icon>,
  //   route: "/Controller",
  //   component: <Controller />,
  // },
  // {
  //   type: "collapse",
  //   name: "메뉴로",
  //   key: "rtl",
  //   icon: <Icon fontSize="medium">format_textdirection_r_to_l</Icon>,
  //   route: "/rtl",
  //   component: <RTL />,
  // },
  {
    type: "collapse",
    name: "시뮬레이션",
    key: "Sim",
    icon: <Icon fontSize="medium">computer</Icon>,
    route: "/Simulation",
    component: <Simulation />,
  },
  {
    type: "collapse",
    name: "종합",
    key: "Log",
    icon: <Icon fontSize="medium">explore</Icon>,
    route: "/Log",
    component: <Log />,
  },
  {
    // type: "collapse",
    name: "화이팅",
    key: "sign-in",
    icon: <Icon fontSize="medium">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  // {
  //   type: "collapse",
  //   name: "가보자",
  //   key: "sign-up",
  //   icon: <Icon fontSize="medium">assignment</Icon>,
  //   route: "/authentication/sign-up",
  //   component: <SignUp />,
  // },
  {
    type: "collapse",
    name: "날씨",
    key: "weather",
    icon: <Icon fontSize="medium">cloud</Icon>,
    route: "/weather",
    component: <Weather />,
  },
  {
    key: "gps",
    route: "/drone/gps",
    component: <GPS />,
  },
  {
    key: "env",
    route: "/drone/env-info",
    component: <Env />,
  },
  {
    key: "gallery",
    route: "/drone/gallery",
    component: <Gallery />,
  },
  {
    key: "remote",
    route: "/drone/remote",
    component: <Remote />,
  },
  // {
  //   type: "collapse",
  //   name: "서버",
  //   key: "back",
  //   icon: <Icon fontSize="medium">setting</Icon>,
  //   route: "/back",
  //   component: <Back />,
  // },
];

export default routes;
