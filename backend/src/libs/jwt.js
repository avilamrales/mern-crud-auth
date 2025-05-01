import jwt from "jsonwebtoken";

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
