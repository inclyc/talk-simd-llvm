import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import RevealMath from 'reveal.js/plugin/math/math.esm.js';
import RevealHilight from 'reveal.js/plugin/highlight/highlight.esm';

import { instance as vizInstance } from "@viz-js/viz";


vizInstance().then(viz => {
    const elements = document.querySelectorAll('[data-viz]');

    elements.forEach((element) => {
        if (element.textContent) {
            const svg = viz.renderSVGElement(element.textContent);
            // Clear previous HTML content.
            element.innerHTML = "";
            // Replace it with rendered SVG.
            svg.setAttribute("width", "100%");
            svg.setAttribute("height", "auto");
            element.replaceWith(svg);
        }
    });
});

let deck = new Reveal({
    plugins: [Markdown, RevealMath.KaTeX, RevealHilight],
    hash: true,
});
deck.initialize();

// Adjust figure capitons.
const figcaptions = document.querySelectorAll('figcaption');

figcaptions.forEach(figcaption => {
    const span = document.createElement('span');
    span.classList.add('figure');
    span.textContent = `图：`;

    if (!figcaption.querySelector('span.figure')) {
        figcaption.prepend(span);
    }
});

// Adjust table captions

const tableCaptions = document.querySelectorAll('table>caption');

tableCaptions.forEach(caption => {
    const span = document.createElement('span');
    span.classList.add('tablecaption');
    span.textContent = `表：`;

    if (!caption.querySelector('span.tablecaption')) {
        caption.prepend(span);
    }
});


// Add the divier for containers.
const containers = document.querySelectorAll('.container');

containers.forEach(container => {
    const cols = container.querySelectorAll('.col');
    for (let i = 0; i < cols.length - 1; i++) {
        const divider = document.createElement('div');
        divider.classList.add('divider');
        cols[i].parentNode?.insertBefore(divider, cols[i].nextSibling);
    }
})

