import external from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'

export default [{
  input: 'index.js',
  output: [
    {
      file: 'dist/index-cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/index-esm.js',
      format: 'esm'
    }
  ],
  plugins: [
    external(),
    resolve()
  ]
}];
