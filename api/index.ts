import { VercelRequest, VercelResponse } from "@vercel/node";
import pkg from "../package.json";

export default (req: VercelRequest, res: VercelResponse) => {
  res.json(pkg);
};
