import db from '../db';
import { STRING } from 'sequelize';

const Movie = db.define('movies', {
	title: {
		type: STRING,
	},
});

export default Movie;
