import AuthService from "../services/auth.service.js";

class AuthController {

  static async studentLogin(req, res) {
    const { email, password } = req.body;

    const result = await AuthService.studentLogin(email, password);
    if (!result) return res.status(401).json({ error: "Invalid credentials" });

    res.json(result);
  }

  static async mentorLogin(req, res) {
    const { email, password } = req.body;

    const result = await AuthService.mentorLogin(email, password);
    if (!result) return res.status(401).json({ error: "Invalid credentials" });

    res.json(result);
  }
}

export default AuthController;
