import { Service, ServiceContext, IOClients } from '@vtex/api'
import { redirectIndex } from './middlewares/redirect'

declare global {
  type Context = ServiceContext<IOClients, State>
  interface State {
    code: number
  }
}

export default new Service<IOClients, State>({
  routes: {
    redirectIndex
  }
})
