import { Entity } from "typeorm";
import BaseDomain from "./BaseDomain";

@Entity()
export default class Player extends BaseDomain {
  name!: string;
  positionId?: any;
  born?: Date;
  clubId?: string;
}
