const app = require("./App");

//START A SERVER
const port = process.env.PORT || 3001;

const server = app.listen(port, () => {
  console.log(`Server running on ${port}...`);
});
