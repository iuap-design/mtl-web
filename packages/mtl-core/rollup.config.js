// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

import pkg from './package.json'

export default {
  input: 'lib/index.js',
  output: {
    file: 'dist/mtl-core.js',
    format: 'umd',
    name: 'MTLCore',
    globals: {
      react: 'React',
      axios: 'axios',
      'mini-store': 'miniStore',
      'tinper-bee': 'TinperBee'
    }
  },
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ],
  plugins: [
    resolve(),

    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**' // only transpile our source code
    }),
    commonjs()
  ]
};