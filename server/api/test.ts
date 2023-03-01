// import db from "../db";
// const User = db.User;

import express, { NextFunction, Request, Response } from "express";
const router = express.Router();

router.get("/hello", (req, res, next) => {
  res.send("Hello Vite + React + TypeScript!");
});

export default router;
