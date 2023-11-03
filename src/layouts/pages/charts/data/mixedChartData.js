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

const mixedChartData = {
  labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      chartType: "thin-bar",
      label: "Organic Search",
      color: "dark",
      data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
    },
    {
      chartType: "gradient-line",
      label: "Referral",
      color: "info",
      data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
    },
  ],
};

export default mixedChartData;
