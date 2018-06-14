const koa = require('koa')
const server = require('koa-static')
const path = require('path')

const app = new koa()

const public = "./neet-code"

app.use(server(
    path.join(__dirname, public)
))


app.use(async (ctx) => {
    ctx.body = "hello world"
})

app.listen(8080, () => {
    console.log("start")
})