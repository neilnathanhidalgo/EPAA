import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig from './database.config';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            ...databaseConfig,
        }),
    ],
})
export class DatabaseModule {
    private readonly logger = new Logger(DatabaseModule.name);

    constructor() {
        this.logger.log(`Database connection: ${databaseConfig.database}`);
    }
}
