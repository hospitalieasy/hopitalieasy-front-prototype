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

// Create custom routes
server.delete("/patient/:id", (req, res) => {
  const id = req.params.id;
  const patients = router.db.get("patients");
  const index = patients.findIndex((patient) => patient.Id === id);
  if (index !== -1) {
    patients.splice(index, 1);
    router.db.write();
    res.status(200).jsonp({ message: `Patient ${id} has been deleted.` });
  } else {
    res.status(404).jsonp({ message: `Patient ${id} not found.` });
  }
});

server.delete("/doctor/:id", (req, res) => {
  const id = req.params.id;
  const doctors = router.db.get("doctors");
  const index = doctors.findIndex((doctor) => doctor.Id === id);
  if (index !== -1) {
    doctors.splice(index, 1);
    router.db.write();
    res.status(200).jsonp({ message: `Doctor ${id} has been deleted.` });
  } else {
    res.status(404).jsonp({ message: `Doctor ${id} not found.` });
  }
});

// Enable GET, POST, PUT, and DELETE methods
server.use(router);

// Start server
server.listen(3002, () => {
  console.log("JSON Server is running");
});
