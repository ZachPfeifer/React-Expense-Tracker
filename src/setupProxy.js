const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    proxy("/api/v1/transactions", {
      target: "https://zachs-global-server.herokuapp.com",
      secure: false,
      changeOrigin: true
    })
  );

  app.use(
    proxy("transactions/${id}", {
      target: "https://zachs-global-server.herokuapp.com/api/v1/",
      secure: false,
      changeOrigin: true
    })
  );
};