import router from 'koa-router';
import Movie from '../models/movie';
import Director from '../models/director';

const movies = router({
  prefix: '/movies',
});

movies.get('/', function* () {
  const results = yield Movie.findAll({
    attributes: [
      'id',
      'title',
      'description',
      'image',
      'released',
    ],
    include: {
      model: Director,
      as: 'director',
      attributes: ['name'],
    },
  });

  this.body = results;
});

movies.get('/:id', function* () {
  const movie = yield Movie.findOne({
    where: {
      id: this.params.id,
    },
    attributes: [
      'title',
      'description',
      'image',
      'released',
    ],
    include: {
      model: Director,
      as: 'director',
      attributes: ['name'],
    },
  });

  this.body = movie;
});

movies.post('/', function* () {
  const {
    title,
    description,
    image,
    released,
    directorId,
  } = this.request.body;

  const movie = yield Movie.create({
    title,
    description,
    image,
    released,
    directorId,
  });

  this.body = movie;
});

export default movies;
