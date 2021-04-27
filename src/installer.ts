import { exec } from 'child_process'
import { resolve } from 'path'

import { prepare } from '@/tools/output'

export const install = async (
  layerName: string,
  dirName: string
): Promise<void> => {
  const cwd = resolve(dirName)

  const run = (command: string) =>
    new Promise(resolve => {
      exec(command, { cwd }, resolve)
    })

  const modulesEnding = ' (this can take much time)'
  const modulesMsg = prepare('node_modules installing', modulesEnding)

  await run('npm i')

  modulesMsg.resolve()

  const finalMsg = prepare('final preparations')

  await run('npm run lint')
  await run('npm run format-json')
  await run('git init')
  await run('git add .')
  await run(`git commit -m "${layerName} created"`)

  finalMsg.resolve()
}
