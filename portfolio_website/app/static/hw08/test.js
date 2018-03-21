var w = 600, h = 400;
var svg = d3.select("#sketch-holder").append("svg")
	.attr("width", w)
	.attr("height", h)
	.attr("border", "1px solid")

var box1Group = svg.append("g")

var arc = d3.svg.arc()
	.outerRadius(100)
	.innerRadius(0)
	.startAngle(-Math.PI/2)
	.endAngle(Math.PI/2);

box1Group.append("path")
	.attr("d", arc)
	.attr("fill", "darkcyan")
	.attr("transform", "translate(100,100)");

//2. Drawing 180 deg (PI radians) arc
var box2Group = svg.append("g")

var arcData = [
	{"outerRad":100, "innerRad":0, "startAng": Math.PI/2, "endAng": -Math.PI/2, "col": "darkcyan"},
	{"outerRad":100, "innerRad":0, "startAng": -Math.PI/2, "endAng": -Math.PI, "col": "tomato"},
	{"outerRad":100, "innerRad":0, "startAng": -Math.PI, "endAng": -Math.PI*1.5, "col": "khaki"}];

var arc = d3.svg.arc()
	.outerRadius(function(d, i){return d.outerRad;})
	.innerRadius(function(d, i){return d.innerRad;})
	.startAngle(function(d, i){return d.startAng;})
	.endAngle(function(d, i){return d.endAng;});

//add path to box2Group
box2Group.selectAll("path")
	.data(arcData)
	.enter() //this actually does the binding
	.append("path")
	.attr("d", arc)
	.attr("fill", function(d){return d.col;})
	.attr("transform", "translate(300, 100)");

///3. donut -> pie chart based on single object
var donut1Group = svg.append("g")
	.attr("transform", "translate(500,100)");

var annualBudget = {
	"amount": [7500, 20000, 15000, 6200, 3600, 35000, 4500, 2000]};

var color = d3.scale.category20b();

//unsorted pie layout manager
var pie = d3.layout.pie()
	.sort(null);

//arc path for 3 donut charts
var arc = d3.svg.arc()
	.outerRadius(100)
	.innerRadius(70);

//link data to paths under donut1Group
var path = donut1Group.selectAll("path")
	.data(pie(annualBudget.amount))
	.enter()
	.append("path")
	.attr("fill", function(d, i) {return color(i); })
	.attr("d", arc);

//4. Donut chart based on array of objects
var donut2Group = svg.append("g")
	.attr("transform", "translate(100,300)");

var annualBudget = [
	{"category":"auto", "amount":7500, "colorCode":"#776622"},
	{"category":"home", "amount":20000, "colorCode":"#ffaa22"},
	{"category":"food", "amount":15000, "colorCode":"#aa00bb"},
	{"category":"utilities", "amount":6200, "colorCode":"#3344cc"},
	{"category":"entertainment", "amount":3600, "colorCode":"#ff2288"},
	{"category":"tuition", "amount":35000, "colorCode":"#006622"},
	{"category":"medical", "amount":4500, "colorCode":"#6688ff"},
	{"category":"pets", "amount":2000, "colorCode":"#222233"}
];

//update values in pie layout manager
pie = d3.layout.pie()
	.sort(null)
	//arc lengths in pie based on amount values
	//in annualBudget object array
	.value(function(d) {return d.amount;})
	//add space between wedges
	.padAngle(.04);

//link data to paths under donut2Group
path = donut2Group.selectAll("path")
	//call pie function to extract relevant data
	.data(pie(annualBudget))
	.enter()
	.append("path")
	.attr("d", arc)
	//fill with colorCode in object array
	.style("fill", function (d, i) {return d.data.colorCode;});

//5. adding a legend to donut chart
var donut3Group = svg.append("g")
	.attr("transform", "translate(300,300)");

var legendRectSize = 8;
var legendSpacing = 4;

//link data to paths under donut2Group
path = donut3Group.selectAll("path")
	//call pie function to extract relevant data
	.data(pie(annualBudget))
	.enter()
	.append("path")
	.attr("d", arc)
	//fill with colorCode in object array
	.style("fill", function(d, i){return d.data.colorCode;})

