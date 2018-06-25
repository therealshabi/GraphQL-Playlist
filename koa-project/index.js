const Koa =  require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

let users = [
  {
    name : "Shahbaz",
    email : "shahbaz.h96@gmail.com"
  },
  {
    name : "Chaitanya",
    email : "yeahurok@yahoo.com"
  },
  {
    name : "Pranshu",
    email : "pranshu@gmail.com"
  }
];

router.get("/user/:id", ctx => {
  ctx.body = users[ctx.params.id];
});

router.post("/user/:id", ctx => {
  console.log(ctx.request);
  ctx.body = Object.assign(users[ctx.params.id], ctx.request.body);
});

app.use(require('koa-body')());
app.use(router.allowedMethods());
app.use(router.routes());

const port = 3000;
app.listen(port, function() {
  console.log("Server running on http://127.0.0.1:"+port+"/");
});
