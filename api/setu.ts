import { NowRequest, NowResponse } from "@vercel/node";
import setu from "../data/setu.json";

export default (req: NowRequest, res: NowResponse) => {
  if ((setu as any).image) {
    const image = (setu as any).image;
    const index = Math.floor(Math.random() * image.length);
    res.json(image[index]);
  }
};
