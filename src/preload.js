const cytoscape = require('cytoscape');
const { startSyntaxAnalyzer } = require('./events.js');

window.addEventListener('DOMContentLoaded', () => {
    const cyOptions = {
        name: 'breadthfirst',
        fit: true,
        directed: false,
        padding: 30,
        circle: false,
        grid: false,
        spacingFactor: 1.75,
        boundingBox: undefined,
        avoidOverlap: true,
        nodeDimensionsIncludeLabels: false,
        roots: undefined,
        depthSort: undefined,
        animate: false,
        animationDuration: 500,
        animationEasing: undefined,
        animateFilter: () => true,
        ready: undefined,
        stop: undefined,
        transform: (node, position) => position
    };

    const cy = cytoscape({
        container: document.getElementById('cy'),
        style: [
            {
                selector: 'node',
                style: {
                    'label': 'data(id)',
                    'text-valign': 'center',
                    'font-size': '11px',
                    'color': 'white'
                }
            },
        ],
    });

    const cyLayout = cy.layout(cyOptions);

    cyLayout.run();

    startSyntaxAnalyzer(cy, cyOptions);
});