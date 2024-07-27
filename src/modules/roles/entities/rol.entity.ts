import { CompleteEntity } from "src/core/common/entity/common.entity";
import { Column, Entity } from "typeorm";

@Entity({ name: 'rol' })
export class Rol extends CompleteEntity {
	@Column({ type: 'varchar', length: 50 })
	Nombre: string;

	@Column({ type: 'varchar', length: 255, default: null, nullable: true })
	Descripcion: string;
}
