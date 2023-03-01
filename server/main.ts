import express from "express";
import ViteExpress from "vite-express";
import app from "./app";

// app.get("/hello", (req, res, next) => {
//   res.send("Hello Vite + React + TypeScript!");
// });

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
