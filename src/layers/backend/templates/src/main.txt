import { createServer } from 'http'

import { app } from '@/app'

const port = 8088

createServer(app).listen(port)

console.log(`server is listening ${port} port`)
