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
import MDBox from "components/MDBox";
import MDBadge from "components/MDBadge";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Custom styles for the Card

function Card({ image, badge, content, progress, attachedFiles, members }) {
  const renderMembers = members.map((member, key) => {
    const imageAlt = `image-${key}`;

    return (
      <MDAvatar
        key={imageAlt}
        src={member}
        alt={imageAlt}
        size="xs"
        sx={{
          border: ({ borders: { borderWidth }, palette: { white } }) =>
            `${borderWidth[2]} solid ${white.main}`,
          cursor: "pointer",
          position: "relative",
          ml: -1,
          mr: 0,

          "&:hover, &:focus": {
            zIndex: "10",
          },
        }}
      />
    );
  });

  return (
    <>
      {image && <MDBox component="img" src={image} width="100%" borderRadius="lg" mb={1} />}
      <MDBadge size="xs" color={badge.color} badgeContent={badge.label} container />
      <MDBox mt={1} mb={2}>
        <MDTypography variant="body2" color="text">
          {content}
        </MDTypography>
        {progress > 0 && (
          <MDBox mt={0.25}>
            <MDProgress variant="gradient" value={progress} color={badge.color} />
          </MDBox>
        )}
      </MDBox>
      <MDBox display="flex" justifyContent="space-between" alignItems="center">
        <MDBox display="flex" alignItems="center" color="text">
          {attachedFiles && (
            <>
              <MDTypography variant="body2" color="text" sx={{ lineHeight: 0 }}>
                <Icon sx={{ fontWeight: "bold" }}>attach_file</Icon>
              </MDTypography>
              <MDTypography variant="button" fontWeight="regular" color="text">
                &nbsp;{attachedFiles}
              </MDTypography>
            </>
          )}
        </MDBox>
        <MDBox display="flex">{renderMembers}</MDBox>
      </MDBox>
    </>
  );
}

// Setting default props for the Card
Card.defaultProps = {
  image: "",
  progress: 0,
  attachedFiles: "",
};

// Typechecking props for the Card
Card.propTypes = {
  image: PropTypes.string,
  badge: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
    ]).isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  content: PropTypes.node.isRequired,
  progress: PropTypes.number,
  attachedFiles: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  members: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Card;
