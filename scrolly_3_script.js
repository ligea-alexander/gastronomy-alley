// Scrollama 3 - Gastro Boundary
// annotation is #gastro_labels
d3.select("#gastro_labels").classed("hidden", true);

d3.select("#step-three").on('stepin', function (e) {
    console.log("You're at gastro alley");
    d3.select("#gastro_labels").classed("hidden", false);
})

const scroller3 = scrollama();

scroller3
    .setup({
        step: "#scrolly3 .scrolly-overlay3 .step",
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

window.addEventListener("resize", scroller3.resize);