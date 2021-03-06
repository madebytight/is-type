import babel from 'rollup-plugin-babel';

export default [
  {
    input: 'lib/index.js',
    output: [
      {
        file: 'dist/index.cjs.js',
        format: 'cjs'
      },
      {
        file: 'dist/index.esm.js',
        format: 'esm'
      }
    ],
    plugins: [
      babel({
        exclude: 'node_modules/**'
      })
    ]
  }
];
