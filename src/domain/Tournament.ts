import { Entity } from "typeorm";
import BaseDomain from "./BaseDomain";

@Entity()
export default class Tournament extends BaseDomain {
  name!: string;
  seasonId!: string;
}
