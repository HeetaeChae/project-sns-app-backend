const express = require("express");

const product = require("./routes/product");

const app = express();

const PORT = process.env.PORT || 3060;

app.use("/api/product", product);

app.listen(PORT, () => {
  console.log(`Server is running in ${PORT}`);
});
