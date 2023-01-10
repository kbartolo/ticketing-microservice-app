import express from "express";

const app = express();

app.use(express.json());

app.get("/api/users/holubolu", (req, res) => {
  console.log("Welcome holubolu");
  res.send("Welcome holubolu");
});

app.get("/api/users/currentuser", (req, res) => {
  console.log("Hi current user");
  res.send("Hi there current user");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("listening on port xxxx " + PORT + "!!");
});
