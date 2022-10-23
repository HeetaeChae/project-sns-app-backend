const express = require("express");

const app = express();

const PORT = proccess.env.PORT || 3060;

app.listen(PORT, () => {
  console.log(`Server is running in ${PORT}`);
});
