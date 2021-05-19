
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' }
      ]
    }
  ],
  proxy: {
    '/api': {
      'target': 'http://172.24.4.173:8080',
      'changeOrigin': true,
      'pathRewrite': { '^/api' : '' },
    },
  },
  cssLoaderOptions:{
    localIdentName:'[local]'
  },

  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: '2d-map',
      dll: false,
      plugins: ['./src/plugins/customPlugin.js'],
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}
