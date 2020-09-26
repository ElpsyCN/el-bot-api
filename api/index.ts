import { NowRequest, NowResponse } from "@vercel/node";
import pkg from "../package.json";

export default (req: NowRequest, res: NowResponse) => {
  res.json(pkg);
};
