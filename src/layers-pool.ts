import { Layer } from '@/types'
import { makeCode } from '@/layers/code/code'
import { makeFrontend } from '@/layers/frontend/frontend'
import { makeBackend } from '@/layers/backend/backend'

export const layers: Record<string, () => Layer> = {
  code: makeCode,
  frontend: makeFrontend,
  backend: makeBackend,
}
