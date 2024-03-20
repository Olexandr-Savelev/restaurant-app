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

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", "true");

  // Pass to next layer of middleware
  next();
});

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
