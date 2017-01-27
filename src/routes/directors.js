import router from 'koa-router';
import Director from '../models/director';
import Movie from '../models/movie';

const directors = router({
  prefix: '/directors',
});

directors.get('/', function* () {
  const results = yield Director.findAll({
    attributes: [
      'id',
      'name',
    ],
    include: {
      model: Movie,
      as: 'movies',
    },
  });

  this.body = results;
});

directors.get('/:id', function* () {
  const director = yield Director.findOne({
    where: {
      id: this.params.id,
    },
    attributes: [
      'name',
    ],
    include: {
      model: Movie,
      as: 'movies',
    },
  });

  this.body = director;
});

directors.post('/', function* () {
  const {
    name,
  } = this.request.body;

  const director = yield Director.create({
    name,
  });

  this.body = director;
});

export default directors;
