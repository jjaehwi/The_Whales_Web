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
import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// import DataTable from "examples/Tables/DataTable";

// Data
// import authorsTableData from "layouts/drone/data/authorsTableData";
// import projectsTableData from "layouts/drone/data/projectsTableData";
import { NavLink } from "react-router-dom";

function Drone() {
  // const { columns, rows } = authorsTableData();
  // const { columns: pColumns, rows: pRows } = projectsTableData();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={12}>
        {/* 카드간 간격 */}
        <Grid container spacing={14}>
          {/* 1. 카드 */}
          <Grid item xs={12} md={6} lg={6} alignItems="center">
            <MDBox
              display="flex"
              justifyContent="center"
              alignItems="center"
              bgColor="#343a40"
              component={NavLink}
              to="/drone/gps"
              mb={1.5}
              borderRadius="lg"
              opacity={1}
            >
              <MDTypography variant="body2" fontWeight="regular" color="white" fontSize="100px">
                위치 정보
              </MDTypography>
            </MDBox>
          </Grid>

          {/* 2. 카드 */}
          <Grid item xs={12} md={6} lg={6}>
            <MDBox
              display="flex"
              justifyContent="center"
              alignItems="center"
              bgColor="#343a40"
              component={NavLink}
              to="/drone/env-info"
              mb={1.5}
              borderRadius="lg"
              opacity={1}
            >
              <MDTypography variant="body2" fontWeight="regular" color="white" fontSize="100px">
                환경 정보
              </MDTypography>
            </MDBox>
          </Grid>

          {/* 3. 카드 */}
          <Grid item xs={12} md={6} lg={6}>
            <MDBox
              display="flex"
              justifyContent="center"
              alignItems="center"
              bgColor="#343a40"
              component={NavLink}
              to="/drone/gallery"
              mb={1.5}
              borderRadius="lg"
              opacity={1}
            >
              <MDTypography variant="body2" fontWeight="regular" color="white" fontSize="100px">
                촬영 정보
              </MDTypography>
            </MDBox>
          </Grid>

          {/* 4. 카드 */}
          <Grid item xs={12} md={6} lg={6}>
            <MDBox
              display="flex"
              justifyContent="center"
              alignItems="center"
              bgColor="#343a40"
              component={NavLink}
              to="/drone/remote"
              mb={1.5}
              borderRadius="lg"
              opacity={1}
            >
              <MDTypography variant="body2" fontWeight="regular" color="white" fontSize="100px">
                강제 제어
              </MDTypography>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Drone;
