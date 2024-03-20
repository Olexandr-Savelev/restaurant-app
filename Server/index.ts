import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db";
import bodyParser from "body-parser";
import dishRouter from "./routes/dish.router";
import session from "express-session";
import userRouter from "./routes/user.router";
import cookieParser from "cookie-parser";

dotenv.config();

const app: Express = express();

const port = process.env.PORT || 8080;

const corsOptions = {
  origin: "http://localhost:4020",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "sessions",
    cookie: {
      maxAge: 1000 * 60 * 60,
      secure: false,
    },
  })
);

app.use("/api/login", userRouter);

app.use("/api/dish", dishRouter);

app.use((req: Request, res: Response) => {
  res.status(404).json({ error: "Endpoint not found" });
});

connectDB();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

declare module "express-session" {
  export interface SessionData {
    user: any;
  }
}
