import { Module, forwardRef } from '@nestjs/common';
import { CollectionSitesService } from './collection_sites.service';
import { CollectionSitesController } from './collection_sites.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollectionSite } from './entities/collection_site.entity';
import { UsersModule } from '../users/users.module';

const providers = [CollectionSitesService];

@Module({
	imports: [TypeOrmModule.forFeature([CollectionSite]), forwardRef(() => UsersModule)],
	controllers: [CollectionSitesController],
	providers,
	exports: [TypeOrmModule, ...providers],
})
export class CollectionSitesModule { }
