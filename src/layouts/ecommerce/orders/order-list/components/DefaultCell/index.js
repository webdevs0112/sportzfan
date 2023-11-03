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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Material Dashboard 2 PRO React components
import MDTypography from "components/MDTypography";

function DefaultCell({ value, suffix }) {
  return (
    <MDTypography variant="caption" fontWeight="medium" color="text">
      {value}
      {suffix && (
        <MDTypography variant="caption" fontWeight="medium" color="secondary">
          &nbsp;&nbsp;{suffix}
        </MDTypography>
      )}
    </MDTypography>
  );
}

// Setting default values for the props of DefaultCell
DefaultCell.defaultProps = {
  suffix: "",
};

// Typechecking props for the DefaultCell
DefaultCell.propTypes = {
  value: PropTypes.string.isRequired,
  suffix: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default DefaultCell;
