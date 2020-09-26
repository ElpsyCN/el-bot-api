import { NowRequest, NowResponse } from "@vercel/node";

/**
 * 渲染字符串
 * @param template
 * @param data
 * @param name
 */
function renderString(template: string, data: any, name: string) {
  return Function(name, "return `" + template + "`")(data);
}

/**
 * 适配
 * @param req
 * @param data
 */
function adapter(req: NowRequest, data: any): string {
  const index = Math.floor(Math.random() * data.length);

  // for niubi
  if (req.query.name) {
    data[index] = renderString(data[index], req.query.name, "name");
  }

  return data[index];
}

export default (req: NowRequest, res: NowResponse) => {
  const type = req.query.type;
  const words = require(`../../data/${type}.json`);
  const word = adapter(req, words);

  res.json([word]);
};
