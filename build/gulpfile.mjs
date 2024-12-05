import * as esbuild from "esbuild";
import * as gulp from "gulp";

const esbuildEntrypoints = ['app.ts', 'style.css'];

const outdir = "out";

const esbuildConfig = {
    entryPoints: esbuildEntrypoints,
    minify: true,
    outdir,
    sourcemap: true,
    loader: {
        ".ttf": "copy",
        ".eot": "copy",
        ".woff": "copy",
    },
    bundle: true,
};

export async function bundle() {
    await esbuild.build(esbuildConfig);
}

export async function watch() {
    await bundle();

    gulp.watch(esbuildConfig.entryPoints, gulp.series(bundle));
}
