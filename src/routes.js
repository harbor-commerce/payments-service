import * as domain from './charges.js'

export const routes = {
  'GET /health': () => ({ ok: true, service: 'payments-service' }),
  ...domain.routes,
}
