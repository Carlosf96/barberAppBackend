import { Service, SequelizeServiceOptions } from 'feathers-sequelize';
import { Application } from '../../declarations';

export class Users extends Service {
  constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
    super(options);
  }
	async get(id: number): Promise<Users> {
		let userModel = await this.getModel({});
		let users = await userModel.get(id);
		return users;
	}
}
