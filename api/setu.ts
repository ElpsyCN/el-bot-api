import {  VercelRequest, VercelResponse } from "@vercel/node";
import setu from "../data/setu.json";

export default (req: VercelRequest, res: VercelResponse) => {
  if ((setu as any).image) {
    const image = (setu as any).image;
    const index = Math.floor(Math.random() * image.length);
    res.json(image[index]);
  }
};
