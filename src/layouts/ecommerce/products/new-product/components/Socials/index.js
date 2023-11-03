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

// NewProduct page components
import FormField from "layouts/ecommerce/products/new-product/components/FormField";

function Socials() {
  return (
    <MDBox>
      <MDTypography variant="h5" fontWeight="bold">
        Socials
      </MDTypography>
      <MDBox mt={2}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormField type="text" label="Shoppify Handle" />
          </Grid>
          <Grid item xs={12}>
            <FormField type="text" label="Facebook Account" />
          </Grid>
          <Grid item xs={12}>
            <FormField type="text" label="Instagram Account" />
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

export default Socials;
