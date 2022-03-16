const app = require('./src/app');
const port = 4000;

app.listen(port, () => {
    console.log(`App esta rodando na porta ${port}`)
});