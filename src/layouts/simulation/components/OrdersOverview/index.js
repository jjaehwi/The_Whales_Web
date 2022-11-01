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
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          데이터 종합
        </MDTypography>
        <MDBox mt={0} mb={2}>
          <MDTypography variant="button" color="text" fontWeight="regular">
            <MDTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon sx={{ color: ({ palette: { success } }) => success.main }}>update</Icon>
            </MDTypography>
            &nbsp;
            <MDTypography variant="button" color="text" fontWeight="medium">
              2
            </MDTypography>{" "}
            시간 전 업데이트
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox p={2}>
        <TimelineItem
          color="info"
          icon="rocket"
          title="수상드론 조종값 업데이트"
          dateTime="2022.10.09 17:02"
        />
        <TimelineItem
          color="error"
          icon="gamepad"
          title="시뮬레이션 결과 업데이트"
          dateTime="2022.10.09 11:55"
        />
        <TimelineItem
          color="error"
          icon="gamepad"
          title="시뮬레이션 결과 업데이트"
          dateTime="2022.10.03 13:22"
        />
        <TimelineItem
          color="info"
          icon="rocket"
          title="수상드론 조종값 업데이트"
          dateTime="2022.09.30 23:43"
        />
        <TimelineItem
          color="info"
          icon="rocket"
          title="수상드론 조종값 업데이트"
          dateTime="2022.09.24 09:12"
          lastItem
        />
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
