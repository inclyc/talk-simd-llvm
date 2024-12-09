import * as esbuild from "esbuild";
import * as gulp from "gulp";

const esbuildEntrypoints = ['app.ts', 'style.css'];
const assetPaths = ["images/**/*", "index.html"];
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

export async function copyAssets() {
    return gulp
        .src(assetPaths, {
            base: '.',
            encoding: false,
        })
        .pipe(gulp.dest(outdir));
}

export const build = gulp.parallel(bundle, copyAssets);

export async function watch() {
    await build();
    gulp.watch(esbuildConfig.entryPoints, gulp.series(bundle));
    gulp.watch(assetPaths, gulp.series(copyAssets));
}