var legend = donut3Group.selectAll(".legend")
	.data(pie(annualBudget))
	.enter()
	.append("g")
	.attr('class', 'legend')
	.attr('transform', function(d, i) {
		var height = legendRectSize + legendSpacing;
		var offset = height * color.domain().length/2;
		var horz = -2*legendRectSize;
		var vert = i*height - offset;
		return 'translate(' + horz + ',' + vert + ')';
	})

legend.append("rect")
	.attr("width", legendRectSize)
	.attr("height", legendRectSize)
	.style("fill", function(d,i){return d.data.colorCode;})
	.style("stroke", function(d,i){return d.data.colorCode;});

legend.append("text")
	.attr("x", legendRectSize + legendSpacing)
	.attr("y", legendRectSize - legendSpacing + 4)
	.text(function(d){return d.data.category;});

//6 load data from .csv data and add some transitions
// asynchronous so requires callback
d3.csv("./static/hw08/budgetData.csv", function(error, annualBudget){
	annualBudget.forEach(function(d){
		d.amount = +d.amount; //casts to number
	});
	//alternative to forEach approach
	//d3.csv("budgetData.csv", function(data){
		//annualbudget = data.map(function(d) {return { category: d.category, amount: +d.amount, colorCode: d.colorCode}; });
	//});

	var donut3Group = svg.append("g")
		.attr("transform", "translate(500, 300)");

	pie.padAngle(.08);

	var arc = d3.svg.arc()
		.outerRadius(100)
		.innerRadius(80);

	//link data to paths under donut3Group
	path = donut3Group.selectAll("path")
		.data(pie(annualBudget))
		.enter()
		.append("path")
		.attr("d", arc)
		.style("fill", "#aaaaaa")
		.style("stroke", "#aaaaaa")
		.transition()
		.duration(1000)
		//fill with colorCode in object array
		.style("fill", function(d,i){
			return d.data.colorCode;})
		.transition()
		.duration(500)
		.style("stroke", "black")
		.style("stroke-width", 2);

	legendRectSize = 9;
	var legendSpacing = 8;

	legend = donut3Group.selectAll(".legend")
		.data(pie(annualBudget))
		.enter()
		.append("g")
		.attr("class", "legend2")
		.attr("transform", function (d,i){
			var height = legendRectSize + legendSpacing;
			var offset = height*color.domain().length/2;
			var horz = -2*legendRectSize;
			var vert = i*height - offset;
			return "translate(" + horz + "," + vert + ")";
		});

	legend.append("circle")
		.attr("r",0)
		.style("fill","none")
		.style("stroke","#aaaaaa")
		.transition()
		.duration(1500)
		.attr("r",5)
		//.style("fill","#dddddd")
		.attr("cx",-25)
		.attr("cy",28)
		.transition()
		.duration(1700)
		.attr("cx",-7)
		.style("stroke", function(d, i){
			return d.data.colorCode;})

	legend.append("text")
		.style('stroke','none')
		.style('fill', '#aaaaaa')
		.transition()
		.duration(5000)
		.style('fill', '#334433')
		//.style('stroke', '#334433')
		.attr('x', 3)
		.attr('y', 31)
		//.attr('fill', function(d){return d.data.colorCode;})
		.text(function(d) { return d.data.category;});
});

// add boxes around all examples
var offsets = [[0,0]];
var cols = 5, rows = 2;
var sz = 200;
for (var i = 0; i < cols; i++){
	for (var j = 0; j < rows; j++){
		offsets.push([i*sz, j*sz]);
	}
}

var outerBoxGroup = svg.append("g") //group boxes
outerBoxGroup.selectAll("rect")
	.data(offsets)
	.enter()
	.append("rect")
	.attr('height', 200)
	.attr('width', 200)
	.style('stroke', 'gray')
	.style('fill', 'none')
	.style('stroke-width', 2)
	.attr('transform', translate);

function translate(d){
	return 'translate(' + d[0] + ', ' + d[1] + ')';
}