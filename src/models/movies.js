import db from '../db';
import { STRING, DATE } from 'sequelize';

const Movie = db.define('movie', {
	title: {
		type: STRING,
	},
	createdAt: {
		type: DATE,
		field: 'created_at',
	},
	updatedAt: {
		type: DATE,
		field: 'updated_at',
	},
});

export default Movie;
