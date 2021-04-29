import { join, resolve } from 'path'

import tsconfig from '../tsconfig.json'

const { baseUrl, paths } = tsconfig.compilerOptions

export const alias = Object.entries(paths).reduce((acc, [key, [value]]) => {
  const [symbol] = key.split('/*')
  const [path] = value.split('/*')

  acc[symbol] = resolve(join(baseUrl, path))

  return acc
}, {} as Record<string, string>)
