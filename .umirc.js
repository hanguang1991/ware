
// ref: https://umijs.org/config/
export default {
  routes: [
    { path: '', exact: false, conponent: '', routes: [
      
    ] }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'ware',
      dll: false,
      routes: {
        exclude: [],
      },
      hardSource: false,
    }],
  ],
}
