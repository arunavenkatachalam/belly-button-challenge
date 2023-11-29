// Use the D3 library to read in samples.json from the URL
d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json")
.then(function(data) {
    // Create dropdown options
    var dropdown = d3.select("#selDataset");

    data.names.forEach(function(name) {
      dropdown.append("option").text(name).property("value", name);
    });
 

    // Initial chart
    updateChartAndMetadata(data.names[0]);

    // Dropdown change event listener
    dropdown.on("change", function() {
      var selectedValue = dropdown.property("value");
      updateChartAndMetadata(selectedValue);
      displayMetadata(selectedValue)       
      optionChanged(selectedValue);
    });
  

    // Function to update the chart based on selected individual
    function updateChartAndMetadata(selectedName) {
      var selectedData = data.samples.find(sample => sample.id === selectedName);
      var sampledata = data.metadata.find(item => item.id === selectedName);

      // Update Barchart
      updateBarchart(selectedData);

      // Update Bubblechart
      updateBubblechart(selectedData);

      // Display Metadata
      displayMetadata(sampledata);
    }

    //Create a horizontal bar chart with a dropdown menu to display 
    //the top 10 OTUs found in that individual sample
      function updateBarchart(selectedData){
        var sortedData = selectedData.sample_values.slice(0, 10).reverse();
        var topOTUIds = selectedData.otu_ids.slice(0, 10).reverse();
        var topOTULabels = selectedData.otu_labels.slice(0, 10).reverse();

      // Create horizontal bar chart
      var trace = {
        type: "bar",
        x: sortedData,
        y: topOTUIds.map(id => `OTU ${id}`),
        text: topOTULabels,
        orientation: "h"
      };

      var layout = {
        title: `Top 10 OTUs for ${selectedData.id}`,
        xaxis: { title: "Sample Values" },
        yaxis: { title: "OTU IDs" }
      };

      Plotly.newPlot("bar", [trace], layout);
    }

    // Create a bubble chart that displays each sample
    function updateBubblechart(selectedData){
      var trace = {
        x: selectedData.otu_ids,
        y: selectedData.sample_values,
        text: selectedData.otu_labels,
        mode: 'markers',
        marker: {
          size: selectedData.sample_values,
          color: selectedData.otu_ids,
          colorscale: 'Viridis'
        }
      };

      var layout = {
        title: `Bubble Chart for ${selectedData.id}`,
        xaxis: { title: "OTU IDs" }, 
        yaxis: { title: "Sample Values" }
      };

      Plotly.newPlot("bubble", [trace], layout);
    }

    //Display the sample metadata, i.e., an individual's demographic information
    function displayMetadata(sampledata) {
      var metadata = data.metadata;
      var Demo_info = metadata.filter(item => item.id == sampledata);
      var Demographic_info = Demo_info[0];
      var MetaData = d3.select("#sample-metadata");
      MetaData.html("");
      
      for (i in Demographic_info){
        MetaData.append("h6").text(`${i}: ${Demographic_info[i]}`);
      };
  }

  function init() {
    // Grab a reference to the dropdown select element
    let selector = d3.select("#selDataset");
  
    // Use the list of sample names to populate the select options
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
      let sampleNames = data.names;
  
      for (let i = 0; i < sampleNames.length; i++){
        selector
          .append("option")
          .text(sampleNames[i])
          .property("value", sampleNames[i]);
      };
  
      // Use the first sample from the list to build the initial plots
      let firstSample = sampleNames[0];
      //buildCharts(firstSample);
      displayMetadata(firstSample);
    });
  }

  function optionChanged(selectedValue) {
    // Fetch new data each time a new sample is selected
    updateBarchart(selectedValue);
    updateBubblechart(selectedValue);
    displayMetadata(selectedValue);
  }

  // Initialize the dashboard
  init();

  }) 


 
 