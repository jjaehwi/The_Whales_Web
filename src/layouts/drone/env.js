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
import MDBox from "components/MDBox";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";
import { Grid } from "@mui/material";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
// import DataTable from "examples/Tables/DataTable";

// Data
// import authorsTableData from "layouts/drone/data/authorsTableData";
// import projectsTableData from "layouts/drone/data/projectsTableData";
// import { NavLink } from "react-router-dom";

function Env() {
  // const { columns, rows } = authorsTableData();

  // const { columns: pColumns, rows: pRows } = projectsTableData();
  const { sales, tasks } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      {/* 그래프들 */}
      <MDBox mt={4.5}>
        <Grid container spacing={3}>
          {/* 그래프 1 */}
          <Grid item xs={12} md={6} lg={6}>
            <MDBox mb={3}>
              <ReportsLineChart
                color="info"
                title=" 수상드론 온도 측정"
                description={
                  <>
                    3시간 전보다 (<strong>-1℃</strong>)
                  </>
                }
                date="updated 2 hours ago"
                chart={tasks}
              />
            </MDBox>
          </Grid>

          {/* 그래프 2 */}
          <Grid item xs={12} md={6} lg={6}>
            <MDBox mb={3}>
              <ReportsLineChart
                color="success"
                title=" 수상드론 습도 측정"
                description={
                  <>
                    2시간 전보다 (<strong>-30%</strong>)
                  </>
                }
                date="updated 2 hours ago"
                chart={sales}
              />
            </MDBox>
          </Grid>

          {/* 그래프 3 */}
          {/* <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="하나 남음"
                  description="Last Campaign Performance"
                  date="just updated"
                  chart={tasks}
                />
              </MDBox>
            </Grid> */}
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Env;
