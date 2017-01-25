import koa from 'koa';
import config from 'config';
import routes from './routes';

const app = koa();

routes(app);

const port = config.get('port');

app.listen(port, () => console.log(`API running on ${port}`));
