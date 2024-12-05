export const config = {
    entryPoints: ['./app.ts', './style.css'],
    minify: true,
    outdir: "out",
    sourcemap: true,
    loader: {
        ".ttf": "copy",
        ".eot": "copy",
        ".woff": "copy",
    },
    bundle: true,
};
