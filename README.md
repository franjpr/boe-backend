# WEB
[https://boe-backend.vercel.app/](https://boe-backend.vercel.app/)

## Descripción

Este proyecto tiene como objetivo servir datos obtenidos a través de la [API del BOE](https://www.boe.es/datosabiertos/). Únicamente se sirven datos obtenidos de la seccion 5A de anuncios de formalización de contratos.

## Funcionamiento

Se obtienen datos de la API del BOE en formato XML, estos se parsean a JSON y se limpia la información para luego guardarlos en mongodb.

## Instalación

```bash
$ npm install
```

## Ejecutar la app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Pruebas unitarias

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

```

## Stack

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>
<p align="center">
  <a href="https://www.mongodb.com/es/atlas/" target="blank"><img src="https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress" width="320" alt="MongoDB logo" /></a>
</p>
<p align="center">
  <a href="http://vercel.com/" target="blank"><img src="https://logovtor.com/wp-content/uploads/2020/10/vercel-inc-logo-vector.png" width="320" alt="vercel Logo" /></a>
</p>
<p align="center">
  <a href="https://jestjs.io/" target="blank"><img src="https://cdn-images-1.medium.com/max/1200/1*Q26gw-kNzOXUqZKRr04T-g.png" width="320" alt="jest Logo" /></a>
</p>

## Licencia

[BSD-3](license.md).
