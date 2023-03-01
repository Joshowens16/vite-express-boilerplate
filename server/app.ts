import express, { Express, Request, Response } from "express";
import path from "path";
import morgan from "morgan";
import apiRouter from "./api";

const router: Express = express();

// Set up middleware
router.use(morgan("tiny"));
router.use(express.json());

// Set up routes
router.use("/api", apiRouter);

router.use("/dist", express.static(path.join(__dirname, "../dist")));
router.use("/public", express.static(path.join(__dirname, "../public")));
router.get("/", (req: Request, res: Response) =>
  res.sendFile(path.join(__dirname, "../../index.html"))
);

export default router;
