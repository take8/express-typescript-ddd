import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
// import logger from "morgan";
import logger from "./infrastructure/logging/logger";

// routing
import routes from "./presentation/routes";

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");

// logger
// app.use(logger("dev"));

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
