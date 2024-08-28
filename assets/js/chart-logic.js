// Chart Data
const firstHalfBarsItemStyle = { color: "#5f89f0", borderColor: "#5f89f0" };
const team_chartData = {
  chartBarTitle: "Value: ",
  baselineBarTitle: "Baseline Title",
  barData: [
    { value: 80, itemStyle: firstHalfBarsItemStyle },
    { value: 100, itemStyle: firstHalfBarsItemStyle },
    { value: 130, itemStyle: firstHalfBarsItemStyle },
    { value: 190, itemStyle: firstHalfBarsItemStyle },
    { value: 260, itemStyle: firstHalfBarsItemStyle },
    { value: 220, itemStyle: firstHalfBarsItemStyle },
    { value: 300, itemStyle: firstHalfBarsItemStyle },
  ],
  labels: [
    "Jan 2024",
    "Feb 2024",
    "Mar 2024",
    "Apr 2024",
    "May 2024",
    "Jun 2024",
    "Jul 2024",
  ],
};

// Chart Functionalities
const chartElem = document.getElementById("chart");

let chartData = team_chartData;

let chart = echarts.init(chartElem, "light", {
  renderer: "svg",
  useDirtyRect: false,
});

let option = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
    formatter: function (params) {
      var content = "";
      params.forEach(function (param) {
        content += "<h1>" + param.value + "</h1>";
      });
      return content;
    },
  },
  legend: {
    show: false,
  },
  toolbox: {
    show: false,
  },
  xAxis: [
    {
      show: true,
      type: "category",
      axisLine: { show: true },
      splitLine: {
        show: false,
        lineStyle: {
          type: "dashed",
        },
      },
      axisTick: { show: true },
      axisLabel: {
        show: true,
        textStyle: {
          color: "black",
          fontSize: 24,
        },
      },
      interval: 1,

      data: chartData.labels,

      boundaryGap: true,
    },
    {
      show: false,
      splitLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false },
      type: "value",
      axisPointer: {
        show: false, // Disable hover effect on the x-axis
      },
      data: chartData.labels,
      boundaryGap: false,
    },
  ],
  yAxis: [
    {
      type: "value",
      splitLine: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      min: 0,
      axisTick: { show: false },
    },
  ],

  grid: {
    left: "0%",
    top: "10%",
    right: "0%",
    width: "100%",
    height: "89%",
    bottom: "0%",
    containLabel: true,
  },
  series: [
    {
      xAxisIndex: 0,
      name: chartData.chartBarTitle,
      type: "bar",
      barMaxWidth: 250,
      label: {
        show: false,
        fontSize: 24,
        position: "top",
        color: "#6C82FA",
      },
      itemStyle: {
        borderRadius: [4, 4, 0, 0],
      },

      data: chartData.barData,
    },
  ],
};

chart.setOption(option);
