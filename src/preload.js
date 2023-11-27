/* eslint-disable no-unused-vars */
const cytoscape = require('cytoscape');
const spread = require('cytoscape-spread');
const { startSyntaxAnalyzer } = require('./events.js');

spread(cytoscape);

window.addEventListener('DOMContentLoaded', () => {
    const { EditorState } = require('@codemirror/state');
    const { EditorView, keymap, lineNumbers } = require('@codemirror/view');
    const { defaultKeymap } = require('@codemirror/commands');
    const { oneDarkTheme } = require('@codemirror/theme-one-dark');

    const cyOptions = {
        name: 'cose',

        // Called on `layoutready`
        ready: function () { },

        // Called on `layoutstop`
        stop: function () { },

        // Whether to animate while running the layout
        // true : Animate continuously as the layout is running
        // false : Just show the end result
        // 'end' : Animate with the end result, from the initial positions
        //to the end positions
        animate: true,

        // Easing of the animation for animate:'end'
        animationEasing: undefined,

        // The duration of the animation for animate:'end'
        animationDuration: undefined,

        // A function that determines whether the node should be animated
        // All nodes animated by default on animate enabled
        // Non-animated nodes are positioned immediately when the layout starts
        animateFilter: function () { return true; },


        // The layout animates only after this many milliseconds
        //for animate:true
        // (prevents flashing on fast runs)
        animationThreshold: 250,

        // Number of iterations between consecutive screen positions update
        refresh: 20,

        // Whether to fit the network view after when done
        fit: true,

        // Padding on fit
        padding: 30,

        // Constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
        boundingBox: undefined,

        // Excludes the label when calculating node bounding boxes
        //for the layout algorithm
        nodeDimensionsIncludeLabels: false,

        // Randomize the initial positions of the nodes (true) or
        //use existing positions (false)
        randomize: false,

        // Extra spacing between components in non-compound graphs
        componentSpacing: 40,

        // Node repulsion (non overlapping) multiplier
        nodeRepulsion: function () { return 2048; },

        // Node repulsion (overlapping) multiplier
        nodeOverlap: 4,

        // Ideal edge (non nested) length
        idealEdgeLength: function () { return 32; },

        // Divisor to compute edge forces
        edgeElasticity: function () { return 32; },

        // Nesting factor (multiplier) to compute ideal
        //edge length for nested edges
        nestingFactor: 1.2,

        // Gravity force (constant)
        gravity: 1,

        // Maximum number of iterations to perform
        numIter: 1000,

        // Initial temperature (maximum node displacement)
        initialTemp: 1000,

        // Cooling factor (how the temperature is reduced between
        //consecutive iterations
        coolingFactor: 0.99,

        // Lower temperature threshold (below this point the layout will end)
        minTemp: 1.0
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

    // startSyntaxAnalyzer(cy, cyOptions);


    const myTheme = EditorView.theme({
        '&': {
            color: 'white',
            backgroundColor: '#23272e',
            padding: '10px',
            width: '95%',
            height: '90%',
        },
        '.cm-content': {
            caretColor: '#0e9',
            backgroundColor: '#23272e'
        },
        '&.cm-focused .cm-cursor': {
            borderLeftColor: '#0e9'
        },
        '&.cm-focused .cm-selectionBackground, ::selection': {
            backgroundColor: '#074'
        },
        '.cm-gutters': {
            backgroundColor: '#23272e',
            color: '#ddd',
            'border-right': '1px solid #404040'
        },
        '.cm-gutterElement': {
            'text-align': 'center !important'
        }
    }, { dark: true });

    const startState = EditorState.create({
        doc: 'Hello World',
        extensions: [
            keymap.of(defaultKeymap),
            lineNumbers(),
            // oneDarkTheme,
            myTheme

        ]
    });

    const view = new EditorView({
        state: startState,
        parent: document.getElementById('input-text')
    });

    console.log(view);
});