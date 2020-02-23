const path = require('path')
const uglifyjs = require('uglifyjs-webpack-plugin');

module.exports = {
  //mode: "production", //���Ϊ����ģʽ
  mode: "none", //���Ϊ����ģʽ
  entry: [
	  "./src/core.js"
	  ],
  output: {
    filename: 'captcha.js',   //����������
	library: 'jsonljd',
    libraryTarget: 'this',
    path: path.resolve(__dirname, 'dist')  //�������������Ŀ¼��
  },
  externals: {
        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_'
        }
    },
  performance: {     // �ر���ʾ
        hints: false
  },
			/*
  optimization: {
            minimize: false,
            minimizer: [
                new uglifyjs()
            ]
  },*/
  plugins: [
	  new uglifyjs()
  ]
}