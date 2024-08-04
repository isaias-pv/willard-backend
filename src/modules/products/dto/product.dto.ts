import { IsNotEmpty, IsOptional, IsString, IsNumber, IsDecimal, IsBoolean } from 'class-validator';
import { ApiProperty, IntersectionType, PartialType } from '@nestjs/swagger';

import { PagerDto } from 'src/core/common/dto/pager.dto';

export class ProductCreateDto {
	@ApiProperty({ description: 'ID del tipo de producto, debe ser un número.' })
	@IsNotEmpty({ message: 'TipoProductoId es obligatorio y debe ser un número.' })
	@IsNumber({}, { message: 'TipoProductoId debe ser un número.' })
	TipoProductoId: number;

	@ApiProperty({ description: 'ID de la unidad de medida, debe ser un número.' })
	@IsNotEmpty({ message: 'UnidadMedidaId es obligatorio y debe ser un número.' })
	@IsNumber({}, { message: 'UnidadMedidaId debe ser un número.' })
	UnidadMedidaId: number;

	@ApiProperty({ description: 'Nombre del producto, debe ser un texto.' })
	@IsNotEmpty({ message: 'Nombre es obligatorio y debe ser un texto.' })
	@IsString({ message: 'Nombre debe ser un texto.' })
	Nombre: string;

	@ApiProperty({ description: 'Kg promedio del producto, debe ser un número.' })
	@IsNotEmpty({ message: 'KgPromedio es obligatorio y debe ser un número.' })
	@IsNumber({}, { message: 'KgPromedio debe ser un número.' })
	KgPromedio: number;

	@ApiProperty({ description: 'Porcentaje de recuperación del producto, debe ser un decimal.' })
	@IsNotEmpty({ message: 'PorcentajeRecuperacion es obligatorio y debe ser un decimal.' })
	@IsDecimal({}, { message: 'PorcentajeRecuperacion debe ser un decimal.' })
	PorcentajeRecuperacion: number;

	@ApiProperty({ description: 'Indicador de si el producto es certificable, debe ser booleano.' })
	@IsNotEmpty({ message: 'EsCertificable es obligatorio y debe ser booleano.' })
	@IsBoolean({ message: 'EsCertificable debe ser booleano.' })
	EsCertificable: boolean;

	@ApiProperty({ description: 'Referencia1 del producto, opcional, debe ser un texto.' })
	@IsOptional()
	@IsString({ message: 'Referencia1 debe ser un texto.' })
	Referencia1?: string;

	@ApiProperty({ description: 'Referencia2 del producto, opcional, debe ser un texto.' })
	@IsOptional()
	@IsString({ message: 'Referencia2 debe ser un texto.' })
	Referencia2?: string;

	@ApiProperty({ description: 'Referencia3 del producto, opcional, debe ser un texto.' })
	@IsOptional()
	@IsString({ message: 'Referencia3 debe ser un texto.' })
	Referencia3?: string;

	@ApiProperty({ description: 'Descripción del producto, opcional, debe ser un texto.' })
	@IsOptional()
	@IsString({ message: 'Descripcion debe ser un texto.' })
	Descripcion?: string;

	@ApiProperty({ description: 'Referencia WLL del producto, debe ser un texto.' })
	@IsNotEmpty({ message: 'ReferenciaWLL es obligatorio y debe ser un texto.' })
	@IsString({ message: 'ReferenciaWLL debe ser un texto.' })
	ReferenciaWLL: string;

	@ApiProperty({ description: 'Referencia PH del producto, debe ser un texto.' })
	@IsNotEmpty({ message: 'ReferenciaPH es obligatorio y debe ser un texto.' })
	@IsString({ message: 'ReferenciaPH debe ser un texto.' })
	ReferenciaPH: string;
}

export class ProductUpdateDto extends PartialType(ProductCreateDto) { }

export class ProductQueryDto extends IntersectionType(
	PagerDto<ProductCreateDto>,
	PartialType(ProductCreateDto),
) { }
