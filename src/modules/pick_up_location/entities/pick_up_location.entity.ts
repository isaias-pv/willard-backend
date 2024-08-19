import { ApiProperty } from "@nestjs/swagger";
import { CompleteEntity } from "src/core/common/entity/common.entity";
import { Client } from "src/modules/clients/entities/client.entity";
import { CollectionSite } from "src/modules/collection_sites/entities/collection_site.entity";
import { Consultant } from "src/modules/consultants/entities/consultant.entity";
import { Column, Entity, ManyToOne, JoinColumn } from "typeorm";

@Entity({ name: 'lugar_recogida' })
export class PickUpLocation extends CompleteEntity {

	@ApiProperty({ description: 'Tipo de Lugar' })
	@Column({ type: 'bigint', name: 'TipoLugarId' })
	placeTypeId: number;

	@ManyToOne(() => Client, client => client.pickUpLocations)
	@JoinColumn({ name: 'ClienteId' })
	client: Client;

	@ManyToOne(() => CollectionSite, collectionSite => collectionSite.pickUpLocations)
	@JoinColumn({ name: 'SedeAcopioId' })
	collectionSite: CollectionSite;

	@ManyToOne(() => Consultant, consultant => consultant.pickUpLocations)
	@JoinColumn({ name: 'AsesorId' })
	consultant: Consultant;

	@ApiProperty({ description: 'Ciudad' })
	@Column({ type: 'bigint', name: 'CiudadId' })
	cityId: number;

	@ApiProperty({ description: 'Zona' })
	@Column({ type: 'bigint', name: 'ZonaId' })
	zoneId: number;

	@ApiProperty({ description: 'Nombre' })
	@Column({ type: 'varchar', length: 50, name: 'Nombre' })
	name: string;

	@ApiProperty({ description: 'Descripción' })
	@Column({ type: 'varchar', length: 255, nullable: true, name: 'Descripcion' })
	description: string;

	@ApiProperty({ description: 'Barrio' })
	@Column({ type: 'varchar', length: 100, name: 'Barrio' })
	neighborhood: string;

	@ApiProperty({ description: 'Dirección' })
	@Column({ type: 'varchar', length: 100, name: 'Direccion' })
	address: string;

	@ApiProperty({ description: 'Latitud' })
	@Column({ type: 'varchar', length: 100, nullable: true, name: 'Latitud' })
	latitude: string;

	@ApiProperty({ description: 'Longitud' })
	@Column({ type: 'varchar', length: 100, nullable: true, name: 'Longitud' })
	longitude: string;

	@ApiProperty({ description: 'Nombre del contacto' })
	@Column({ type: 'varchar', length: 100, name: 'NombreContacto' })
	contactName: string;

	@ApiProperty({ description: 'Email del contacto' })
	@Column({ type: 'varchar', length: 100, name: 'EmailContacto' })
	contactEmail: string;

	@ApiProperty({ description: 'Teléfono del contacto' })
	@Column({ type: 'varchar', length: 100, name: 'CelContacto' })
	contactPhone: string;

	@ApiProperty({ description: 'Referencia WLL' })
	@Column({ type: 'varchar', length: 255, name: 'ReferenciaWLL' })
	referenceWLL: string;

	@ApiProperty({ description: 'Referencia PH' })
	@Column({ type: 'varchar', length: 255, name: 'ReferenciaPH' })
	referencePH: string;
}
