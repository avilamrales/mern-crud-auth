import { Router } from "express";
import {
  register,
  login,
  logout,
  profile,
} from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSquema } from "../middlewares/validator.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post("/register", validateSquema(registerSchema), register);
router.post("/login", validateSquema(loginSchema), login);
router.post("/logout", logout);

router.get("/profile", authRequired, profile);

export default router;
