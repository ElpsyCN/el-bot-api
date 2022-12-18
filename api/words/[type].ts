import type { VercelRequest, VercelResponse } from '@vercel/node'

/**
 * 渲染字符串
 * @param template
 * @param data
 * @param name
 */
function renderString(template: string, data: any, name: string) {
  // eslint-disable-next-line no-new-func
  return Function(name, `return \`${template}\``)(data)
}

/**
 * 适配
 * @param req
 * @param data
 */
function adapter(req: VercelRequest, data: any): string {
  const index = Math.floor(Math.random() * data.length)

  // for niubi
  if (req.query.name)
    data[index] = renderString(data[index], req.query.name, 'name')

  return data[index]
}

export default async (req: VercelRequest, res: VercelResponse) => {
  const type = req.query.type
  const words = (await import(`../../data/${type}.json`)).default
  const word = adapter(req, words)

  res.json([word])
}
