import { layers } from '@/layers-pool'
import { writeDir } from '@/render'
import { install } from '@/installer'
import { prepare } from '@/output'

const [, , layerName, name] = process.argv

const bootstrap = () => {
  if (!layerName || !name) {
    console.log('Expected name of layer and name')

    return
  }

  const makeLayer = layers[layerName]

  if (!makeLayer) {
    console.log(`Unknown layer: ${layerName}`)

    return
  }

  const copyingMsg = prepare('file copying')

  // TODO обработать случай, когда не оказалось прав на запись
  writeDir(makeLayer(), name)

  copyingMsg.resolve()

  install(layerName, name).then(() => {
    console.log('')
    console.log('done.')
  })
}

bootstrap()
