import 'reflect-metadata'
import { DataSource, DataSourceOptions } from 'typeorm'
import { User } from './entity/User'
import { Project } from './entity/Project'
import { Log } from './entity/Log'
import { ENV } from '../src/my_env'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: ENV.DB_HOST,
  port: parseInt(ENV.DB_PORT),
  username: ENV.DB_USERNAME,
  password: ENV.DB_PASSWORD,
  database: ENV.DB_DATABASE,
  synchronize: true,
  logging: false,
  entities: [User, Project, Log],
  migrations: [],
  subscribers: []
});
