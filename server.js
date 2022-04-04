require("dotenv/config");
const Express = require("express");
const { PORT } = process.env;

const App = Express();
App.use(Express.json());

const ZoomRoutes = require("./routes/zoom.routes");
App.use("/", ZoomRoutes);

App.listen(PORT, () => console.log(`Zoom app listening on port ${PORT}!`));