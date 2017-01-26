import router from 'koa-router';
import Movie from '../models/movies';

const movies = router({
	prefix: '/movies',
});

movies.get('/', function* () {
	const movies = yield Movie.findAll();

	this.body = movies;
});

export default movies;
