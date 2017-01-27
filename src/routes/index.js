import movies from './movies';
import directors from './directors';

export default (app) => {
  app.use(movies.routes());
  app.use(directors.routes());
};
