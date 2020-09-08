const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('src/data/db.json')
const middlewares = jsonServer.defaults()

const port = process.env.PORT || 'https://my-bookcase.herokuapp.com/ 

server.use(middlewares)
server.use(router)
server.listen(port, () => {
    console.log(`JSON server is running in port ${port}`)
})