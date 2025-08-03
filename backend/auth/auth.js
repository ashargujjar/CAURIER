const jwt = require("jsonwebtoken");
// secret key need to hide
const secret = process.env.SECRET;

exports.authorization = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer "))
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.decode(token, secret);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ message: "Forbidden: Invalid token" });
  }
};
