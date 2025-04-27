import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

export function createAccessToken(payload) {
  return new Promise((res, rej) => {
    jwt.sign(
      payload,
      process.env.TOKEN_SECRET,
      { expiresIn: "7d" },
      (err, token) => {
        if (err) rej(err);
        res(token);
      }
    );
  });
}
