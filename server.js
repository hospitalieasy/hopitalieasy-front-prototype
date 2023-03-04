const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Set the ID property to "Id" instead of "id"
router.db._.id = "Id";

server.use((req, res, next) => {
  if (req.method === "PUT" || req.method === "POST") {
    req.body.updatedAt = Date.now();
  }
  // Continue to JSON Server router
  next();
});

// Enable GET, POST and PUT methods
server.use(router);

server.listen(3002, () => {
  console.log("JSON Server is running");
});
