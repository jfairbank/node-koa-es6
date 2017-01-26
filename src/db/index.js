import Sequelize from "sequelize";
import config from 'config';

export default new Sequelize(
	config.get('DB.NAME'),
	config.get('DB.USERNAME'),
	config.get('DB.PASSWORD'),
	{
		host: config.get('DB.HOST'),
		dialect: 'postgres',
	},
);
