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
import { Button, Grid } from "@mui/material";
import { useState } from "react";
import MDBox from "components/MDBox";
// import DataTable from "examples/Tables/DataTable";

// Data
// import authorsTableData from "layouts/drone/data/authorsTableData";
// import projectsTableData from "layouts/drone/data/projectsTableData";
// import { NavLink } from "react-router-dom";

function Remote() {
  // const { columns, rows } = authorsTableData();
  // const { columns: pColumns, rows: pRows } = projectsTableData();

  const [state, setState] = useState("강제제어 하기");

  const [text, setText] = useState("없음");
  const [count, setCount] = useState(0);
  const [heading, setHeading] = useState(0);

  const remoteBtn = () => {
    setState("강제제어 중 입니다.");
    console.log("강제제어 중입니다.");
  };

  const LeftPress = () => {
    setText("좌");
    setHeading(heading - 15);
    console.log("좌");
  };
  const RightPress = () => {
    setText("우");
    setHeading(heading + 15);
    console.log("우");
  };
  const AbovePress = () => {
    setText("상");
    setCount(count + 10);
    console.log("상");
  };
  const BelowPress = () => {
    setText("하");
    setCount(count - 10);
    console.log("하");
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Grid>
        <Button
          style={{ background: "skyblue", fontSize: "25px", color: "white" }}
          onClick={remoteBtn}
        >
          {state}
        </Button>
        <MDBox
          style={{
            fontSize: 25,
            color: "black",
            marginTop: 25,
            marginLeft: 25,
          }}
        >
          입력되는 값: {text}
        </MDBox>
        <MDBox
          style={{
            fontSize: 25,
            color: "black",
            marginTop: 15,
            marginLeft: 25,
          }}
        >
          속도 : {count}
        </MDBox>
        <MDBox
          style={{
            fontSize: 25,
            color: "black",
            marginTop: 15,
            marginLeft: 25,
          }}
        >
          타각 : {heading}
        </MDBox>
      </Grid>

      <Grid style={{ margin: 50 }}>
        <Button
          style={{ background: "black", fontSize: "25px", color: "white", marginLeft: 120 }}
          onClick={AbovePress}
        >
          ⬆️
        </Button>
      </Grid>
      <Grid style={{ margin: 50 }}>
        <Button
          style={{ background: "black", fontSize: "25px", color: "white" }}
          onClick={LeftPress}
        >
          ⬅️
        </Button>
        <Button
          style={{ background: "black", fontSize: "25px", color: "white", marginLeft: 50 }}
          onClick={BelowPress}
        >
          ⬇️
        </Button>
        <Button
          style={{ background: "black", fontSize: "25px", color: "white", marginLeft: 50 }}
          onClick={RightPress}
        >
          ➡️
        </Button>
      </Grid>
      <Footer />
    </DashboardLayout>
  );
}

export default Remote;
