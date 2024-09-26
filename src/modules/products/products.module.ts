import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { UsersModule } from '../users/users.module';

const providers = [ProductsService]

@Module({
	imports: [TypeOrmModule.forFeature([Product]), UsersModule],
	controllers: [ProductsController],
	providers,
	exports: [TypeOrmModule, ...providers],
})
export class ProductsModule {}
