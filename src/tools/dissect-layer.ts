import { Layer } from '@/types'

type Package = {
  name?: string
  scripts: Record<string, string>
  devDependencies: Record<string, string>
  dependencies?: Record<string, string>
}

type CompilerOptions = {
  lib: string[]
  jsx?: string
}

type Eslint = {
  extends: string[]
}

export const getPackage = (layer: Layer): Package =>
  layer.scaffold['package.json'] as Package

export const getCompilerOptions = (layer: Layer): CompilerOptions => {
  const tsConfig = layer.scaffold['tsconfig.json'] as {
    compilerOptions: CompilerOptions
  }

  return tsConfig.compilerOptions
}

export const getEslint = (layer: Layer): Eslint =>
  layer.scaffold['.eslintrc'] as Eslint

export const prepareScaffold = (layer: Layer, name: string): void => {
  layer.scaffold['package.json'] = {
    name,
    ...getPackage(layer),
  }

  layer.scaffold['README.md'] = `# ${name}\n\n${layer.getReadme()}`
}
