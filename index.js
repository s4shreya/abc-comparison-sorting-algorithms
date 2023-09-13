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
let barThickness = 1;

// Creating initial array with random numbers from 0 to 99
for (let i = 0; i < 50; i++) {
  numbers.push(Math.floor(Math.random() * 100));
  colors.push(i % 2 == 0 ? "purple" : "crimson");
}

// Function to create Bar graph on webpage
let createBarGraph = (numbers, colors, barThickness = 1) => {
  console.log("bar thickness is", barThickness);
  new Chart(document.getElementById("sortingAlgorithmsChart"), {
    type: "bar",
    data: {
      labels: numbers,
      datasets: [
        {
          backgroundColor: colors,
          data: numbers,
          borderColor: "black",
          borderWidth: 1,
        },
      ],
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: "Algorithm visualization",
      },
      scales: {
        xAxes: [{
          maxBarThickness: 100,
          barPercentage: barThickness
        }]
      }
    },
  });
};

// Randomly selects color from the list of colors
let selectColor = (c) => colorsList[c];

// Creates initial Bar graph
createBarGraph(numbers, colors, barThickness);

// Function to randomize array and then create Bar graph of that array
let randomizeArray = () => {
  for (let i = 0; i < 50; i++) numbers[i] = Math.floor(Math.random() * 100);
  createBarGraph(numbers, selectColor(Math.floor(Math.random() * 10)), barThickness);
};

// Performs insertion sort on the array and draws its respective Bar graph
let insertionSort = () => {
  let element, j;
  for (let i = 1; i < numbers.length; i++) {
    element = numbers[i];
    j = i - 1;
    while (j >= 0 && numbers[j] > element) {
      numbers[j + 1] = numbers[j];
      j = j - 1;
    }
    numbers[j + 1] = element;
  }
  createBarGraph(numbers, selectColor(Math.floor(Math.random() * 10)), barThickness);
};

// Performs Selection sort on the array and draws its respective Bar graph
let selectionSort = () => {
  let min_index, temp;
  for (let i = 0; i < numbers.length - 1; i++) {
    min_index = i;
    for (let j = i + 1; j < numbers.length; j++)
      if (numbers[j] < numbers[min_index]) min_index = j;
    temp = numbers[min_index];
    numbers[min_index] = numbers[i];
    numbers[i] = temp;
  }
  createBarGraph(numbers, selectColor(Math.floor(Math.random() * 10)), barThickness);
};

// Performs Bubble sort on the array and draws its respective Bar graph
let bubbleSort = () => {
  let temp;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - i - 1; j++) {
      if (numbers[j] > numbers[j + 1]) {
        temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }
  createBarGraph(numbers, selectColor(Math.floor(Math.random() * 10)), barThickness);
};

// Performs Quick sort on the array and draws its respective Bar graph
let quickSortRecursive = (numbers) => {
  if (numbers.length <= 1) return numbers;
  let pivot = numbers[0],
    left = [],
    right = [];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < pivot) {
      left.push(numbers[i]);
    } else {
      right.push(numbers[i]);
    }
  }
  return [...quickSortRecursive(left), pivot, ...quickSortRecursive(right)];
};

let quickSort = () => {
  numbers = quickSortRecursive(numbers);
  createBarGraph(numbers, selectColor(Math.floor(Math.random() * 10)), barThickness);
};

// Performs Merge sort on the array and draws its respective Bar graph
let mergeArrays = (left, right) => {
  let arr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  return [...arr, ...left, ...right];
};

let merge_sort = (nums) => {
  const mid = nums.length / 2;
  if (nums.length < 2) {
    return nums;
  }
  const left = nums.splice(0, mid);
  return mergeArrays(merge_sort(left), merge_sort(nums));
};

let mergeSort = () => {
  numbers = merge_sort(numbers);
  createBarGraph(numbers, selectColor(Math.floor(Math.random() * 10)), barThickness);
};

// Performs Shell sort on the array and draws its respective Bar graph
let shellSort = () => {
  for (
    let gap = Math.floor(numbers.length / 2);
    gap > 0;
    gap = Math.floor(gap / 2)
  ) {
    for (let i = gap; i < numbers.length; i++) {
      let temp = numbers[i],
        j;
      for (j = i; j >= gap && numbers[j - gap] > temp; j -= gap)
        numbers[j] = numbers[j - gap];
      numbers[j] = temp;
    }
  }
  createBarGraph(numbers, selectColor(Math.floor(Math.random() * 10)), barThickness);
};

// Changes size of the bar by decreasing the bar thickness and draws its respective Bar graph
let shrinkSize = () => {
  barThickness = barThickness < 0.3 ? 0.01 : barThickness - 0.3;
  createBarGraph(numbers, selectColor(Math.floor(Math.random() * 10)), barThickness);
};

// Changes size of the bar by increasing the bar thickness and draws its respective Bar graph
let growSize = () => {
  barThickness += 0.3;
  createBarGraph(numbers, selectColor(Math.floor(Math.random() * 10)), barThickness);
};