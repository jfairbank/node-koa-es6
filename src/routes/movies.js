import router from 'koa-router';

const movies = router({
	prefix: '/movies',
});

movies.get('/', function* () {
	this.body = { success: true }
});

export default movies;
