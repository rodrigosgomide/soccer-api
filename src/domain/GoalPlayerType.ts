import { Entity } from "typeorm";
import BaseDomain from "./BaseDomain";

@Entity()
export default class GoalPlayerType extends BaseDomain {
  name!: string;
}
