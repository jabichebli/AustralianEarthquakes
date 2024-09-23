var vg_1 = "json/bubble_plot.vg.json"; 
vegaEmbed("#bubble_plot", vg_1).then(function (result) { 
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view 
}).catch(console.error);

var vg_2 = "json/show_map.vg.json"; 
vegaEmbed("#show_map", vg_2).then(function (result) { 
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view 
}).catch(console.error);
