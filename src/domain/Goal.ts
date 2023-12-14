import { Entity } from "typeorm";
import BaseDomain from "./BaseDomain";

@Entity()
export default class Goal extends BaseDomain {
  playerId!: string;
  scoredClubId!: string;
  againstClubId!: string;
  matchId!: string;
  goalTypePlayerId?: string;
  goalTypeClubId?: string;
  assistId?: string;
  time?: number;
}
