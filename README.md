swagger setting,
crlf setting remove delete 'cr'
hot reloading,
[nest swagger](https://docs.nestjs.com/openapi/introduction)
git ignore .env

to use typeorm put
keepConnectionAlive: true
inside of TypeORM configuration

when using fastify-swagger or helmet will cause CSP problem.

```
app.register(helmet, {
  contentSecurityPolicy: {
    directives: {
      defaultSrc: [`'self'`],
      styleSrc: [`'self'`, `'unsafe-inline'`],
      imgSrc: [`'self'`, 'data:', 'validator.swagger.io'],
      scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
    },
  },
});

// If you are not going to use CSP at all, you can use this:
app.register(helmet, {
  contentSecurityPolicy: false,
});
```
