import { Entity } from "typeorm";
import BaseDomain from "./BaseDomain";

@Entity()
export default class GoalClubType extends BaseDomain {
  name!: string;
}
