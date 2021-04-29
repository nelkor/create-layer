import { alias } from './dev-helpers/alias'

export default {
  verbose: true,
  moduleNameMapper: Object.entries(alias).reduce((acc, [key, value]) => {
    acc[`${key}/(.*)`] = `${value}/$1`

    return acc
  }, {} as Record<string, string>),
}
