const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js", // Tệp chính (entry point) của ứng dụng
  output: {
    filename: "bundle.js", // Tên tệp sau khi bundle
    path: path.resolve(__dirname, "dist"), // Đường dẫn đến thư mục đầu ra
    clean: true, // Xóa các tệp bundle cũ khi thực hiện lại bundle
  },
  devServer: {
    static: path.resolve(__dirname, "dist"), // Thư mục cơ sở cho development server
    hot: true, // Sử dụng Hot Module Replacement (HMR)
  },
  devtool: "inline-source-map", // Tạo source maps trong development
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "dist", "index.html"), // Đường dẫn tới trang index.html mẫu
    }),
  ],
};
