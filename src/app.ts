import createError from "http-errors";
import express from "express";
import path from "path";

import cookieParser from "cookie-parser";
import session from "express-session";
import csrf from "csurf";

// import logger from "morgan";
import logger from "./infrastructure/logging/logger";

// routing
import methodOverride from "method-override"; // ルーティングの前に読み込む
import routes from "./presentation/routes";

class App {
  public express: express.Application = express();

  constructor() {
    this.initMiddleware();
    this.initRouter();
    this.initErrorHandler();
  }

  private initMiddleware() {
    // view engine setup
    this.express.set("views", path.join(__dirname, "../templates"));
    this.express.set("view engine", "pug");

    // logger
    // this.express.use(logger("dev"));

    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: false }));

    // CSRF prevention
    this.express.use(cookieParser());
    this.express.use(session({
      resave: false,
      saveUninitialized: false,
      secret: "secret"
    }));
    this.express.use(csrf());
    this.express.use((req, res, next) => {
      res.locals.csrfToken = req.csrfToken();
      next();
    });

    // static files
    this.express.use(express.static(path.join(__dirname, "public")));
    // Access to node_modules
    // TODO: Danger?
    this.express.use("/node_modules", express.static(path.join(__dirname, "../node_modules")));
  }

  private initRouter() {
    // routing
    this.express.use(methodOverride("_method"));
    this.express.use("/", routes);
  }

  private initErrorHandler() {
    // catch 404 and forward to error handler
    this.express.use(function (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) {
      logger.error("Error 404");
      // next(createError(404));
      res.send(createError(404));
    });

    // error handler
    this.express.use(function (
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
  }
}

export default new App().express;
