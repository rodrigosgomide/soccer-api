import { Column, Entity } from "typeorm";
import BaseDomain from "./BaseDomain";

@Entity()
export default class Season extends BaseDomain {
  @Column({ type: "year", nullable: false })
  year: Number;
}
