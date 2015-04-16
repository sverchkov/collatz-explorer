///////////////
// Functions //
///////////////

// Redraw loop
function redraw(numbers){

	// Circles
	svg.selectAll("circle").data(numbers).enter().append("circle")
		.attr("fill","none")
		.attr("stroke","black")
		.attr("stroke-width",4)
		.attr("r",20)
		.attr("cx", function(d) { return d.cx; })
		.attr("cy", function(d) { return d.cy; });

	// Labels
	svg.selectAll("text").data(numbers).enter().append("text")
		.text(function(d) { return d.n; })
		.attr("x", function(d) { return d.cx; })
		.attr("y", function(d) { return d.cy; })
		.attr("font-family", "sans-serif")
		.attr("font-size", "11px")
		.attr("fill", "red");
}

// Discover new
function discover(numbers, n){
	//todo
}

///////////////////
// Initial setup //
///////////////////

// SVG setup
var width = 500;
var height = 500;
var svg = d3.select("#contentpane").append("svg:svg")
	.attr("width", width).attr("height", height);

// Data structure for numbers discovered
var numbers = [{n:1, cx:width/2,cy:height*0.75,arcsFrom:[]}];

// Run
redraw( numbers );
