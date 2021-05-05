import htmlTemplate from './html-template.txt'

export const wrapHtml = (title: string, body: string): string =>
  htmlTemplate.replace('{{ title }}', title).replace('{{ body }}', body)
