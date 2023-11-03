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

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

function Header() {
  return (
    <MDBox display="flex" justifyContent="space-between" alignItems="center">
      <MDBox>
        <MDBox mb={1}>
          <MDTypography variant="h6" fontWeight="medium">
            Order Details
          </MDTypography>
        </MDBox>
        <MDTypography component="p" variant="button" color="text">
          Order no. <b>241342</b> from
          <b>23.02.2021</b>
        </MDTypography>
        <MDTypography component="p" variant="button" fontWeight="regular" color="text">
          Code: <b>KF332</b>
        </MDTypography>
      </MDBox>
      <MDButton variant="gradient" color="dark">
        invoice
      </MDButton>
    </MDBox>
  );
}

export default Header;
