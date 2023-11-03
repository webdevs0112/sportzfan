/**
=========================================================
* Material Dashboard 2 PRO React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

function FullBody() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={3} mb={2} px={3}>
        <MDTypography variant="body2" color="text">
          Full Body
        </MDTypography>
        <MDBadge variant="contained" color="info" badgeContent="moderate" container />
      </MDBox>
      <MDBox pb={3} px={3}>
        <MDTypography variant="body2" color="text">
          What matters is the people who are sparked by it. And the people who are liked.
        </MDTypography>
      </MDBox>
    </Card>
  );
}

export default FullBody;
