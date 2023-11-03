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
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React context
import { useMaterialUIController } from "context";

function ControllerCard({ color, state, icon, title, description, onChange }) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <Card sx={{ height: "100%", overflow: "hidden" }}>
      <MDBox
        p={3}
        height="100%"
        bgColor={state ? color : "white"}
        variant="gradient"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        sx={({ palette: { background } }) => ({
          background: darkMode && !state && background.card,
        })}
      >
        <MDBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
          lineHeight={1}
        >
          <MDTypography variant="body2" color={state ? "white" : "text"}>
            {state ? "On" : "Off"}
          </MDTypography>
          <MDBox mt={-0.5} mr={-1.5}>
            <Switch checked={state} onChange={onChange} />
          </MDBox>
        </MDBox>
        {icon}
        <MDBox mt={1} lineHeight={1}>
          <MDTypography variant="body2" color={state ? "white" : "text"} textTransform="capitalize">
            {title}
          </MDTypography>
          {description ? (
            <MDTypography variant="caption" color={state ? "white" : "text"}>
              {description}
            </MDTypography>
          ) : null}
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of ControllerCard
ControllerCard.defaultProps = {
  color: "info",
  state: false,
  description: "",
};

// Typechecking props for the ControllerCard
ControllerCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  state: PropTypes.bool,
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default ControllerCard;
