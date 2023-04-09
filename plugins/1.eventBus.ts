import mitt from 'mitt'
import { EventBusEvents } from '@/types/plugins'

export default defineNuxtPlugin(() => {
  const emitter = mitt<EventBusEvents>()

  return {
    provide: {
      eventBus: {
        event: emitter.emit,
        listen: emitter.on
      }
    }
  }
})
