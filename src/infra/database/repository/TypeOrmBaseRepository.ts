import { DataSource, Repository } from "typeorm";
import IBaseRepository from "./interfaces/IBaseRepository";

export default class TypeOrmBaseRepository<D> implements IBaseRepository<D> {
  constructor(
    protected repository: Repository<D>,
    private Domain: any,
    protected connection: DataSource
  ) {}
  async create(entity: D): Promise<D> {
    const created = await this.repository.create(entity);
    return new this.Domain(created);
  }
  update(entity: D, id: string): Promise<D> {
    throw "not implemented";
  }
  delete(id: string): Promise<D> {
    throw "not implemented";
  }
  find(option: any): Promise<D | D[]> {
    throw "not implemented";
  }
  findById(id: string): Promise<D> {
    throw "not implemented";
  }
}
