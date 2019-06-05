import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
// import logger from "morgan";
import * as Log4js from "log4js";

// routing
import routes from "./presentation/routes";

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");

// logger
// app.use(logger("dev"));
// Log4js.configure('./filename');
Log4js.configure({
  appenders: {
    // 標準出力
    stdout: {
      type: "stdout"
    },
    // ファイル出力
    system: {
      type: "dateFile",
      // プロジェクトルートディレクトリを起点とした相対パスで解釈される
      // filename: path.join(__dirname, "../logs/system.log"),
      filename: "./logs/system.log",
      // `filename` の後ろにこのパターンでファイル名が付けられる
      pattern: ".yyyy-MM-dd",
      // `true` を指定すると、ローテートしたファイル名の末尾に拡張子が付く
      keepFileExt: true,
      // `true` を指定すると、ローテートしたファイルを .gz 形式で圧縮してくれる
      compress: true,
      // この数以上にログファイルが溜まると、古いファイルを削除してくれる
      daysToKeep: 5
    }
  },
  categories: {
    // 標準出力とファイルの両方に出力する
    default: {
      appenders: ["stdout", "system"],
      level: "info"
    }
  }
});
const logger = Log4js.getLogger();
logger.info("Some debug messages");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", routes);

// catch 404 and forward to error handler
app.use(function(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  logger.error("Error 404");
  next(createError(404));
});

// error handler
app.use(function(
  err: any,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  const status = err.status || 500;
  res.status(status);
  logger.error("Error " + status);
  res.render("error");
});

module.exports = app;
