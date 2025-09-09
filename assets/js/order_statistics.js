const orderChartDiv = document.getElementById("orderChart").getContext("2d");
const orderChart = new Chart(orderChartDiv, {
  type: "bar",
  data: {
    labels: ["feb", "mar", "apr", "may", "jun", "jul"],
    datasets: [
      {
        label: "Total",
        data: [10, 20, 30, 40, 50, 60],
        backgroundColor: "rgba(79, 70, 229, 1)",
        borderColor: "rgba(79, 70, 229, 1)",
        borderWidth: 1,
        borderRadius: 4,
        barPercentage: 0.4,
      },
      {
        label: "Completed",
        data: [28, 62, 24, 6, 12, 28],
        backgroundColor: "rgba(56, 189, 248, 1)",
        borderColor: "rgba(56, 189, 248, 1)",
        borderWidth: 1,
        borderRadius: 4,
        barPercentage: 0.4,
      },

      {
        label: "Accepted",
        data: [20, 26, 33, 24, 20, 22],
        backgroundColor: "rgba(251, 146, 60, 1)",
        borderColor: "rgba(251, 146, 60, 1)",
        borderWidth: 1,
        borderRadius: 4,
        barPercentage: 0.4,
      },
      {
        label: "Rejected",
        data: [12, 33, 46, 33, 50, 12],
        backgroundColor: "rgba(59, 130, 246, 1)",
        borderColor: "rgba(59, 130, 246, 1)",
        borderWidth: 1,
        borderRadius: 4,
        barPercentage: 0.4,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 80,
        ticks: {
          stepSize: 20,
        },
        grid: {
          drawBorder: false,
          color: function (context) {
            if (context.tick.value === 0) {
              return "rgba(0, 0, 0, 0)";
            }
            return "rgba(200, 200, 200, 0.2)";
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  },
});
