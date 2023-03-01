import express from "express";
import ViteExpress from "vite-express";
import app from "./app";

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
