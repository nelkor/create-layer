type MessageExecutor = {
  resolve: () => void
  reject: () => void
}

const createColorMaker = (color: number) => (text: string) =>
  `\u001b[${color}m${text}\u001b[0m`

const makeGreen = createColorMaker(92)
const makeRed = createColorMaker(91)

export const prepare = (main: string, ending = '...'): MessageExecutor => {
  process.stdout.write(`- ${main}${ending}`)

  const createMethod = (success: boolean) => () => {
    process.stdout.clearLine(0)
    process.stdout.cursorTo(0)

    process.stdout.write(
      success ? makeGreen(`+ ${main}`) : makeRed(`* ${main}`)
    )

    process.stdout.write('\n')
  }

  return {
    resolve: createMethod(true),
    reject: createMethod(false),
  }
}
