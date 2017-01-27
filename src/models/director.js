import {
  STRING,
  UUID,
  DATE,
} from 'sequelize';

import db from '../db';

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
