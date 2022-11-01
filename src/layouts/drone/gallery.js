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
// import Card from "@mui/material/Card";

// Material Dashboard 2 React components
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// import MDBox from "components/MDBox";
// import { Link, NavLink } from "react-router-dom";
import { Button } from "@mui/material";

// import DataTable from "examples/Tables/DataTable";

// Data
// import authorsTableData from "layouts/drone/data/authorsTableData";
// import projectsTableData from "layouts/drone/data/projectsTableData";
// import { NavLink } from "react-router-dom";

function Gallery() {
  // const { columns, rows } = authorsTableData();
  // const { columns: pColumns, rows: pRows } = projectsTableData();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Button
        style={{ fontSize: "50px", marginTop: 100, marginBottom: 100 }}
        onClick={() => window.open("[https://www.youtube.com]", "_blank")}
      >
        URL : http://192.168.157.20:8081/
      </Button>
      <Footer />
    </DashboardLayout>
  );
}

export default Gallery;
