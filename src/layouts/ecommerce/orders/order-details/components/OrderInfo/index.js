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
import Grid from "@mui/material/Grid";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import orderImage from "assets/images/product-12.jpg";

function OrderInfo() {
  return (
    <Grid container spacing={3} alignItems="center">
      <Grid item xs={12} md={6}>
        <MDBox display="flex" alignItems="center">
          <MDBox mr={2}>
            <MDAvatar size="xxl" src={orderImage} alt="Gold Glasses" />
          </MDBox>
          <MDBox lineHeight={1}>
            <MDTypography variant="h6" fontWeight="medium">
              Gold Glasses
            </MDTypography>
            <MDBox mb={2}>
              <MDTypography variant="button" color="text">
                Order was delivered 2 days ago.
              </MDTypography>
            </MDBox>
            <MDBadge
              variant="gradient"
              color="success"
              size="xs"
              badgeContent="delivered"
              container
            />
          </MDBox>
        </MDBox>
      </Grid>
      <Grid item xs={12} md={6} sx={{ textAlign: "right" }}>
        <MDButton variant="gradient" color="dark" size="small">
          contact us
        </MDButton>
        <MDBox mt={0.5}>
          <MDTypography variant="button" color="text">
            Do you like the product? Leave us a review{" "}
            <MDTypography component="a" href="#" variant="button" color="text" fontWeight="regular">
              here
            </MDTypography>
            .
          </MDTypography>
        </MDBox>
      </Grid>
    </Grid>
  );
}

export default OrderInfo;
