import 'reflect-metadata'
import { DataSource, DataSourceOptions } from 'typeorm'
import { User } from './entity/User'
import { Project } from './entity/Project'
import { Log } from './entity/Log'
import * as dotenv from 'dotenv'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: false,
  entities: [User, Project, Log],
  migrations: [],
  subscribers: []
});
