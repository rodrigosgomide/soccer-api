import { Entity } from "typeorm";
import BaseDomain from "./BaseDomain";

@Entity()
export default class Match extends BaseDomain {
  tournamentId?: string;
  homeTeamId!: string;
  awayTeamId!: string;
  homeTeamGoal?: number;
  awayTeamGoal?: number;
}
