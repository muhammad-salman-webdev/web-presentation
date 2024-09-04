const Chart_data = [
  {
    value: 70,
    year: 2018,
    popupTitle: "Ex-ML Researchers",
    popupDesc:
      "Founded by ex-ML researchers from Google, OpenAl, & U.S.Department",
  },
  {
    value: 80,
    year: 2019,
    popupTitle: "Ex-ML Researchers",
    popupDesc:
      "Founded by ex-ML researchers from Google, OpenAl, & U.S.Department",
  },
  {
    value: 90,
    year: 2020,
    popupTitle: "Ex-ML Researchers",
    popupDesc:
      "Founded by ex-ML researchers from Google, OpenAl, & U.S.Department",
  },
  {
    value: 100,
    year: 2021,
    popupTitle: "Ex-ML Researchers",
    popupDesc:
      "Founded by ex-ML researchers from Google, OpenAl, & U.S.Department",
  },
  {
    value: 110,
    year: 2022,
    popupTitle: "Ex-ML Researchers",
    popupDesc:
      "Founded by ex-ML researchers from Google, OpenAl, & U.S.Department",
  },
  {
    value: 120,
    year: 2023,
    popupTitle: "Ex-ML Researchers",
    popupDesc:
      "Founded by ex-ML researchers from Google, OpenAl, & U.S.Department",
  },
];

const chart = document.getElementById("chart");

//   Finding the highest value
const maxValue = Chart_data.reduce(
  (max, current) => (current.value > max ? current.value : max),
  Chart_data[0].value
);

Chart_data.forEach((itemData) => {
  const heightPer = (itemData.value / maxValue) * 100;
  const ItemHTML = `
              <div class="chart_item">
                <div class="item-body" style="--height:${heightPer}%;">
                  <div class="popup">
                    <h2>${itemData.popupTitle}</h2>
                    <p>
                      ${itemData.popupDesc}
                    </p>
                    <span class="gradient-color" >
                      ${itemData.value}%
                    </span>
                  </div> 
                  <div class="text">${itemData.year}</div>
                </div>
              </div>
  `;

  chart.innerHTML += ItemHTML;
});
