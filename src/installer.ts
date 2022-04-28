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

  // TODO установить пакеты по именам, без указания версий
  await run('npm i')

  modulesMsg.resolve()

  const formattingMsg = prepare('raw text formatting')

  await run('npm run lint')
  await run('npm run format-json')

  formattingMsg.resolve()

  const gitMsg = prepare('making the first commit')

  // TODO а что, если на компе не окажется гита?..
  await run('git init')
  await run('git add .')
  await run(`git commit -m "${layerName} created"`)

  gitMsg.resolve()
}
