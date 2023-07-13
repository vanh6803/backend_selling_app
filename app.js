var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var siteRouter = require("./routes/site.route");
var accountRouter = require("./routes/account.route");
var manufacturerRouter = require("./routes/manufacturer.route");
var productRouter = require("./routes/product.route");
var productApiRouter = require("./routes/api/product.api.route");
var manufacturerApiRouter = require("./routes/api/manufacturer.api.router");
var accountApiRouter = require("./routes/api/account.api.route");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", siteRouter);
app.use("/account", accountRouter);
app.use("/manufacturer", manufacturerRouter);
app.use("/product", productRouter);
app.use("/api/product", productApiRouter);
app.use("/api/manufacturer", manufacturerApiRouter);
app.use("/api/account", accountApiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  if (req.originalUrl.indexOf("/api") == 0) {
    res.json({
      status: 0,
      msg: err.message,
    });
  } else {
    res.render("sites/error");
  }
});

module.exports = app;
