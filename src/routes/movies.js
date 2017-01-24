import router from 'koa-router';

const movies = router({
	prefix: '/movies',
});

movies.get('/', function* () {
	this.body = 'Hey'
});

export default movies;
