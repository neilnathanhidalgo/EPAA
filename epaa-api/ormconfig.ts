import { DataSource } from 'typeorm';
import databaseConfig from './src/config/database.config';

const AppDataSource = new DataSource(databaseConfig);

export default AppDataSource;
