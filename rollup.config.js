import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

const minify = !!process.env.MINIFY

export default {
  entry: 'src/index.js',
  moduleName: 'preactGlam',
  useStrict: false,
  sourceMap: minify,
  external: ['preact', 'glamor'],
  globals: {
    preact: 'preact',
    glamor: 'Glamor'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      babelrc: false,
      presets: [
        [
          'env',
          {
            modules: false
          }
        ]
      ],
      plugins: [
        [
          'transform-react-jsx',
          {
            pragma: 'h'
          }
        ],
        'transform-object-rest-spread'
      ]
    }),
    minify ? uglify() : {}
  ],
  targets: minify
    ? [
      {
        dest: 'dist/preact-glam.umd.min.js',
        format: 'umd'
      },
      {
        dest: 'dist/preact-glam.cjs.min.js',
        format: 'cjs'
      }
    ]
    : [
      {
        dest: 'dist/preact-glam.cjs.js',
        format: 'cjs'
      },
      {
        dest: 'dist/preact-glam.es.js',
        format: 'es'
      },
      {
        dest: 'dist/preact-glam.umd.js',
        format: 'umd'
      }
    ]
}
