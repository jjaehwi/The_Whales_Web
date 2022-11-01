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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
// import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />

      {/* 상단이랑 카드들이랑 간격 */}
      <MDBox py={3}>
        {/* 카드간 간격 */}
        <Grid container spacing={3}>
          {/* 1. 카드 */}
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="rocket"
                title="수상드론"
                percentage={{
                  color: "success",
                  // amount: "+55%",
                  label: "수상드론이 수집한 정보를 확인하세요!",
                }}
              />
            </MDBox>
          </Grid>

          {/* 2. 카드 */}
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="gamepad"
                title="시뮬레이션 "
                // count="2,300"
                percentage={{
                  color: "success",
                  // amount: "+3%",
                  label: "시뮬레이션 결과를 확인하세요!",
                }}
              />
            </MDBox>
          </Grid>

          {/* 3. 카드 */}
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="hub"
                title="종합 페이지"
                // count="34k"
                percentage={{
                  color: "success",
                  // amount: "+1%",
                  label: "데이터를 한눈에 확인해보세요!",
                }}
              />
            </MDBox>
          </Grid>

          {/* 4. 카드 */}
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="cloud"
                title="날씨"
                // count="+91"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "GPS 기반 날씨를 확인해보세요!",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>

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

        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={3} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
