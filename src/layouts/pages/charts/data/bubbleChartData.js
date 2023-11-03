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

const bubbleChartData = {
  labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90"],
  datasets: [
    {
      label: "Dataset 1",
      color: "info",
      data: [
        { x: 100, y: 0, r: 10 },
        { x: 60, y: 30, r: 20 },
        { x: 40, y: 350, r: 10 },
        { x: 80, y: 80, r: 10 },
        { x: 20, y: 30, r: 15 },
        { x: 0, y: 100, r: 5 },
      ],
    },
    {
      label: "Dataset 2",
      color: "dark",
      data: [
        { x: 70, y: 40, r: 10 },
        { x: 30, y: 60, r: 20 },
        { x: 10, y: 300, r: 25 },
        { x: 60, y: 200, r: 10 },
        { x: 50, y: 300, r: 15 },
        { x: 20, y: 350, r: 5 },
      ],
    },
  ],
};

export default bubbleChartData;
