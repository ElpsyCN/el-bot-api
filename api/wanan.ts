import { NowRequest, NowResponse } from '@vercel/node';
import wanan from "../data/wanan.json";

export default (req: NowRequest, res: NowResponse) => {
  const index = Math.floor(Math.random() * wanan.length);
  res.json([wanan[index]]);
};
