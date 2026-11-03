import http from 'node:http'
import { routes } from './routes.js'

const port = Number(process.env.PORT ?? 3000)

http.createServer((req, res) => {
  const handler = routes[`${req.method} ${req.url.split('?')[0]}`]
  if (!handler) return res.writeHead(404).end()
  res.setHeader('content-type', 'application/json')
  res.end(JSON.stringify(handler(req)))
}).listen(port, () => console.log('payments-service listening on :' + port))
