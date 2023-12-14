import { Entity } from "typeorm";
import BaseDomain from "./BaseDomain";

@Entity()
export default class Assist extends BaseDomain {
  name!: string;
  playerId!: string;
  assistType!: any;
}
