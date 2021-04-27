export type Layer = {
  scaffold: Record<string, unknown>
  getSrc: () => Record<string, string>
  getReadme: () => string
}
