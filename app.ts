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
