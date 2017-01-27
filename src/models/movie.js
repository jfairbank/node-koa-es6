import {
  STRING,
  DATE,
  TEXT,
  UUID,
} from 'sequelize';

import db from '../db';
import Director from './director';

const Movie = db.define('movie', {
  id: {
    type: UUID,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: STRING,
  },
  image: {
    type: STRING,
  },
  description: {
    type: TEXT,
  },
  directorId: {
    type: UUID,
    field: 'director_id',
  },
  released: {
    type: DATE,
  },
  createdAt: {
    type: DATE,
    field: 'created_at',
  },
  updatedAt: {
    type: DATE,
    field: 'updated_at',
  },
}, { tableName: 'movie' });

Movie.belongsTo(Director, { foreignKey: 'directorId' });
Director.hasMany(Movie, { as: 'movies', foreignKey: 'directorId' });

export default Movie;
