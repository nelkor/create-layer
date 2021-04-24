import { exec } from 'child_process'
import { resolve } from 'path'

export const install = async (
  layerName: string,
  dirName: string
): Promise<void> => {
  const cwd = resolve(dirName)

  const run = (command: string) =>
    new Promise(resolve => {
      exec(command, { cwd }, resolve)
    })

  console.log('installing modules...')

  await run('npm i')

  console.log('almost finished...')

  await run('npm run lint')
  await run('npm run format-json')
  await run('git init')
  await run('git add .')
  await run(`git commit -m "${layerName} created"`)
}
