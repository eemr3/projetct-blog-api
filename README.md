
# Project Blog Api

Foi arquiteturado e desenvolvido uma API de um CRUD posts de blog (com o Sequelize).


## Etiquetas

![GitHub language count](https://img.shields.io/github/languages/count/eemr3/projetct-blog-api)
![GitHub top language](https://img.shields.io/github/languages/top/eemr3/projetct-blog-api)
[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)



## Aprendizados

- Utilizar o sequelize para integrar o banco de dados com sua aplicação;
- Criar migrações utilizando o sequelize;
- Criar seeds utilizando o sequelize.
- Utilizar o sequelize para criar relacionamentos entre tabelas;
- Utilizar métodos que simulam comandos de integração de tabelas;
- Entender o que há por dentro de um token de autenticação e autorização;
- Gerar tokens a partir de informações como login e senha;
- Autenticar pessoas usuárias utilizando o token JWT.
- Autorizar o acesso a rotas do Express, usando o token JWT.
- Entender e aplicar conceitos de testes de integração / contrato;
- Criar testes de integração para API's REST;
- Testar um endpoint com uma middleware de autenticação JWT.


## Screenshots

![App Screenshot](https://user-images.githubusercontent.com/42968718/164105282-fb489fef-cecf-49fa-bc2d-c7d7c1512fd5.jpeg)


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`MYSQL_USER`

`MYSQL_PASSWORD`

`HOSTNAME`

`JWT_SECRET`



## Rodando localmente

Clone o projeto

```bash
  git clone git@github.com:eemr3/projetct-blog-api.git
```

Entre no diretório do projeto

```bash
  cd project-blog-api
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run debug
```


## Licença

[MIT](https://choosealicense.com/licenses/mit/)

