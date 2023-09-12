let numbers = [],
  colors = [],
  colorsList = [
    "blue",
    "yellow",
    "crimson",
    "green",
    "red",
    "orange",
    "black",
    "cyan",
    "coral",
    "pink",
  ];

for (let i = 0; i < 50; i++) {
  numbers.push(Math.floor(Math.random() * 100));
  colors.push(i % 2 == 0 ? "purple" : "crimson");
}

let createBarGraph = (numbers, colors) => {
  new Chart(document.getElementById("sortingAlgorithmsChart"), {
    type: "bar",
    data: {
      labels: numbers,
      datasets: [
        {
          backgroundColor: colors,
          data: numbers,
        },
      ],
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: "Algorithm visualization",
      },
    },
  });
};

createBarGraph(numbers, colors);

let randomizeArray = () => {
  let selectedColor = colorsList[Math.floor(Math.random() * 10)];
  for (let i = 0; i < 50; i++) {
    numbers[i] = Math.floor(Math.random() * 100);
    colors[i] = selectedColor;
  }
  createBarGraph(numbers, colors);
};
