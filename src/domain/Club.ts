import { Entity } from "typeorm";
import BaseDomain from "./BaseDomain";

@Entity()
export default class Club extends BaseDomain {
  name!: string;
}
