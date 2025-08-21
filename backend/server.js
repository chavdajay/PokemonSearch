require("dotenv").config();
const express = require("express");
const cors = require("cors");
const masterRoutes = require("./routes/masterRoutes");
const abilityRoutes = require("./routes/abilityRoutes");
require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/masters", masterRoutes);
app.use("/api/abilities", abilityRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
