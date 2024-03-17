import { Request, Response, NextFunction } from "express";

export default function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const user = req?.session?.user;

  if (!user) {
    return res.json({ loggedIn: false, error: "you are not logged in" });
  }

  if (!user.isAdmin) {
    return res.json({ loggedIn: true, error: "not authorized" });
  }

  next();
}
