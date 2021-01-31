// GRAPH1

h3 = document.querySelector('body h3')
h3.insertAdjacentHTML('afterend', '<canvas id="line-chart" width="800" height="450"></canvas>')

//création ligne des années
let dates = document.querySelectorAll('#table1 tbody tr')[0];
let labelsTableOne = [];
Array.from(dates.children).forEach(function(date){
	if (date.innerText.length > 0){
		labelsTableOne.push(parseInt(date.innerText));
	}
});

//création des datasets (pays, données, borderColor et false)

let datasetsTableOne = [];
let dataset = Array.from(document.querySelectorAll('#table1 tbody tr'));
dataset.shift()

dataset.forEach(function(datas){
	let object = {};
	let arData = [];
	let data = Array.from(datas.children);
	data.shift()
	data.shift()
	data.forEach(function(y){
		arData.push(parseInt(y.innerText));
	});
	object.data = arData;
	object.label = datas.children[1].innerText;
	object.borderColor = getRandomColor();
	object.fill = false;
	datasetsTableOne.push(object);
});

//creation random color

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

getRandomColor();

// CANVA CHARTJS GRAPH1

new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: labelsTableOne,
    datasets: datasetsTableOne },
  options: {
    title: {
      display: true,
      text: 'Country'
    }
  }
});


//GRAPH2

h4 = document.querySelector('body h4 #Homicides')
h4.insertAdjacentHTML('afterend', '<canvas id="bar-chart" width="800" height="450"></canvas>')

//création ligne des années
// let mois = document.querySelectorAll('#table2 thead tr');
// console.log(mois);
// let labelsTableTwo = [];
// Array.from(mois.children).forEach(function(date){
//   if (date.innerText.length > 0){
//     labelsTableTwo.push(parseInt(mois.innerText));
//   }
// });

//création des datasets (pays, données, borderColor et false)

// let datasetTwo = document.querySelectorAll('#table2 tbody')[0];
// console.log(datasetTwo);

// let labelsTableTwo = [];
// Array.from(datasetTwo.children).forEach(function(pays){
//   if (pays.innerText.length > 0){
//     labelsTableOne.push(parseInt(pays.innerText));
//   }
// });

//GRAPH2 CHARTJS

new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
});
