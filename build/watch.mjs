import * as esbuild from 'esbuild';
import { config } from './config.mjs';


const ctx = await esbuild.context(config);
ctx.watch();
