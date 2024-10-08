import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put, UseGuards } from '@nestjs/common';
import { CollectionSitesService } from './collection_sites.service';
import { CollectionSiteCreateDto, CollectionSiteQueryDto, CollectionSiteUpdateDto } from './dto/collection_site.dto';
import { CollectionSite } from './entities/collection_site.entity';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApiResult } from 'src/core/common/decorators/api-result.decorator';
import { IdParam } from 'src/core/common/decorators/id-param.decorator';
import { RolesGuard } from 'src/core/guards/roles.guard';
import { Roles } from 'src/core/common/decorators/role.decorator';

@ApiTags('Negocio - Centro de acopios')
@Controller('collection-sites')
@UseGuards(RolesGuard)
export class CollectionSitesController {
	constructor(private readonly collectionSitesService: CollectionSitesService) { }

	@Post()
	@Roles(0)
	@ApiOperation({ summary: 'Creación de centros de acopio' })
	create(@Body() createCollectionSiteDto: CollectionSiteCreateDto): Promise<CollectionSite> {
		return this.collectionSitesService.create(createCollectionSiteDto);
	}

	@Get()
	@Roles(0)
	@ApiOperation({ summary: 'Obtener listado de centros de acopios - Paginación' })
	@ApiResult({ type: [CollectionSite], isPage: true })
	async findAll(@Query() dto: CollectionSiteQueryDto) {
		return this.collectionSitesService.findAll(dto);
	}

	@Get(':id')
	@Roles(0)
	@ApiOperation({ summary: 'Obtener centro de acopio por su ID' })
	findOne(@IdParam('id') id: string): Promise<CollectionSite> {
		return this.collectionSitesService.findOne(+id);
	}

	@Put(':id')
	@Roles(0)
	@ApiOperation({ summary: 'Actualizar centro de acopio' })
	update(@IdParam('id') id: string, @Body() updateCollectionSiteDto: CollectionSiteUpdateDto): Promise<CollectionSite> {
		return this.collectionSitesService.update(+id, updateCollectionSiteDto);
	}

	@Patch(':id/change-status')
	@Roles(0)
	@ApiOperation({ summary: 'Cambiar de estado centro de acopio' })
	changeStatus(@IdParam('id') id: string): Promise<CollectionSite> {
		return this.collectionSitesService.changeStatus(+id);

	}

	@Delete(':id')
	@Roles(0)
	remove(@IdParam('id') id: string): Promise<void> {
		return this.collectionSitesService.remove(+id);
	}
}
