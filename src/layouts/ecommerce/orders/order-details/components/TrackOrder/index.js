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

// Material Dashboard 2 PRO React examples
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <>
      <MDTypography variant="h6" fontWeight="medium">
        Track order
      </MDTypography>
      <MDBox mt={2}>
        <TimelineItem
          color="secondary"
          icon="notifications"
          title="Order received"
          dateTime="22 DEC 7:20 PM"
        />
        <TimelineItem
          color="secondary"
          icon="inventory_2"
          title="Generate order id #1832412"
          dateTime="22 DEC 7:21 AM"
        />
        <TimelineItem
          color="secondary"
          icon="shopping_cart"
          title="Order transmited to courier"
          dateTime="22 DEC 8:10 AM"
        />
        <TimelineItem
          color="success"
          icon="done"
          title="Order delivered"
          dateTime="22 DEC 4:54 PM"
          lastItem
        />
      </MDBox>
    </>
  );
}

export default OrdersOverview;
