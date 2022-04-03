require("dotenv/config");
const Express = require("express");
const { PORT } = process.env;

const App = Express();
App.use(Express.json());

const ZoomRoute = require("./routes/zoom.routes");
App.use("/", ZoomRoute);

App.listen(PORT, () => console.log(`Zoom app listening on port ${PORT}!`));