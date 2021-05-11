import { readFileSync, writeFileSync } from 'fs'

const path = 'dist/bin.js'

writeFileSync(path, `#!/usr/bin/env node\n\n${readFileSync(path)}`)
