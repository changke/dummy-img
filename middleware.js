module.exports = function(connect, options, middlewares) {
  middlewares.unshift(function(req, res, next) {
    var urlParts = req.url.split('/');
    if (urlParts[1] && urlParts[1].toLowerCase() == 'dummy-img') {
      var width = urlParts[2];
      var height = urlParts[3];
      var svg = require('./repo/svg');
      svg.init(width, height);
      res.setHeader('Content-Type', 'image/svg+xml');
      res.end(svg.generate());
    } else {
      return next();
    }
  });
  return middlewares;
};