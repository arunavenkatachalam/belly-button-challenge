# belly button challenge

## Deployed the app to the github pages - https://arunavenkatachalam.github.io/belly-button-challenge/

 # INTRODUCTION
 In this challenge, I have build an interactive dashboard to explore the Belly Button Biodiversity datasetLinks to an external site., which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

Steps to be followed:

1. Use the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

       a) Use sample_values as the values for the bar chart.

        b) Use otu_ids as the labels for the bar chart.

        c) Use otu_labels as the hovertext for the chart.
   
3. Create a bubble chart that displays each sample.

         a) Use otu_ids for the x values.

         b) Use sample_values for the y values.

         c) Use sample_values for the marker size.

          d) Use otu_ids for the marker colors.

          e) Use otu_labels for the text values.

4. Display the sample metadata, i.e., an individual's demographic information.

5. Display each key-value pair from the metadata JSON object somewhere on the page.

6. Update all the plots when a new sample is selected.

Note : Thanks to Deepali Patel for helping me to figure out the issue in displaying the Demographic Information






