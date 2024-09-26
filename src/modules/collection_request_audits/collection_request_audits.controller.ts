import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CollectionRequestAuditsService } from './collection_request_audits.service';
import { CollectionRequestAudit } from './entities/collection_request_audit.entity';
import { IdParam } from 'src/core/common/decorators/id-param.decorator';
import { RolesGuard } from 'src/core/guards/roles.guard';
import { Roles } from 'src/core/common/decorators/role.decorator';

@ApiTags('Auditoría de Solicitudes de Recogida')
@UseGuards(RolesGuard)
@Controller('collection-request-audits')
export class CollectionRequestAuditsController {
	constructor(private readonly service: CollectionRequestAuditsService) { }

	@Get(':id')
	@Roles(0)
	@ApiOperation({ summary: 'Obtener auditoría de solicitud de recogida por ID' })
	findOne(@IdParam('id') id: number): Promise<CollectionRequestAudit> {
		return this.service.findOne(id);
	}

	@Get()
	@Roles(0)
	@ApiOperation({ summary: 'Obtener listado de auditorías de solicitudes de recogida' })
	findAll(@Query() query): Promise<CollectionRequestAudit[]> {
		return this.service.findAll(query);
	}
}
