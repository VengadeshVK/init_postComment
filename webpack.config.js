const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js", //Entry point 
  output: {
    // path: path.resolve(__dirname, "/src/index.js"),
    path: path.resolve(__dirname, "public"),  //where the output for the file on the public folder
    filename: "main.js",   
    publicPath: '/' 
  },

  target: "web", //web application
  devServer: { 
    port: "3000",  //Localhost portal name 
    static: ["./public"], 
    open: true,
    hot: true,
    liveReload: true, //For automatic hot reload 
    historyApiFallback: true
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts"], //multiple file shared same name but different extensions 
  },
  module: {
    rules: [ //rules for the compiler to follow 
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};