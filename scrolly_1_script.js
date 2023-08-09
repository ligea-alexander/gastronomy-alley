
/* Scrollytelling code goes under here */
// annotation is #little_caribbean1 #little_caribbean2 #little_caribbean3
d3.select("#little_caribbean1").classed("hidden", true);
d3.select("#little_caribbean2").classed("hidden", true);
d3.select("#little_caribbean3").classed("hidden", true);

d3.select("#step-one").on('stepin', function (e) {
    console.log("Got to step one");
    d3.select("#little_caribbean1").classed("hidden", false);
    d3.select("#little_caribbean2").classed("hidden", false);
    d3.select("#little_caribbean3").classed("hidden", false);
})

const scroller1 = scrollama();

scroller1
    .setup({
        step: "#scrolly1 .scrolly-overlay1 .step",
        offset: 0.75,
        debug: false
    })
    .onStepEnter(function ({ element, index, direction }) {
        const event = new CustomEvent('stepin', { detail: { direction: direction } })
        element.dispatchEvent(event);
    })
    .onStepExit(function ({ element, index, direction }) {
        const event = new CustomEvent('stepout', { detail: { direction: direction } })
        element.dispatchEvent(event);
    });

window.addEventListener("resize", scroller1.resize);