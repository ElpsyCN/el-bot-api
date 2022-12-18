# el-bot-api

El bot 机器人相关的通用 API，使用 [Vercel](https://vercel.com/) 搭建。

> 每次更新后，触发 [YunYouJun/el-bot-api](https://github.com/YunYouJun/el-bot-api) 部署。

[Limits - Vercel](https://vercel.com/docs/v2/platform/limits)

- API: <https://el-bot-api.vercel.app/api>
- Example: <https://el-bot-api.vercel.app/api/setu>

## Domains

- Vercel: <https://el-bot-api.vercel.app>
- Custom: <https://el-bot-api.elpsy.cn>

## 相关

- [el-bot](https://github.com/ElpsyCN/el-bot/)
- [el-bot-plugins](https://github.com/ElpsyCN/el-bot-plugins/)

## API

> 为保持逻辑统一，niubi / wanan 等随机句子统一移动到 words 目录下。

| Name    | Description | API                                               |
| ------- | ----------- | ------------------------------------------------- |
| setu    | 随机色图    | <https://el-bot-api.vercel.app/api/setu>          |
| niubi   | 随机牛逼话  | <https://el-bot-api.vercel.app/api/words/niubi>   |
| wanan   | 随机晚安话  | <https://el-bot-api.vercel.app/api/words/wanan>   |
| young   | 大老师语录  | <https://el-bot-api.vercel.app/api/words/young>   |
| aoligei | 正能量语录  | <https://el-bot-api.vercel.app/api/words/aoligei> |

## Dev

```sh
vercel dev
# yarn start
```
