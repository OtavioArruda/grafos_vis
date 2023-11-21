const cytoscape = require('cytoscape');

window.addEventListener('DOMContentLoaded', () => {
    const conatinerCy = document.getElementById('cy');

    console.log(conatinerCy);

    cytoscape({
        container: conatinerCy,

        elements: [
            {
                data: { id: 'a' }
            },
            {
                data: { id: 'b' }
            },
            {
                data: { id: 'ab', source: 'a', target: 'b' }
            }
        ]
    });
});