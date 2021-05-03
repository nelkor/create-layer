import { Layer } from '@/types'
import { makeCode } from '@/layers/code/code'
import { makeBackend } from '@/layers/backend/backend'
import { makeFrontend } from '@/layers/frontend/frontend'
import { makeReact } from '@/layers/react/react'

export const layers: Record<string, () => Layer> = {
  code: makeCode,
  backend: makeBackend,
  frontend: makeFrontend,
  react: makeReact,
}
