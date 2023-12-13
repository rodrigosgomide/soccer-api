import { Column, PrimaryGeneratedColumn } from "typeorm";

export default class BaseDomain {
  @PrimaryGeneratedColumn()
  id!: string;
  @Column()
  createdAt?: Date;
  @Column()
  updatedAt?: Date;
  @Column()
  deletedAt?: Date;

  constructor(baseDomain: BaseDomain) {
    const { id, createdAt, updatedAt, deletedAt } = baseDomain;
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }
}
