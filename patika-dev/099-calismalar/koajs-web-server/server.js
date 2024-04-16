const Koa = require('koa');

const app = new Koa();

app.use(async (ctx, next) => {
    const reqMethod = ctx.method;
    const reqUrl = ctx.url;
    ctx.type = 'text/html';
    console.log(`A ${reqMethod} has been received to ${reqUrl}`);
    await next();
})

app.use(ctx => {
    if (ctx.path === '/') {
        ctx.body = '<h1>Root Page</h1>';
    } else if (ctx.path === '/about') {
        ctx.body = '<h1>About Page</h1>';
    } else if (ctx.path === '/contact') {
        ctx.body = '<h1>Contact Page</h1>';
    } else {
        ctx.status = 404;
        ctx.body = '<h1>404 Not Found</h1>';
    }
})
const host = '127.0.0.1';
const port = 3000;

app.listen(port, host, () => {
    console.log(`Listening to http://${host}:${port}`);
});