import { resolve, dirname } from 'path'
import { mkdirSync, writeFileSync } from 'fs'

import { Layer } from '@/types'
import { setName } from '@/tools/dissect-layer'

export const writeDir = (layer: Layer, name: string): void => {
  const { scaffold, getSrc } = layer

  setName(layer, name)

  scaffold['README.md'] = [`# ${name}`, scaffold['README.md']].join('\n\n')

  const files: Record<string, unknown> = {
    ...scaffold,

    ...Object.entries(getSrc()).reduce((acc, [key, value]) => {
      acc[`src/${key}`] = value

      return acc
    }, {} as Record<string, string>),
  }

  Object.entries(files).forEach(([fileName, content]) => {
    const fullName = resolve(name, fileName)

    const data =
      typeof content == 'string' ? content : JSON.stringify(content, null, 2)

    mkdirSync(dirname(fullName), { recursive: true })
    writeFileSync(fullName, data)
  })
}
