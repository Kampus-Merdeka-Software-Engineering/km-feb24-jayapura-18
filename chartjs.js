document.addEventListener('DOMContentLoaded', () => {
  fetch('daily_2.json')
      .then(response => response.json())
      .then(data => {
          window.chartData = data; // Store data globally
          createLineChart(data, 'total_price'); // Create line chart with all data initially using total_price
          updateBarChart(); // Create bar chart with initial settings
          addEventListeners(); // Add event listeners for dropdowns
      })
      .catch(error => console.error('Error loading the JSON data:', error));
});

let myLineChart;
let myBarChart;

function createLineChart(data, valueKey) {
  const ctx = document.getElementById('lineChart').getContext('2d');
  const formattedData = formatLineChartData(data, valueKey);

  const config = {
      type: 'line',
      data: formattedData,
      options: {
          responsive: true,
          scales: {
              x: {
                  type: 'time',
                  time: {
                      unit: 'day'
                  },
                  title: {
                      display: true,
                      text: 'Date'
                  }
              },
              y: {
                  title: {
                      display: true,
                      text: 'Value'
                  }
              }
          }
      }
  };

  if (myLineChart) {
      myLineChart.destroy();
  }

  myLineChart = new Chart(ctx, config);
}

function formatLineChartData(data, valueKey) {
  const locationColors = {
      "Astoria": "red",
      "Lower Manhattan": "yellow",
      "Hell\u0027s Kitchen": "skyblue"
  };

  const locations = Object.keys(locationColors);
  const datasets = locations.map(location => {
      const locationData = data.filter(item => item.location === location);
      return {
          label: location,
          data: locationData.map(item => ({
              x: new Date(item.ts_date),
              y: parseFloat(item[valueKey])
          })),
          borderColor: locationColors[location],
          backgroundColor: locationColors[location],
          fill: false
      };
  });

  return {
      datasets: datasets
  };
}

function filterDataByMonth() {
  const month = document.getElementById('monthSelect').value;
  const valueKey = document.getElementById('valueSelect').value;
  let filteredData;

  if (month === 'all') {
      filteredData = window.chartData;
  } else {
      filteredData = window.chartData.filter(item => {
          const itemMonth = new Date(item.ts_date).getMonth() + 1; // getMonth() is zero-based
          return itemMonth === parseInt(month);
      });
  }

  createLineChart(filteredData, valueKey);
}

function updateBarChart() {
  const valueKey = document.getElementById('barValueSelect').value;
  const month = document.getElementById('barMonthSelect').value;
  let filteredData = window.chartData;

  if (month !== 'all') {
      filteredData = filteredData.filter(item => {
          const itemMonth = new Date(item.ts_date).getMonth() + 1; // getMonth() is zero-based
          return itemMonth === parseInt(month);
      });
  }

  createBarChart(filteredData, valueKey);
}

function createBarChart(data, valueKey) {
  const ctx = document.getElementById('barChart').getContext('2d');
  const formattedData = formatBarChartData(data, valueKey);

  const config = {
      type: 'bar',
      data: formattedData,
      options: {
          responsive: true,
          scales: {
              x: {
                  title: {
                      display: true,
                      text: 'Month'
                  }
              },
              y: {
                  title: {
                      display: true,
                      text: 'Value'
                  }
              }
          }
      }
  };

  if (myBarChart) {
      myBarChart.destroy();
  }

  myBarChart = new Chart(ctx, config);
}

function formatBarChartData(data, valueKey) {
  const locationColors = {
      "Astoria": "red",
      "Lower Manhattan": "yellow",
      "Hell\u0027s Kitchen": "skyblue"
  };

  const months = ["January", "February", "March", "April", "May", "June"];
  const locations = Object.keys(locationColors);
  const datasets = locations.map(location => {
      return {
          label: location,
          data: months.map((month, index) => {
              const monthData = data.filter(item => {
                  const itemMonth = new Date(item.ts_date).getMonth();
                  return itemMonth === index && item.location === location;
              });
              const sumValue = monthData.reduce((sum, item) => sum + parseFloat(item[valueKey]), 0);
              return sumValue;
          }),
          backgroundColor: locationColors[location]
      };
  });

  return {
      labels: months,
      datasets: datasets
  };
}

function addEventListeners() {
  document.getElementById('monthSelect').addEventListener('change', filterDataByMonth);
  document.getElementById('valueSelect').addEventListener('change', filterDataByMonth);
  document.getElementById('barMonthSelect').addEventListener('change', updateBarChart);
  document.getElementById('barValueSelect').addEventListener('change', updateBarChart);
}



// category location

document.addEventListener('DOMContentLoaded', () => {
  fetch('category_location.json')
      .then(response => response.json())
      .then(data => createChart(data))
      .catch(error => console.error('Error loading JSON data:', error));
});

