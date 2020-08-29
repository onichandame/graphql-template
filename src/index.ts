import { server } from './server'

const port = parseInt(process.env.PORT || '') || 3000

server.listen(port).then(({ url, subscriptionsUrl }) => {
  console.log(`🚀 main server ready at ${url}}`)
  console.log(`🚀 subscriptions server ready at ${subscriptionsUrl}}`)
})
