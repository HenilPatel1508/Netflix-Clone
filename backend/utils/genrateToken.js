import jwt from "jsonwebtoken"
import { ENV_VARS } from "../config/envVars.js"

export const generateTokenAndSetCookie = (userId, res) => {
	const token = jwt.sign({ userId }, ENV_VARS.JWT_SECRT, { expiresIn: "10d" });

	res.cookie("jwt-netflix", token, {
		maxAge: 10 * 24 * 60 * 60 * 1000, // 10 days in MS
		httpOnly: true,
		sameSite: "strict",
		secure: ENV_VARS.NODE_ENV !== "development",
	});

	return token;
};