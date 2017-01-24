import koa from 'koa';
import Router from 'koa-router';

import routes from './routes';
import config from 'config';

const app = koa();
const port = config.get('port');

routes(app);

app.listen(port, () => console.log(`API running on ${port}`));
