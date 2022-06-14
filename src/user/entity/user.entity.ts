import { Role } from './../../common/constants/role.constants';
import { BaseEntity } from "src/common/base/base.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: string
    @Column()
    phone: string
    @Column()
    nrc: string
    @Column({
        type: "enum",
        enum: Role,
        default: Role.USER
    })
    role: Role
}