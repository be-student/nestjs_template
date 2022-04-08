swagger setting,<br/>
crlf setting remove delete 'cr'<br/>
hot reloading,<br/>
[nest swagger](https://docs.nestjs.com/openapi/introduction)<br/>
git ignore .env<br/>

to use typeorm put<br/>
keepConnectionAlive: true<br/>
inside of TypeORM configuration<br/>

when using fastify-swagger or helmet will cause CSP problem.<br/>

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

typeorm 시작<br/>

```
npx typeorm init --name MyProject --database mysql
```

name은 프로젝트 이름이고 database은 사용할 데이터베이스<br/>

> MyProject
> ├── src // place of your TypeScript code
> │ ├── entity // place where your entities (database models) are stored
> │ │ └── User.ts // sample entity
> │ ├── migration // place where your migrations are stored
> │ ├── data-source.ts // data source and all connection configuration
> │ └── index.ts // start point of your application
> ├── .gitignore // standard gitignore file
> ├── package.json // node module dependencies
> ├── README.md // simple readme file
> └── tsconfig.json // TypeScript compiler options

data-source.ts<br/>

```
 export const AppDataSource = new DataSource({

    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    logging: true,
    entities: [Post, Category],
    subscribers: [],
    migrations: [],

})
```

이렇게 수정으로 세팅<br/>
대부분 host, database, port, username, password까지가 보통 옵션<br/>

```
npx typeorm init --name MyProject --database mysql --express command.
```

익스프레스를 사용한다면 이렇게<br/>
