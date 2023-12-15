import Season from "src/domain/Season";

export default interface ICreateSeason {
  execute: (season: Season) => Promise<Season>;
}