function createChart(data) {
  const ctx25 = document.getElementById('stackedBarChartcategoru').getContext('2d');

  const locations = [...new Set(data.map(item => item.location))];
  const categories = [...new Set(data.map(item => item.category))];
  const colors = ['rgba(255, 99, 132, 0.7)', 'rgba(54, 162, 235, 0.7)', 'rgba(75, 192, 192, 0.7)', 'rgba(153, 102, 255, 0.7)'];
  const borderColors = ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'];

  let currentData = 'total_order';

  const datasets = categories.map((category, index) => {
      return {
          label: category,
          data: locations.map(location => {
              const items = data.filter(d => d.location === location && d.category === category);
              const sum = items.reduce((acc, curr) => acc + parseFloat(curr[currentData]), 0);
              return sum;
          }),
          backgroundColor: colors[index % colors.length],
          borderColor: borderColors[index % borderColors.length],
          borderWidth: 1
      };
  });

  const chart = new Chart(ctx25, {
      type: 'bar',
      data: {
          labels: locations,
          datasets: datasets
      },
      options: {
        indexAxis: 'y',
          scales: {
              x: {
                  stacked: true,
                  title: {
                      display: true,
                      text: 'Store Locations'
                  }
              },
              y: {
                  stacked: true,
                  title: {
                      display: true,
                      text: 'Total Orders'
                  }
              }
          }
      }
  });

  const dataSelector = document.getElementById('dataSelector');
  dataSelector.addEventListener('change', (event) => {
      currentData = event.target.value;
      chart.data.datasets.forEach(dataset => {
          dataset.data = locations.map(location => {
              const items = data.filter(d => d.location === location && d.category === dataset.label);
              const sum = items.reduce((acc, curr) => acc + parseFloat(curr[currentData]), 0);
              return sum;
          });
      });
      chart.options.scales.y.title.text = currentData === 'total_order' ? 'Total Orders' : currentData === 'aov' ? 'Average Order Value' : 'Total Quantity';
      chart.update();
  });
}


// category price
document.addEventListener('DOMContentLoaded', () => {
  fetch('category_price.json')
      .then(response => response.json())
      .then(data => createChartprice2(data))
      .catch(error => console.error('Error loading JSON data:', error));
});

function createChartprice2(data) {
  const ctx25 = document.getElementById('stackedBarChartprice_item').getContext('2d');

  const locations = [...new Set(data.map(item => item.price_category))];
  const categories = [...new Set(data.map(item => item.category))];
  const colors = ['rgba(255, 99, 132, 0.7)', 'rgba(54, 162, 235, 0.7)', 'rgba(75, 192, 192, 0.7)', 'rgba(153, 102, 255, 0.7)'];
  const borderColors = ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'];

  let currentData = 'total_order';

  const datasets = categories.map((category, index) => {
      return {
          label: category,
          data: locations.map(price_category => {
              const items = data.filter(d => d.price_category === price_category && d.category === category);
              const sum = items.reduce((acc, curr) => acc + parseFloat(curr[currentData]), 0);
              return sum;
          }),
          backgroundColor: colors[index % colors.length],
          borderColor: borderColors[index % borderColors.length],
          borderWidth: 1
      };
  });

  const chart = new Chart(ctx25, {
      type: 'bar',
      data: {
          labels: locations,
          datasets: datasets
      },
      options: {
        indexAxis: 'y',
          scales: {
              x: {
                  stacked: true,
                  title: {
                      display: true,
                      text: 'Store Locations'
                  }
              },
              y: {
                  stacked: true,
                  title: {
                      display: true,
                      text: 'Total Orders'
                  }
              }
          }
      }
  });

  const dataSelector = document.getElementById('dataSelector2');
  dataSelector.addEventListener('change', (event) => {
      currentData = event.target.value;
      chart.data.datasets.forEach(dataset => {
          dataset.data = locations.map(price_category => {
              const items = data.filter(d => d.price_category === price_category && d.category === dataset.label);
              const sum = items.reduce((acc, curr) => acc + parseFloat(curr[currentData]), 0);
              return sum;
          });
      });
      chart.options.scales.y.title.text = currentData === 'total_order' ? 'Total Orders' : currentData === 'aov' ? 'Average Order Value' : 'Total Quantity';
      chart.update();
  });
}


// Price Location

document.addEventListener('DOMContentLoaded', () => {
  fetch('location_price.json')
      .then(response => response.json())
      .then(data => createChartprice3(data))
      .catch(error => console.error('Error loading JSON data:', error));
});

function createChartprice3(data) {
  const ctx27 = document.getElementById('stackbarpriceloc').getContext('2d');

  const locations = [...new Set(data.map(item => item.location))];
  const categories = [...new Set(data.map(item => item.price_category))];
  const colors = ['rgba(255, 99, 132, 0.7)', 'rgba(54, 162, 235, 0.7)', 'rgba(75, 192, 192, 0.7)', 'rgba(153, 102, 255, 0.7)'];
  const borderColors = ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'];

  let currentData = 'total_order';

  const datasets = categories.map((price_category, index) => {
      return {
          label: price_category,
          data: locations.map(location => {
              const items = data.filter(d => d.location === location && d.price_category === price_category);
              const sum = items.reduce((acc, curr) => acc + parseFloat(curr[currentData]), 0);
              return sum;
          }),
          backgroundColor: colors[index % colors.length],
          borderColor: borderColors[index % borderColors.length],
          borderWidth: 1
      };
  });

  const chart = new Chart(ctx27, {
      type: 'bar',
      data: {
          labels: locations,
          datasets: datasets
      },
      options: {
        indexAxis: 'y',
          scales: {
              x: {
                  stacked: true,
                  title: {
                      display: true,
                      text: 'Store Locations'
                  }
              },
              y: {
                  stacked: true,
                  title: {
                      display: true,
                      text: 'Total Orders'
                  }
              }
          }
      }
  });

  const dataSelector = document.getElementById('dataSelector3');
  dataSelector.addEventListener('change', (event) => {
      currentData = event.target.value;
      chart.data.datasets.forEach(dataset => {
          dataset.data = locations.map(location => {
              const items = data.filter(d => d.location === location && d.price_category === dataset.label);
              const sum = items.reduce((acc, curr) => acc + parseFloat(curr[currentData]), 0);
              return sum;
          });
      });
      chart.options.scales.y.title.text = currentData === 'total_order' ? 'Total Orders' : currentData === 'aov' ? 'Average Order Value' : 'Total Quantity';
      chart.update();
  });
}



