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

// @mui material components
// import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
// import MDBox from "components/MDBox";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// 페이지 만들고 Footer 추가하기!
import Footer from "examples/Footer";

// import MDTypography from "components/MDTypography";
// import { NavLink } from "react-router-dom";
// import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// import MasterCard from "examples/Cards/MasterCard";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Billing page components
// import PaymentMethod from "layouts/control/components/PaymentMethod";
// import Invoices from "layouts/control/components/Invoices";
// import BillingInformation from "layouts/control/components/BillingInformation";
// import Transactions from "layouts/control/components/Transactions";

function Controller() {
  return (
    <DashboardLayout>
      <DashboardNavbar />

      <Footer />
    </DashboardLayout>
  );
}

export default Controller;
