import db from '../db';
import Movie from './movie';

import {
	STRING,
	UUID,
	DATE,
} from 'sequelize';

const Director = db.define('director', {
	id: {
		type: UUID,
		primaryKey: true,
		autoIncrement: true,
	},
	name: {
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
}, { tableName: 'director' });

export default Director;
