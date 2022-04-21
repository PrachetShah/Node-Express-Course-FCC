const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  // console.log(method, url, time);
  // When you work on a middleware, you need to pass it to next() middleware
  next();
  // OR use
  // res.send("Testing");
};

module.exports = logger;
