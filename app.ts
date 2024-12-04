import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import RevealMath from 'reveal.js/plugin/math/math.esm.js';
import { instance as vizInstance } from "@viz-js/viz";


vizInstance().then(viz => {
    const svg = viz.renderSVGElement(`
digraph {
  1 -> "+"
  2 -> "+"
  "+" -> "*"
  2 -> "*"
}`)
    document.getElementById("sdag-basic")!.appendChild(svg);
})

let deck = new Reveal({
    plugins: [Markdown, RevealMath.KaTeX],
});
deck.initialize();
