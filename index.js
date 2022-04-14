const express = require('express');
const Routes = require('./routes');

const app = express();

app.use(express.json());

app.use('/user', Routes.UserRoutes);
app.use('/login', Routes.LoginRoutes);
app.use('/categories', Routes.CategoryRoutes);
app.use('/post', Routes.BlogPostRoutes);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
