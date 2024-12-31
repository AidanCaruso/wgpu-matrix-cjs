import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import fs from 'fs';

const pkg = JSON.parse(fs.readFileSync('package.json', {encoding: 'utf8'}));
const banner = `/* wgpu-matrix@${pkg.version}, license MIT */`;
const ver = `${/^(\d+)\./.exec(pkg.version)[1]}.x`;
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve';
import cleanupPlugin from 'rollup-plugin-cleanup';

export default [
    {
        input: 'src/wgpu-matrix.ts',
        output: [
            {
                name: 'wgpuMatrix',
                file: `dist/${ver}/wgpu-matrix.module.js`,
                format: 'es',
                banner
            },
        ],
        plugins: [
            nodeResolve(),
            typescript({ tsconfig: './tsconfig.json' }),
            commonjs(),
            cleanupPlugin()
        ],
    },
];
