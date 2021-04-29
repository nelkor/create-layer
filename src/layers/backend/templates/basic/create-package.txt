import { writeFileSync } from 'fs'

import { distPackageJson } from './dependencies'

writeFileSync('dist/package.json', distPackageJson)
