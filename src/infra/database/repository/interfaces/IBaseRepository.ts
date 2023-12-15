export default interface IBaseRepository<D> {
  create: (entity: D) => Promise<D>;
  update: (entity: D, id: string) => Promise<D>;
  delete: (id: string) => Promise<D>;
  find: (option: any) => Promise<D | D[]>;
  findById: (id: string) => Promise<D>;
}
