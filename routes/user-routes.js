import { Router } from "express";
import {
  signin,
  logout,
} from "../controllers/users.controller";

router.post("/users/signin", signin);
router.get("/users/logout", logout);