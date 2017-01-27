import koa from 'koa';
import bodyParser from 'koa-bodyparser';
import config from 'config';
import routes from './routes';

const app = koa();

app.use(bodyParser());

routes(app);

const port = config.get('port');

/* eslint-disable no-console */
app.listen(port, () => console.log(`API running on ${port}`));
