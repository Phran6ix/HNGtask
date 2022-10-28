const express = require("express");
const route = require("./route");

const app = express();
app.use(express.json());

app.use("/api", route);

app.listen(4500, () => {
  console.log(`server is running on port 4500`);
});
