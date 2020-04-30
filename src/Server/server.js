import express from "express";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import config from "../../webpack.config";
const compiler = webpack(config);

const server = express();

const PORT = process.env.PORT || 8080;

server.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

server.use(webpackHotMiddleware(compiler));
server.use(express.static("build"));
server.set("view engine", "ejs");

server.get("/", (req, res) => {
  res.render("html");
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
