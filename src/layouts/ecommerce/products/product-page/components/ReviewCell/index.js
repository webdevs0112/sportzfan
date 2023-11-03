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

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 PRO React components
import MDTypography from "components/MDTypography";

function ReviewCell({ rating }) {
  const ratings = {
    0.5: [
      <Icon key={1}>star_outline</Icon>,
      <Icon key={2}>star_outline</Icon>,
      <Icon key={3}>star_outline</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    1: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star_outline</Icon>,
      <Icon key={3}>star_outline</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    1.5: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star_half</Icon>,
      <Icon key={3}>star_outline</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    2: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star_outline</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    2.5: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star_half</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    3: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    3.5: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star</Icon>,
      <Icon key={4}>star_half</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    4: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star</Icon>,
      <Icon key={4}>star</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    4.5: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star</Icon>,
      <Icon key={4}>star</Icon>,
      <Icon key={5}>star_half</Icon>,
    ],
    5: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star</Icon>,
      <Icon key={4}>star</Icon>,
      <Icon key={5}>star</Icon>,
    ],
  };

  return (
    <MDTypography variant="h4" color="text">
      {ratings[rating]}
    </MDTypography>
  );
}

// Typechecking props for the ReviewCell
ReviewCell.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default ReviewCell;
