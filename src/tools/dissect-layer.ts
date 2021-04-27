import { Layer } from '@/types'

type Package = {
  name?: string
  scripts: Record<string, string>
  devDependencies: Record<string, string>
  dependencies?: Record<string, string>
}

export const getPackage = (layer: Layer): Package =>
  layer.scaffold['package.json'] as Package

export const setName = (layer: Layer, name: string): void => {
  layer.scaffold['package.json'] = {
    name,
    ...getPackage(layer),
  }
}