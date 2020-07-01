import { NowRequest, NowResponse } from '@vercel/node';
import niubi from "../data/niubi.json";

export default (req: NowRequest, res: NowResponse) => {
  const index = Math.floor(Math.random() * niubi.length);
  res.json([niubi[index]]);
};
