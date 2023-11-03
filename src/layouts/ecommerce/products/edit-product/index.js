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

// Material Dashboard 2 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// EditProduct page components
import ProductImage from "layouts/ecommerce/products/edit-product/components/ProductImage";
import ProductInfo from "layouts/ecommerce/products/edit-product/components/ProductInfo";
import Socials from "layouts/ecommerce/products/edit-product/components/Socials";
import Pricing from "layouts/ecommerce/products/edit-product/components/Pricing";

function EditProduct() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox my={3}>
        <MDBox mb={6}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={6}>
              <MDTypography variant="h4" fontWeight="medium">
                Make the changes below
              </MDTypography>
              <MDBox mt={1} mb={2}>
                <MDTypography variant="body2" color="text">
                  We’re constantly trying to express ourselves and actualize our dreams. If you have
                  the opportunity to play.
                </MDTypography>
              </MDBox>
            </Grid>
            <Grid item xs={12} lg={6}>
              <MDBox display="flex" justifyContent="flex-end">
                <MDButton variant="gradient" color="info">
                  save
                </MDButton>
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4}>
            <ProductImage />
          </Grid>
          <Grid item xs={12} lg={8}>
            <ProductInfo />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Socials />
          </Grid>
          <Grid item xs={12} lg={8}>
            <Pricing />
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default EditProduct;
