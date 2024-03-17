import User from "../models/user.model";
import { Request, Response } from "express";

class UserController {
  static async LoginAsUser(req: Request, res: Response) {
    try {
      const user = await User.findOne({ name: req.body.name });
      if (!user) {
        return res.json({ error: "User not found" });
      }
      if (user.password !== req.body.password) {
        return res.json({ error: "Password is incorrect" });
      }

      const userParams = { name: user.name, isAdmin: user.isAdmin };

      req.session.user = userParams;

      return res.json({ user: userParams });
    } catch (error) {
      let errorMessage = "Unknown error";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      res.status(500).json({ error: errorMessage });
    }
  }

  static async GetLoggedUser(req: Request, res: Response) {
    try {
      return res.json({ user: req.session.user });
    } catch (error) {
      let errorMessage = "Unknown error";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      res.status(500).json({ error: errorMessage });
    }
  }
}

export default UserController;
