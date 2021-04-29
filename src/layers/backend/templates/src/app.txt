import { RequestListener } from 'http'

export const app: RequestListener = (_, res) => {
  res.write('It works!')
  res.end()
}
