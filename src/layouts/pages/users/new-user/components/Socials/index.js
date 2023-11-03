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

// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// NewUser page components
import FormField from "layouts/pages/users/new-user/components/FormField";

function Socials({ formData }) {
  const { formField, values, errors, touched } = formData;
  const { twitter, facebook, instagram } = formField;
  const { twitter: twitterV, facebook: facebookV, instagram: instagramV } = values;

  return (
    <MDBox>
      <MDTypography variant="h5" fontWeight="bold">
        Socials
      </MDTypography>
      <MDBox mt={1.625}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <FormField
              type={twitter.type}
              label={twitter.label}
              name={twitter.name}
              value={twitterV}
              placeholder={twitter.placeholder}
              error={errors.twitter && touched.twitter}
              success={twitterV.length > 0 && !errors.twitter}
            />
          </Grid>
          <Grid item xs={12}>
            <FormField
              type={facebook.type}
              label={facebook.label}
              name={facebook.name}
              value={facebookV}
              placeholder={facebook.placeholder}
            />
          </Grid>
          <Grid item xs={12}>
            <FormField
              type={instagram.type}
              label={instagram.label}
              name={instagram.name}
              value={instagramV}
              placeholder={instagram.placeholder}
            />
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

// typechecking props for Socials
Socials.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default Socials;
