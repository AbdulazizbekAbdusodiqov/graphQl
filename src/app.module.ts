import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CarsModule } from "./cars/cars.module";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { OwnerModule } from './owner/owner.module';
import { CustomerModule } from './customer/customer.module';

@Module({
    imports: [
        ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: "schema.ql",
            sortSchema: true,
            playground: true,
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (config: ConfigService) => ({
                type: config.get<"postgres">("PG_CONNECTION"),
                host: config.get<string>("PG_HOST"),
                username: config.get<string>("PG_USERNAME"),
                password: config.get<string>("PG_PASSWORD"),
                port: config.get<number>("PG_PORT"),
                database: config.get<string>("PG_DB"),
                entities: [__dirname + `dist/**/*.entity{.ts,.js}`],
                autoLoadEntities: true,
                synchronize: true,
                logging: true,
            }),
        }),
        CarsModule,
        OwnerModule,
        CustomerModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
