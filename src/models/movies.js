import db from '../db';

import {
	STRING,
	DATE,
	TEXT,
	UUID,
} from 'sequelize';

const Movie = db.define('movie', {
	id: {
		type: UUID,
	},
	title: {
		type: STRING,
	},
	description: {
		type: TEXT,
	}
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
