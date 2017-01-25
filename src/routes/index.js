import movies from './movies';

export default app => {
	app.use(movies.routes());
};
